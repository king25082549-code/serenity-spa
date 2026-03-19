interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export default function Logo({
  className = "",
  size = 40,
  showText = true,
  textColor = "text-primary-dark",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Left leaf */}
        <path
          d="M50 55C50 55 25 45 20 20C20 20 45 25 50 55Z"
          fill="#4A7CDB"
          stroke="#3A65B5"
          strokeWidth="1"
        />
        <path
          d="M50 55C50 55 30 35 28 22"
          stroke="#3A65B5"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Right leaf */}
        <path
          d="M50 55C50 55 75 45 80 20C80 20 55 25 50 55Z"
          fill="#4A7CDB"
          stroke="#3A65B5"
          strokeWidth="1"
        />
        <path
          d="M50 55C50 55 70 35 72 22"
          stroke="#3A65B5"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Stem */}
        <path
          d="M50 55C50 55 48 70 50 85"
          stroke="#4A7CDB"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-bold tracking-[0.2em] ${textColor}`}>
            ORCHID SPA
          </span>
          <span className={`text-[9px] tracking-[0.35em] uppercase ${textColor} opacity-60`}>
            Massage
          </span>
        </div>
      )}
    </div>
  );
}
