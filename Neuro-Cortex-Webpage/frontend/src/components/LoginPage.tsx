import { useState } from "react";

interface LoginPageProps {
  onSuccess: () => void;
  onCancel?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onSuccess,
  onCancel,
}) => {
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
    setTimeout(() => {
      setSubmitted(false);
      onSuccess();
    }, 600);
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

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 bg-nc-teal text-nc-base font-mono font-bold hover:bg-nc-border-active transition-all duration-300"
                >
                  {submitted ? "Logging in..." : "Login"}
                </button>
                {onCancel && (
                  <button
                    type="button"
                    onClick={onCancel}
                    className="text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                  >
                    Back to website
                  </button>
                )}
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
