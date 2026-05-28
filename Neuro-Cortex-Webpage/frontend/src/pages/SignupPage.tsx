import { useState } from "react";
import { Link, useNavigate } from "react-router";

export const SignupPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Mock signup request
    setTimeout(() => {
      setSubmitted(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-nc-base text-nc-text-primary pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card border-nc-border-active p-10 shadow-xl">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-nc-teal">
                New User
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold font-mono">
                Neuro Cortex Signup
              </h1>
              <p className="mt-3 text-nc-text-muted leading-relaxed">
                Create a new account to access the desktop application.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="signup-email"
                >
                  Email address
                </label>
                <input
                  id="signup-email"
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
                  htmlFor="signup-password"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="terminal-input w-full"
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="signup-confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="••••••••"
                  className="terminal-input w-full"
                  autoComplete="new-password"
                  required
                />
              </div>

              {error && <p className="text-sm text-rose-400">{error}</p>}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 border-2 border-nc-teal text-nc-teal font-mono font-bold text-sm hover:bg-nc-teal hover:text-nc-base transition-all duration-300 neon-glow"
                >
                  {submitted ? "Creating account..." : "Sign Up"}
                </button>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
                  >
                    Already have an account? Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
