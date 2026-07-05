import { useEffect, useState } from "react";

function getTarget() {
  // 3 days from first mount, persisted in localStorage
  const key = "cs_launch_deadline";
  const existing = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
  if (existing) return parseInt(existing, 10);
  const t = Date.now() + 3 * 86400_000 + 7 * 3600_000 + 42 * 60_000;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, String(t));
  }
  return t;
}

export function CountdownTimer() {
  const [target] = useState(() => getTarget());
  const [now, setNow] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = mounted && now !== null ? Math.max(0, target - now) : 0;
  const days = Math.floor(diff / 86400_000);
  const hours = Math.floor((diff / 3600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cells = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {cells.map((c, i) => (
        <div key={c.label} className="flex items-center gap-2 sm:gap-3">
          <div className="glass flex min-w-[60px] flex-col items-center rounded-xl px-3 py-2 sm:min-w-[76px] sm:px-4 sm:py-3">
            <span className="font-[Sora] text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
              {String(c.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              {c.label}
            </span>
          </div>
          {i < cells.length - 1 && (
            <span className="text-xl font-bold text-primary sm:text-2xl">:</span>
          )}
        </div>
      ))}
    </div>
  );
}