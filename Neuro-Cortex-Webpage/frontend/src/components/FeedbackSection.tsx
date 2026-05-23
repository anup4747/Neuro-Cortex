import { useEffect, useState } from "react";

export const FeedbackSection: React.FC = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [pageSection, setPageSection] = useState("pentesting_lab");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [appVersion, setAppVersion] = useState("Web");
  const [deviceInfo, setDeviceInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setDeviceInfo(navigator.userAgent);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    await submitToServer();
    setComment("");
    setRating(5);
    setPageSection("pentesting_lab");
    setUserName("");
    setEmail("");
    setAppVersion("Web");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const submitToServer = async () => {
    try {
      const resp = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: userName,
          user_email: email,
          rating,
          comment,
          page_section: pageSection,
          app_version: appVersion,
          device_info: deviceInfo,
        }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        console.error("feedback submit failed", data);
      }
    } catch (err) {
      console.error("feedback submit error", err);
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-nc-surface/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto glass-card border-nc-border p-10">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-nc-teal">
              User feedback
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-mono">
              Share your thoughts anonymously
            </h2>
            <p className="mt-3 text-nc-text-muted leading-relaxed">
              Help us improve the platform while protecting privacy. Feedback is
              used for product improvements only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="feedback-section"
                >
                  Page section
                </label>
                <select
                  id="feedback-section"
                  value={pageSection}
                  onChange={(event) => setPageSection(event.target.value)}
                  className="terminal-input w-full"
                >
                  <option value="pentesting_lab">Pentesting Lab</option>
                  <option value="threat_intel">Threat Intel</option>
                  <option value="architecture">Architecture</option>
                  <option value="cta">Call to Action</option>
                  <option value="general">General</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="feedback-rating"
                >
                  Rating
                </label>
                <select
                  id="feedback-rating"
                  value={rating}
                  onChange={(event) => setRating(Number(event.target.value))}
                  className="terminal-input w-full"
                >
                  {[5, 4, 3, 2, 1].map((value) => (
                    <option key={value} value={value}>
                      {value} / 5
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="feedback-name"
                >
                  Name (optional)
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  placeholder="Security analyst"
                  className="terminal-input w-full"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-nc-text-primary"
                  htmlFor="feedback-email"
                >
                  Email (optional)
                </label>
                <input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="contact@company.com"
                  className="terminal-input w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-medium text-nc-text-primary"
                htmlFor="feedback-comment"
              >
                Comment
              </label>
              <textarea
                id="feedback-comment"
                rows={5}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Share your experience or suggest improvements..."
                className="terminal-input w-full resize-none"
                required
              />
            </div>

            <input type="hidden" name="app_version" value={appVersion} />
            <input type="hidden" name="device_info" value={deviceInfo} />

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center w-full px-6 py-3 bg-nc-teal text-nc-base font-mono font-bold hover:bg-nc-border-active transition-all duration-300"
            >
              Send feedback
            </button>

            {submitted && (
              <p className="text-sm text-nc-teal">
                Thanks! Your feedback is received.
              </p>
            )}
          </form>

          <p className="text-sm text-nc-text-muted">
            Feedback is recorded for product improvement only. No personal usage
            data is displayed in the web portal.
          </p>
        </div>
      </div>
    </section>
  );
};
