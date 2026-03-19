interface LogoProps {
  className?: string;
  color?: string;
  variant?: "header" | "footer" | "full";
}

export default function Logo({
  className = "",
  color = "#5B8DEF",
  variant = "header",
}: LogoProps) {
  if (variant === "full") {
    return (
      <div className={className}>
        <svg
          width="280"
          height="160"
          viewBox="0 0 520 300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Orchid Spa Massage"
          className="block"
        >
          {/* Two leaves */}
          <g fill={color}>
            <path d="M260 165C255 120 230 80 185 55C165 44 140 38 110 40C90 42 72 48 58 58C53 62 52 69 57 73C72 85 82 102 93 119C106 140 122 157 145 166C168 175 195 174 220 166C235 160 248 153 260 145V165Z" />
            <path d="M260 165C265 120 290 80 335 55C355 44 380 38 410 40C430 42 448 48 462 58C467 62 468 69 463 73C448 85 438 102 427 119C414 140 398 157 375 166C352 175 325 174 300 166C285 160 272 153 260 145V165Z" />
            <path d="M253 100C252 85 248 72 243 60C238 72 236 85 235 100C236 115 237 130 240 145L244 145C243 130 243 115 244 100C244 85 245 72 247 60C249 72 250 85 250 100L253 100Z" />
            <path d="M267 100C268 85 272 72 277 60C282 72 284 85 285 100C284 115 283 130 280 145L276 145C277 130 277 115 276 100C276 85 275 72 273 60C271 72 270 85 270 100L267 100Z" />
          </g>
          {/* ORCHID SPA text */}
          <text
            x="260"
            y="225"
            textAnchor="middle"
            fontFamily="'Segoe UI', Arial, Helvetica, sans-serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="10"
            fill={color}
          >
            ORCHID SPA
          </text>
          {/* MASSAGE text */}
          <text
            x="260"
            y="258"
            textAnchor="middle"
            fontFamily="'Segoe UI', Arial, Helvetica, sans-serif"
            fontSize="22"
            fontWeight="400"
            letterSpacing="14"
            fill={color}
            opacity="0.7"
          >
            MASSAGE
          </text>
        </svg>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <svg
          width="180"
          height="100"
          viewBox="0 0 520 300"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Orchid Spa Massage"
          className="block"
        >
          <g fill={color}>
            <path d="M260 165C255 120 230 80 185 55C165 44 140 38 110 40C90 42 72 48 58 58C53 62 52 69 57 73C72 85 82 102 93 119C106 140 122 157 145 166C168 175 195 174 220 166C235 160 248 153 260 145V165Z" />
            <path d="M260 165C265 120 290 80 335 55C355 44 380 38 410 40C430 42 448 48 462 58C467 62 468 69 463 73C448 85 438 102 427 119C414 140 398 157 375 166C352 175 325 174 300 166C285 160 272 153 260 145V165Z" />
            <path d="M253 100C252 85 248 72 243 60C238 72 236 85 235 100C236 115 237 130 240 145L244 145C243 130 243 115 244 100C244 85 245 72 247 60C249 72 250 85 250 100L253 100Z" />
            <path d="M267 100C268 85 272 72 277 60C282 72 284 85 285 100C284 115 283 130 280 145L276 145C277 130 277 115 276 100C276 85 275 72 273 60C271 72 270 85 270 100L267 100Z" />
          </g>
          <text
            x="260"
            y="225"
            textAnchor="middle"
            fontFamily="'Segoe UI', Arial, Helvetica, sans-serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="10"
            fill={color}
          >
            ORCHID SPA
          </text>
          <text
            x="260"
            y="258"
            textAnchor="middle"
            fontFamily="'Segoe UI', Arial, Helvetica, sans-serif"
            fontSize="22"
            fontWeight="400"
            letterSpacing="14"
            fill={color}
            opacity="0.7"
          >
            MASSAGE
          </text>
        </svg>
      </div>
    );
  }

  // Header variant: icon + text side by side, compact
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="40 30 440 150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Orchid Spa"
        className="block shrink-0"
      >
        <g fill={color}>
          <path d="M260 165C255 120 230 80 185 55C165 44 140 38 110 40C90 42 72 48 58 58C53 62 52 69 57 73C72 85 82 102 93 119C106 140 122 157 145 166C168 175 195 174 220 166C235 160 248 153 260 145V165Z" />
          <path d="M260 165C265 120 290 80 335 55C355 44 380 38 410 40C430 42 448 48 462 58C467 62 468 69 463 73C448 85 438 102 427 119C414 140 398 157 375 166C352 175 325 174 300 166C285 160 272 153 260 145V165Z" />
          <path d="M253 100C252 85 248 72 243 60C238 72 236 85 235 100C236 115 237 130 240 145L244 145C243 130 243 115 244 100C244 85 245 72 247 60C249 72 250 85 250 100L253 100Z" />
          <path d="M267 100C268 85 272 72 277 60C282 72 284 85 285 100C284 115 283 130 280 145L276 145C277 130 277 115 276 100C276 85 275 72 273 60C271 72 270 85 270 100L267 100Z" />
        </g>
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="text-lg font-bold tracking-[0.15em]"
          style={{ color }}
        >
          ORCHID SPA
        </span>
        <span
          className="text-[8px] tracking-[0.3em] uppercase opacity-60"
          style={{ color }}
        >
          MASSAGE
        </span>
      </div>
    </div>
  );
}
