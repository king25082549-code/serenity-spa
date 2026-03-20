interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "full";
}

export default function Logo({
  className = "",
  variant = "header",
}: LogoProps) {
  const sizes = {
    header: { width: 160, height: 48 },
    footer: { width: 180, height: 100 },
    full: { width: 280, height: 280 },
  };

  const { width, height } = sizes[variant];

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/orchid-spa-logo.svg"
        alt="Orchid Spa Massage"
        width={width}
        height={height}
        className="block object-contain"
        style={{ width, height }}
      />
    </div>
  );
}
