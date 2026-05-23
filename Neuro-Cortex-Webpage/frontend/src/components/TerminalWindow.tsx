import { useEffect, useState } from "react";

const terminalOutput = `neuro@cortex:~/lab$ ./exploit --target mock-app --vector sqli
 [*] Initializing payload engine...
 [*] Injecting: ' OR 1=1; --
 [+] Authentication bypass: SUCCESS
 [+] Extracted 47 records from users table
 [!] SEVERITY: CRITICAL
 [*] Generating remediation report...
 [✓] Report saved: /reports/sqli_2024_001.pdf
 neuro@cortex:~/lab$ `;

export const TerminalWindow: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let isMounted = true;

    const type = () => {
      if (!isMounted) return;

      if (index < terminalOutput.length) {
        setDisplayedText(terminalOutput.slice(0, index + 1));
        index++;
        setTimeout(type, 30);
      } else {
        setIsComplete(true);
      }
    };

    type();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="glass-card border-2 border-nc-border p-4 font-mono text-sm">
      {/* Window Header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-nc-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-nc-red" />
          <div className="w-3 h-3 rounded-full bg-nc-amber" />
          <div className="w-3 h-3 rounded-full bg-nc-teal" />
        </div>
        <span className="text-nc-text-muted text-xs ml-2">
          neuro@cortex:~/lab
        </span>
      </div>

      {/* Terminal Output */}
      <div className="text-nc-text-code space-y-1 min-h-48">
        {displayedText.split("\n").map((line, idx) => (
          <div key={idx} className="flex">
            {line.includes("[*]") && (
              <span className="text-nc-text-muted">{line}</span>
            )}
            {line.includes("[+]") && (
              <span className="text-nc-teal font-bold">{line}</span>
            )}
            {line.includes("[!]") && (
              <span className="text-nc-red font-bold">{line}</span>
            )}
            {line.includes("[✓]") && (
              <span className="text-nc-teal">{line}</span>
            )}
            {!line.includes("[") && <span>{line}</span>}
          </div>
        ))}
        {!isComplete && displayedText && (
          <span className="animate-blink">▋</span>
        )}
      </div>
    </div>
  );
};
