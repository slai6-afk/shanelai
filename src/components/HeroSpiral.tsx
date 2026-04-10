import { useEffect, useMemo, useState, type CSSProperties } from 'react';

interface SpiralColorStop {
  color: string;
}

interface HeroSpiralProps {
  totalDots?: number;
  dotRadius?: number;
  duration?: number;
  dotColor?: string;
  margin?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minScale?: number;
  maxScale?: number;
  useMultipleColors?: boolean;
  colors?: SpiralColorStop[];
  size?: number;
  style?: CSSProperties;
}

interface SpiralDot {
  key: number;
  x: number;
  y: number;
  fill: string;
  delay: number;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return prefersReducedMotion;
}

export function HeroSpiral({
  totalDots = 640,
  dotRadius = 2.1,
  duration = 4.2,
  dotColor = '#D9B7FF',
  margin = 18,
  minOpacity = 0.12,
  maxOpacity = 0.9,
  minScale = 0.55,
  maxScale = 1.45,
  useMultipleColors = true,
  colors = [
    { color: '#EFE7FF' },
    { color: '#D8BBFF' },
    { color: '#F7D7FF' },
  ],
  size = 760,
  style,
}: HeroSpiralProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const dots = useMemo<SpiralDot[]>(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const center = size / 2;
    const maxRadius = center - margin - dotRadius;

    return Array.from({ length: totalDots }, (_, index) => {
      const idx = index + 0.5;
      const fraction = idx / totalDots;
      const radius = Math.sqrt(fraction) * maxRadius;
      const theta = idx * goldenAngle;

      const fill = useMultipleColors && colors.length > 0
        ? colors[Math.min(Math.floor(fraction * colors.length), colors.length - 1)].color
        : dotColor;

      return {
        key: index,
        x: center + radius * Math.cos(theta),
        y: center + radius * Math.sin(theta),
        fill,
        delay: fraction * duration,
      };
    });
  }, [colors, dotColor, dotRadius, duration, margin, size, totalDots, useMultipleColors]);

  const colorValues = useMemo(() => colors.map(({ color }) => color).join(';'), [colors]);

  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        {dots.map((dot) => (
          <circle
            key={dot.key}
            cx={dot.x}
            cy={dot.y}
            r={prefersReducedMotion ? dotRadius * 0.85 : dotRadius}
            fill={dot.fill}
            opacity={prefersReducedMotion ? 0.45 : minOpacity}
          >
            {!prefersReducedMotion && useMultipleColors && colors.length > 1 ? (
              <animate
                attributeName="fill"
                values={colorValues}
                dur={`${duration}s`}
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            ) : null}
            {!prefersReducedMotion ? (
              <animate
                attributeName="r"
                values={`${dotRadius * minScale};${dotRadius * maxScale};${dotRadius * minScale}`}
                dur={`${duration}s`}
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              />
            ) : null}
            {!prefersReducedMotion ? (
              <animate
                attributeName="opacity"
                values={`${minOpacity};${maxOpacity};${minOpacity}`}
                dur={`${duration}s`}
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
              />
            ) : null}
          </circle>
        ))}
      </svg>
    </div>
  );
}
