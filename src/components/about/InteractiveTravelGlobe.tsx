import { useEffect, useMemo, useRef, useState } from 'react';

type MarkerTone = 'blue' | 'gold';

type TravelLocation = {
  id: string;
  label: string;
  lat: number;
  lon: number;
  tone: MarkerTone;
};

type ProjectedPoint = {
  x: number;
  y: number;
  z: number;
  visible: boolean;
};

const GLOBE_SIZE = 420;
const RADIUS = 198;
const DOT_STEP = 3.9;
const FIXED_LABEL_IDS = ['nyc', 'xian'] as const;
type LandDot = { lat: number; lon: number };

let landDotsCache: LandDot[] | null = null;
let landDotsPromise: Promise<LandDot[]> | null = null;

const LOCATIONS: TravelLocation[] = [
  { id: 'san-francisco', label: 'San Francisco', lat: 37.7749, lon: -122.4194, tone: 'blue' },
  { id: 'boston', label: 'Boston', lat: 42.3601, lon: -71.0589, tone: 'blue' },
  { id: 'nyc', label: 'NYC, I am here!', lat: 40.7128, lon: -74.006, tone: 'gold' },
  { id: 'new-hampshire', label: 'New Hampshire', lat: 43.2081, lon: -71.5376, tone: 'blue' },
  { id: 'salt-lake-city', label: 'Salt Lake City', lat: 40.7608, lon: -111.891, tone: 'blue' },
  { id: 'cancun', label: 'Cancun', lat: 21.1619, lon: -86.8515, tone: 'blue' },
  { id: 'playa-del-carmen', label: 'Playa Del Carmen', lat: 20.6296, lon: -87.0739, tone: 'blue' },
  { id: 'london', label: 'London', lat: 51.5072, lon: -0.1276, tone: 'blue' },
  { id: 'cairo', label: 'Cairo', lat: 30.0444, lon: 31.2357, tone: 'blue' },
  { id: 'dahab', label: 'Dahab', lat: 28.5091, lon: 34.5136, tone: 'blue' },
  { id: 'sharm', label: 'Sharm el-Sheikh', lat: 27.9158, lon: 34.3299, tone: 'blue' },
  { id: 'tehran', label: 'Tehran', lat: 35.6892, lon: 51.389, tone: 'blue' },
  { id: 'dubai', label: 'Dubai', lat: 25.2048, lon: 55.2708, tone: 'blue' },
  { id: 'riyadh', label: 'Riyadh', lat: 24.7136, lon: 46.6753, tone: 'blue' },
  { id: 'beijing', label: 'Beijing', lat: 39.9042, lon: 116.4074, tone: 'blue' },
  { id: 'chengdu', label: 'Chengdu', lat: 30.5728, lon: 104.0668, tone: 'blue' },
  { id: 'shanghai', label: 'Shanghai', lat: 31.2304, lon: 121.4737, tone: 'blue' },
  { id: 'lhasa', label: 'Lhasa', lat: 29.652, lon: 91.1721, tone: 'blue' },
  { id: 'xian', label: 'Xi An, home sweet home', lat: 34.3416, lon: 108.9398, tone: 'gold' },
  { id: 'wuhan', label: 'Wuhan', lat: 30.5928, lon: 114.3055, tone: 'blue' },
  { id: 'kunming', label: 'Kunming', lat: 24.8801, lon: 102.8329, tone: 'blue' },
  { id: 'dali', label: 'Dali', lat: 25.6075, lon: 100.2676, tone: 'blue' },
  { id: 'tokyo', label: 'Tokyo', lat: 35.6762, lon: 139.6503, tone: 'blue' },
  { id: 'ho-chi-minh', label: 'Ho Chi Minh City', lat: 10.8231, lon: 106.6297, tone: 'blue' },
  { id: 'hong-kong', label: 'Hong Kong', lat: 22.3193, lon: 114.1694, tone: 'blue' },
  { id: 'chiang-mai', label: 'Chiang Mai', lat: 18.7883, lon: 98.9853, tone: 'blue' },
  { id: 'bali', label: 'Bali', lat: -8.65, lon: 115.2167, tone: 'blue' },
  { id: 'bangkok', label: 'Bangkok', lat: 13.7563, lon: 100.5018, tone: 'blue' },
  { id: 'phuket', label: 'Phuket', lat: 7.8804, lon: 98.3923, tone: 'blue' },
  { id: 'krabi', label: 'Krabi', lat: 8.0863, lon: 98.9063, tone: 'blue' },
];

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function project(lat: number, lon: number, rotationLon: number, tiltLat = 14): ProjectedPoint {
  const phi = toRadians(lat);
  const lambda = toRadians(lon + rotationLon);
  const phi0 = toRadians(tiltLat);

  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const cosLambda = Math.cos(lambda);
  const sinLambda = Math.sin(lambda);
  const cosPhi0 = Math.cos(phi0);
  const sinPhi0 = Math.sin(phi0);

  const z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda;
  const visible = z > 0;
  const x = RADIUS * cosPhi * sinLambda;
  const y = -RADIUS * (cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosLambda);

  return {
    x: GLOBE_SIZE / 2 + x,
    y: GLOBE_SIZE / 2 + y,
    z,
    visible,
  };
}

