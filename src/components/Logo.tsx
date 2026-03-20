interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "full";
}

 const logoSrc = "/images/1205307631-Green Leaf Minimalist Organic Shop Logo 副本 副本_20231218_205305_0000 (2).svg";

export default function Logo({
  className = "",
  variant = "header",
}: LogoProps) {
  if (variant === "header") {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Orchid Spa Massage"
          width={200}
          height={72}
          className="block object-contain"
          style={{ width: 200, height: 72 }}
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Orchid Spa Massage"
          width={190}
          height={120}
          className="block object-contain"
          style={{ width: 190, height: 120 }}
        />
      </div>
    );
  }

  // full variant
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="Orchid Spa Massage"
        width={320}
        height={220}
        className="block object-contain"
        style={{ width: 320, height: 220 }}
      />
    </div>
  );
}
