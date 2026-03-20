interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "full";
}

export default function Logo({
  className = "",
  variant = "header",
}: LogoProps) {
  if (variant === "header") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/orchid-spa-logo.svg"
          alt="Orchid Spa Massage"
          width={52}
          height={52}
          className="block object-contain"
          style={{ width: 52, height: 52 }}
        />
        <div className="flex flex-col leading-tight">
          <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">
            ORCHID SPA
          </span>
          <span className="text-white/50 text-[9px] tracking-[0.35em] uppercase">
            MASSAGE
          </span>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/orchid-spa-logo-white.svg"
          alt="Orchid Spa Massage"
          width={150}
          height={150}
          className="block object-contain"
          style={{ width: 150, height: 150 }}
        />
      </div>
    );
  }

  // full variant
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/orchid-spa-logo.svg"
        alt="Orchid Spa Massage"
        width={280}
        height={280}
        className="block object-contain"
        style={{ width: 280, height: 280 }}
      />
    </div>
  );
}
