import React from 'react'

export default function SvgComponent(props) {
  return (
    <svg
      width="100%"
      height={67}
      aria-labelledby="loading-aria"
      preserveAspectRatio="none"
      {...props}
    >
      <rect
        width="100%"
        height="100%"
        clipPath="url(#prefix__a)"
        fill="url(#prefix__b)"
      />
      <defs>
        <linearGradient id="prefix__b">
          <stop offset={0.6} stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset={1.6} stopColor="#ecebeb">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset={2.6} stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <clipPath id="prefix__a">
          <rect x={62} y={8} rx={3} ry={3} width={150} height={6} />
          <rect x={62} y={31} rx={3} ry={3} width={70} height={6} />
          <circle cx={25} cy={25} r={25} />
          <rect x={62} y={18} rx={3} ry={3} width={110} height={6} />
        </clipPath>
      </defs>
    </svg>
  )
}
