interface DesktopAccessPageProps {
  onBack?: () => void;
}

export const DesktopAccessPage: React.FC<DesktopAccessPageProps> = ({
  onBack,
}) => {
  return (
    <main className="min-h-screen bg-nc-base text-nc-text-primary pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <section className="glass-card border-nc-border-active p-10 shadow-xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-nc-teal">
            Desktop access only
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold font-mono">
            Open the Desktop App
          </h1>
          <p className="mt-4 text-nc-text-muted leading-relaxed">
            You are authenticated. To continue, launch the Neuro Cortex desktop
            client. This web portal keeps user interaction limited and does not
            display activity data.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              className="px-8 py-3 bg-nc-teal text-nc-base font-mono font-bold hover:bg-nc-border-active transition-all duration-300"
            >
              Open Desktop App
            </button>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="text-sm text-nc-text-muted hover:text-nc-teal transition-colors"
              >
                Back to website
              </button>
            )}
          </div>

          <div className="mt-8 rounded-lg border border-nc-border bg-nc-surface p-4 text-sm text-nc-text-muted">
            <p>
              The desktop client is the trusted environment for pentesting
              sessions. The website only provides access and feedback flows.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
