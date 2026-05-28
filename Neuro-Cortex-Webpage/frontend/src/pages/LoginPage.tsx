import { useState } from "react";
import { Link } from "react-router";


export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setError("");
    setSubmitted(true);

    (async () => {
      try {
        const resp = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await resp.json();
        if (!resp.ok) {
          setError(data?.error || "Login failed");
          setSubmitted(false);
          return;
        }
        // successful sign-in; proceed to desktop flow
        setSubmitted(false);
      } catch (err) {
        console.error("login error", err);
        setError("Login failed");
        setSubmitted(false);
      }
    })();
  };

  return (
    <main className="min-h-screen bg-nc-base text-nc-text-primary pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card border-nc-border-active p-10 shadow-xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-nc-teal">
                Secure access
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold font-mono">
                Neuro Cortex Login
              </h1>
              <p className="mt-3 text-nc-text-muted leading-relaxed">
                Accounts are created by the system administrator. Enter your
                credentials to move to the desktop application.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="login-email"
                >
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="analyst@company.com"
                  className="terminal-input w-full"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="login-password"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="terminal-input w-full"
                  autoComplete="current-password"
                  required
                />
              </div>

              {error && <p className="text-sm text-rose-400">{error}</p>}

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="px-6 py-3 border-2 border-nc-teal text-nc-teal font-mono font-bold text-sm hover:bg-nc-teal hover:text-nc-base transition-all duration-300 neon-glow"
                  >
                    {submitted ? "Logging in..." : "Login"}
                  </button>
                  <Link to="/">
                    <button
                      type="button"
                      className="text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                    >
                      Back to website
                    </button>
                  </Link>
                </div>
                <div className="text-sm text-nc-text-muted mt-1">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-nc-teal hover:underline font-medium transition-colors">
                    Create one here
                  </Link>
                </div>
              </div>
            </form>

            <div className="rounded-lg border border-nc-border bg-nc-surface p-4 text-sm text-nc-text-muted">
              <p>
                This site does not expose usage metrics or personal tracking.
                The desktop client is the next step once login is complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
