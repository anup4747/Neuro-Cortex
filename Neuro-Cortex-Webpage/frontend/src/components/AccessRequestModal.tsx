import { useState } from "react";

interface AccessRequestModalProps {
  open: boolean;
  onClose: () => void;
}

const requestTypes = [
  { value: "beta_access", label: "Beta access" },
  { value: "enterprise_license", label: "Enterprise license" },
  { value: "advanced_pentest", label: "Advanced pentest" },
];

const expectedUsageOptions = [
  { value: "personal_learning", label: "Personal learning" },
  { value: "company_security_team", label: "Company security team" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
];

export const AccessRequestModal: React.FC<AccessRequestModalProps> = ({
  open,
  onClose,
}) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [requestType, setRequestType] = useState("beta_access");
  const [message, setMessage] = useState("");
  const [expectedUsage, setExpectedUsage] = useState("personal_learning");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setUserName("");
      setUserEmail("");
      setCompanyName("");
      setRequestType("beta_access");
      setMessage("");
      setExpectedUsage("personal_learning");
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1200);
    }, 600);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl overflow-hidden border border-nc-border bg-nc-base p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-nc-teal">
              Access request
            </p>
            <h2 className="mt-3 text-3xl font-bold font-mono text-nc-text-primary">
              Request access to Neuro-Cortex Desktop
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-nc-text-muted hover:text-nc-teal transition-colors"
            aria-label="Close access request form"
          >
            ✕
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-nc-text-muted">
          Complete the access request form to begin the onboarding process. This
          web portal does not expose usage metrics or sensitive user data.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-nc-text-primary">
              Your name
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
                placeholder="Jordan Lee"
                className="terminal-input w-full"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-nc-text-primary">
              Email address
              <input
                type="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                required
                placeholder="security@company.com"
                className="terminal-input w-full"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-nc-text-primary">
            Company name
            <input
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              placeholder="Acme Security Labs"
              className="terminal-input w-full"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-nc-text-primary">
              Request type
              <select
                value={requestType}
                onChange={(event) => setRequestType(event.target.value)}
                className="terminal-input w-full"
              >
                {requestTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm font-medium text-nc-text-primary">
              Expected usage
              <select
                value={expectedUsage}
                onChange={(event) => setExpectedUsage(event.target.value)}
                className="terminal-input w-full"
              >
                {expectedUsageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-nc-text-primary">
            Why you want access
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              placeholder="Explain your use case and how your team will deploy OPUS Desktop."
              className="terminal-input w-full resize-none"
            />
          </label>

          <input type="hidden" name="app_version" value="Web" />

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex border-2 border-nc-teal text-sm hover:bg-nc-teal bg-transparent hover:text-nc-base  text-nc-teal font-mono font-bold w-full items-center justify-center px-6 py-3  transition-all duration-300  disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Send request"}
          </button>

          {submitted && (
            <p className="text-sm text-nc-teal">
              ✓ Request submitted. We will contact you with next steps.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
