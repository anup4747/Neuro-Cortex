import { Link } from "react-router";

export const DashboardPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-nc-base text-nc-text-primary pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card border-nc-border-active p-10 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-nc-teal">
                Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-bold font-mono">
                Welcome back, Analyst
              </h1>
            </div>
            <Link to="/">
              <button
                type="button"
                className="px-4 py-2 border border-nc-border text-nc-text-muted hover:border-nc-teal hover:text-nc-teal transition-all duration-300 text-sm font-mono"
              >
                Logout
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-nc-border bg-nc-surface/50 rounded-lg">
              <h2 className="text-lg font-mono font-semibold mb-2">User Profile</h2>
              <div className="space-y-3 text-sm text-nc-text-muted mt-4">
                <p><span className="text-nc-text-primary">Name:</span> Jane Doe</p>
                <p><span className="text-nc-text-primary">Role:</span> Security Analyst</p>
                <p><span className="text-nc-text-primary">Email:</span> analyst@company.com</p>
                <p><span className="text-nc-text-primary">Clearance:</span> Level 4</p>
              </div>
            </div>
            
            <div className="p-6 border border-nc-border bg-nc-surface/50 rounded-lg">
              <h2 className="text-lg font-mono font-semibold mb-2">Recent Activity</h2>
              <ul className="space-y-3 text-sm text-nc-text-muted mt-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-nc-teal"></span>
                  Logged in from IP 192.168.1.100
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  Analyzed threat report #TR-882
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Blocked malicious payload from 45.33.x.x
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
