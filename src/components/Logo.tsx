interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  color?: string;
}

export default function Logo({
  className = "",
  size = 160,
  showText = true,
  color = "#4E79E6",
}: LogoProps) {
  const iconWidth = size;
  const iconHeight = showText ? size * 0.42 : size * 0.24;

  return (
    <div className={className}>
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox={showText ? "0 0 520 210" : "0 0 520 120"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Orchid Spa Massage"
        className="block"
      >
        <g fill={color}>
          <path d="M101 62C135 47 173 46 205 56C231 64 249 82 259 110C252 109 246 107 240 104C223 96 208 85 194 73C178 61 158 53 133 51C122 50 112 50 101 52C97 53 95 58 98 61L101 62Z" />
          <path d="M259 112C251 82 233 61 208 49C180 35 145 31 109 35C84 38 62 46 45 59C41 62 40 68 44 72C53 80 60 91 67 103C75 117 83 131 95 141C116 159 146 162 177 154C200 148 221 136 242 124C248 121 254 117 259 112Z" />
          <path d="M419 62C385 47 347 46 315 56C289 64 271 82 261 110C268 109 274 107 280 104C297 96 312 85 326 73C342 61 362 53 387 51C398 50 408 50 419 52C423 53 425 58 422 61L419 62Z" />
          <path d="M261 112C269 82 287 61 312 49C340 35 375 31 411 35C436 38 458 46 475 59C479 62 480 68 476 72C467 80 460 91 453 103C445 117 437 131 425 141C404 159 374 162 343 154C320 148 299 136 278 124C272 121 266 117 261 112Z" />
          <path d="M252 166C251 130 249 103 246 82C242 103 240 130 239 166H244C244 145 245 124 246 103C247 124 248 145 248 166H252Z" />
          <path d="M260 166C261 130 263 103 266 82C270 103 272 130 273 166H268C268 145 267 124 266 103C265 124 264 145 264 166H260Z" />
        </g>
        {showText && (
          <>
            <text
              x="260"
              y="188"
              textAnchor="middle"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="42"
              fontWeight="700"
              letterSpacing="7"
              fill={color}
            >
              ORCHID SPA
            </text>
            <text
              x="260"
              y="206"
              textAnchor="middle"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="18"
              fontWeight="400"
              letterSpacing="11"
              fill={color}
            >
              MASSAGE
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