async function loadLandDots(): Promise<LandDot[]> {
  if (landDotsCache) return landDotsCache;
  if (landDotsPromise) return landDotsPromise;

  landDotsPromise = (async () => {
    const [{ geoContains }, { feature }, countries110m] = await Promise.all([
      import('d3-geo'),
      import('topojson-client'),
      import('world-atlas/countries-110m.json'),
    ]);

    const worldCountries = feature(
      countries110m as unknown as { objects: { countries: unknown } },
      (countries110m as unknown as { objects: { countries: unknown } }).objects.countries as never
    ) as GeoJSON.FeatureCollection;

    const dots: LandDot[] = [];
    for (let lat = -80; lat <= 82; lat += DOT_STEP) {
      for (let lon = -180; lon <= 180; lon += DOT_STEP) {
        const onLand = geoContains(worldCountries as never, [lon, lat]);
        if (!onLand) continue;
        if (lat < -66 && Math.round((lon + 180) / DOT_STEP) % 7 !== 0) continue;
        dots.push({ lat, lon });
      }
    }

    landDotsCache = dots;
    return dots;
  })();

  return landDotsPromise;
}

export function InteractiveTravelGlobe() {
  const [rotationLon, setRotationLon] = useState(-92);
  const [landDots, setLandDots] = useState<LandDot[]>(() => landDotsCache ?? []);
  const [manualLabelId, setManualLabelId] = useState<string | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const rotationStartRef = useRef(-92);

  useEffect(() => {
    let cancelled = false;
    if (landDotsCache) {
      setLandDots(landDotsCache);
      return;
    }
    void loadLandDots().then((dots) => {
      if (!cancelled) setLandDots(dots);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const projectedLandDots = useMemo(
    () =>
      landDots
        .map((dot) => {
          const p = project(dot.lat, dot.lon, rotationLon);
          return { ...dot, ...p };
        })
        .filter((dot) => dot.visible),
    [landDots, rotationLon]
  );

  const projectedLocations = useMemo(
    () =>
      LOCATIONS.map((location) => ({
        ...location,
        ...project(location.lat, location.lon, rotationLon),
      })).filter((location) => location.visible),
    [rotationLon]
  );

  const projectedLocationMap = useMemo(
    () => new Map(projectedLocations.map((location) => [location.id, location])),
    [projectedLocations]
  );
  const activeLabelIds = useMemo(() => {
    const ids: string[] = [...FIXED_LABEL_IDS];
    if (manualLabelId && !ids.includes(manualLabelId)) {
      ids.push(manualLabelId);
    }
    return ids;
  }, [manualLabelId]);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (!draggingRef.current) {
        setRotationLon((prev) => prev + 0.022);
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="relative select-none touch-pan-y"
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        marginInline: 'auto',
      }}
      onPointerDown={(event) => {
        draggingRef.current = true;
        dragStartXRef.current = event.clientX;
        rotationStartRef.current = rotationLon;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!draggingRef.current) return;
        const deltaX = event.clientX - dragStartXRef.current;
        setRotationLon(rotationStartRef.current + deltaX * 0.33);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
      onLostPointerCapture={() => {
        draggingRef.current = false;
      }}
      aria-label="Interactive travel globe"
      role="application"
    >
      <svg viewBox={`0 0 ${GLOBE_SIZE} ${GLOBE_SIZE}`} className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="globe-fill" cx="35%" cy="28%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="68%" stopColor="#f7f8fa" />
            <stop offset="100%" stopColor="#eef1f4" />
          </radialGradient>
        </defs>

        <circle cx={GLOBE_SIZE / 2} cy={GLOBE_SIZE / 2} r={RADIUS} fill="url(#globe-fill)" />

        {projectedLandDots.map((dot, index) => (
          <circle
            key={`${dot.lat}-${dot.lon}-${index}`}
            cx={dot.x}
            cy={dot.y}
            r={dot.z > 0.72 ? 2.5 : 1.9}
            fill="#4d5157"
            opacity={0.28 + dot.z * 0.58}
          />
        ))}

        {projectedLocations.map((location) => {
          const isSelected = activeLabelIds.includes(location.id);
          const markerFill = location.tone === 'gold' ? '#d7a13a' : '#3b82f6';
          return (
            <g key={location.id}>
              <circle
                cx={location.x}
                cy={location.y}
                r={isSelected ? 5.8 : 4.4}
                fill={markerFill}
                opacity={isSelected ? 1 : 0.82}
                stroke="#ffffff"
                strokeWidth={1.5}
                className="cursor-pointer"
                onPointerDown={(event) => {
                  event.stopPropagation();
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  setManualLabelId((prev) => (prev === location.id ? null : location.id));
                }}
              />
            </g>
          );
        })}
      </svg>

      {activeLabelIds.map((id) => {
        const location = projectedLocationMap.get(id);
        if (!location) return null;

        const xPercent = (location.x / GLOBE_SIZE) * 100;
        const yPercent = (location.y / GLOBE_SIZE) * 100;
        const clampedX = Math.max(14, Math.min(86, xPercent));
        const isFixed = FIXED_LABEL_IDS.includes(id as (typeof FIXED_LABEL_IDS)[number]);
        const verticalNudge = id === 'nyc' ? -4 : id === 'xian' ? 4 : 0;
        const clampedY = Math.max(12, Math.min(88, yPercent + verticalNudge));
        const alignRight = clampedX > 72;
        const placeBelow = clampedY < 16;

        return (
          <div
            key={id}
            className="pointer-events-none absolute z-20"
            style={{
              left: `${clampedX}%`,
              top: `${clampedY}%`,
              transform: `${alignRight ? 'translateX(-100%) ' : ''}${placeBelow ? 'translateY(8px)' : 'translateY(-108%)'}`,
            }}
          >
            <div
              style={{
                borderRadius: '999px',
                border: '1px solid rgba(17, 24, 39, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                color: 'var(--ds-text-primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                lineHeight: 1.2,
                letterSpacing: '0.02em',
                padding: '8px 12px',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 22px rgba(17, 24, 39, 0.12)',
                pointerEvents: isFixed ? 'none' : 'auto',
                cursor: isFixed ? 'default' : 'pointer',
              }}
              onClick={() => {
                if (isFixed) return;
                setManualLabelId(null);
              }}
            >
              {location.label}
            </div>
          </div>
        );
      })}

    </div>
  );
}
