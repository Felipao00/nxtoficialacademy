"use client";

export default function TopBar() {
  return (
    <div className="relative bg-emerald-500 overflow-hidden py-2">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {[...Array(6)].map((_, j) => (
              <div key={j} className="flex items-center gap-8">
                <span className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider">
                  NATIVA ACADEMY
                </span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}