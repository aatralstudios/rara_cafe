import React, { useEffect, useState, useRef, useCallback } from 'react';

interface Waypoint {
  p: number; // scroll progress 0.0 to 1.0
  x: number; // viewport horizontal percentage
  y: number; // viewport vertical percentage
  rot: number; // rotation in degrees
  scale: number; // size scale
}

// Keyframe waypoints mapping the bean's journey across sections from top to bottom
const WAYPOINTS: Waypoint[] = [
  // 1. Hero start: floating top-right near the title
  { p: 0.00, x: 84, y: 16, rot: 15, scale: 1.0 },
  // 2. Mid Hero: drifting down towards right edge
  { p: 0.08, x: 88, y: 25, rot: 75, scale: 1.05 },
  // 3. Hero to Brand Intro: sweeping inward across center
  { p: 0.17, x: 62, y: 38, rot: 150, scale: 1.0 },
  // 4. Brand Intro: gliding over to the left side
  { p: 0.25, x: 16, y: 48, rot: 225, scale: 1.1 },
  // 5. Transition to Menu: looping back center-left
  { p: 0.34, x: 26, y: 35, rot: 310, scale: 0.95 },
  // 6. Signature Snacks: swooping over to the right side
  { p: 0.43, x: 82, y: 46, rot: 395, scale: 1.05 },
  // 7. Snack Counter: diving down near center
  { p: 0.51, x: 50, y: 60, rot: 485, scale: 1.1 },
  // 8. Brewed Coffee Section: sweeping toward the left near the brass dabara
  { p: 0.60, x: 18, y: 36, rot: 575, scale: 1.05 },
  // 9. Why RaRa: sailing smoothly to the right
  { p: 0.69, x: 82, y: 48, rot: 660, scale: 1.0 },
  // 10. Visual Storytelling: dipping into center-left
  { p: 0.78, x: 30, y: 55, rot: 750, scale: 0.95 },
  // 11. Ra Ra Moments Gallery: curving across photo mosaic to the right
  { p: 0.86, x: 78, y: 42, rot: 835, scale: 1.05 },
  // 12. Location Section: curving to the left
  { p: 0.93, x: 22, y: 52, rot: 920, scale: 1.0 },
  // 13. Final CTA & Footer: descending into the center
  { p: 1.00, x: 50, y: 72, rot: 1010, scale: 1.2 },
];

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export const TravellingCoffeeBean: React.FC = () => {
  // Current interpolated state
  const [coords, setCoords] = useState({ x: 84, y: 16, rot: 15, scale: 1.0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isBouncing, setIsBouncing] = useState(false);
  const [funQuote, setFunQuote] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // References for smooth requestAnimationFrame lerp
  const targetCoords = useRef({ x: 84, y: 16, rot: 15, scale: 1.0 });
  const currentCoords = useRef({ x: 84, y: 16, rot: 15, scale: 1.0 });
  const animFrameId = useRef<number | null>(null);
  const trailCounter = useRef(0);
  const lastTrailTime = useRef(0);

  // Fun cafe quotes triggered on bean click
  const quotes = [
    'Pure Kaapi Joy! ☕',
    'Freshly Roasted! ✦',
    'Crunch & Sip! 🥨',
    'Good Moments Await! ✨',
    '100% Filter Coffee Love ❤️',
    'Karappakkam Special! 🌟',
  ];

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate waypoints interpolation
  const getWaypointState = useCallback((progress: number) => {
    const clampedProgress = Math.min(1, Math.max(0, progress));

    // Find the current waypoint segment
    let i = 0;
    while (i < WAYPOINTS.length - 1 && WAYPOINTS[i + 1].p < clampedProgress) {
      i++;
    }

    const w0 = WAYPOINTS[i];
    const w1 = WAYPOINTS[Math.min(i + 1, WAYPOINTS.length - 1)];

    if (w0.p === w1.p) {
      return { x: w0.x, y: w0.y, rot: w0.rot, scale: w0.scale };
    }

    // Segment linear ratio t
    const t = (clampedProgress - w0.p) / (w1.p - w0.p);
    // Smooth quadratic ease-in-out
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    let x = w0.x + (w1.x - w0.x) * ease;
    const y = w0.y + (w1.y - w0.y) * ease;
    const rot = w0.rot + (w1.rot - w0.rot) * ease;
    const scale = w0.scale + (w1.scale - w0.scale) * ease;

    // Safety clamping on mobile so it stays beautifully in viewport
    if (window.innerWidth < 640) {
      x = Math.max(12, Math.min(88, x));
    }

    return { x, y, rot, scale };
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      targetCoords.current = getWaypointState(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [getWaypointState]);

  // Animation frame loop with smooth lerping and idle bobbing
  useEffect(() => {
    let startTime = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - startTime) * 0.001;

      // Subtle organic hover bobbing
      const idleBobX = Math.sin(elapsed * 2.2) * 3;
      const idleBobY = Math.cos(elapsed * 1.8) * 4;

      // Smooth lerp factor (0.1 for buttery fluidity)
      const lerp = 0.1;
      currentCoords.current.x += (targetCoords.current.x - currentCoords.current.x) * lerp;
      currentCoords.current.y += (targetCoords.current.y - currentCoords.current.y) * lerp;
      currentCoords.current.rot += (targetCoords.current.rot - currentCoords.current.rot) * lerp;
      currentCoords.current.scale += (targetCoords.current.scale - currentCoords.current.scale) * lerp;

      const finalX = currentCoords.current.x + (idleBobX / (window.innerWidth || 1000)) * 100;
      const finalY = currentCoords.current.y + (idleBobY / (window.innerHeight || 800)) * 100;

      setCoords({
        x: finalX,
        y: finalY,
        rot: currentCoords.current.rot,
        scale: currentCoords.current.scale,
      });

      // Spawn aroma trail particles periodically when moving
      if (now - lastTrailTime.current > 140) {
        lastTrailTime.current = now;
        trailCounter.current++;
        setTrail((prev) => {
          const newTrail: TrailPoint = {
            id: trailCounter.current,
            x: finalX,
            y: finalY,
            opacity: 0.65,
            scale: 0.8,
          };
          return [newTrail, ...prev.slice(0, 4)];
        });
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  // Handle click on bean for a playful interaction
  const handleBeanClick = () => {
    setIsBouncing(true);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setFunQuote(randomQuote);

    setTimeout(() => setIsBouncing(false), 600);
    setTimeout(() => setFunQuote(null), 2400);
  };

  // Dimensions
  const beanSize = isMobile ? 38 : 46;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* Trailing Golden Aroma Particles */}
      {trail.map((point, index) => {
        const fade = (1 - index / 5) * 0.45;
        const trailSize = beanSize * (0.35 + index * 0.08);
        return (
          <div
            key={point.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              opacity: fade,
              transform: `translate(-50%, -50%) scale(${1 - index * 0.15})`,
            }}
          >
            <div
              className="rounded-full bg-gradient-to-tr from-[#C87932]/70 via-[#E89E50]/40 to-transparent blur-[2px]"
              style={{ width: trailSize, height: trailSize }}
            />
          </div>
        );
      })}

      {/* Main Travelling Coffee Bean */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto transition-transform duration-75 ease-out select-none"
        style={{
          left: `${coords.x}%`,
          top: `${coords.y}%`,
          transform: `translate(-50%, -50%) rotate(${coords.rot}deg) scale(${
            isBouncing ? coords.scale * 1.3 : coords.scale
          })`,
        }}
        onClick={handleBeanClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="button"
        tabIndex={0}
        aria-label="Interactive Travelling Coffee Bean - Click to interact"
      >
        {/* Subtle Ambient Golden Glow Behind Bean */}
        <div
          className="absolute -inset-2 rounded-full bg-[#C87932]/35 blur-md pointer-events-none animate-pulse"
          style={{ animationDuration: '3s' }}
        />

        {/* 3D Realistic Roasted Coffee Bean SVG */}
        <svg
          width={beanSize}
          height={beanSize}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_8px_14px_rgba(33,16,10,0.6)] hover:scale-110 active:scale-95 transition-transform"
        >
          <defs>
            {/* Outer Bean Roasted Gradient */}
            <radialGradient
              id="roastedBody"
              cx="38%"
              cy="34%"
              r="62%"
              fx="32%"
              fy="28%"
            >
              <stop offset="0%" stopColor="#8A4325" />
              <stop offset="45%" stopColor="#5A2918" />
              <stop offset="85%" stopColor="#3A170D" />
              <stop offset="100%" stopColor="#21100A" />
            </radialGradient>

            {/* Specular Highlight along the rim */}
            <linearGradient id="specularRim" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F4E7D0" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#C87932" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#21100A" stopOpacity="0" />
            </linearGradient>

            {/* Crease Deep Shadow Gradient */}
            <linearGradient id="creaseShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#150805" />
              <stop offset="50%" stopColor="#2A1208" />
              <stop offset="100%" stopColor="#150805" />
            </linearGradient>
          </defs>

          {/* Bean Main Body Silhouette */}
          <ellipse
            cx="27"
            cy="27"
            rx="21"
            ry="16"
            transform="rotate(-25 27 27)"
            fill="url(#roastedBody)"
            stroke="#C87932"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />

          {/* Glossy Curved Rim Highlight */}
          <path
            d="M13 22C15 15 24 11 34 14C39 15.5 43 19 45 24"
            stroke="url(#specularRim)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Subtle Crease Bed Depressed Shadow */}
          <path
            d="M16 35C20 28 24 28 27 24C30 20 31 19 35 17"
            stroke="url(#creaseShadow)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />

          {/* The Distinct Organic S-Curve Center Crease */}
          <path
            d="M16.5 34.5C20.5 28.5 24.5 27.5 27 24C29.5 20.5 31.5 19.5 35 17"
            stroke="#110503"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Golden Caramel Accent Line inside Crease */}
          <path
            d="M19 32C22 27 24.5 26.5 27 24C29 21.5 31 20 33 18.5"
            stroke="#C87932"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />

          {/* Little Highlight Gleam Dot */}
          <circle cx="21" cy="18" r="1.5" fill="#FFF8EA" fillOpacity="0.45" />
        </svg>

        {/* Interactive Speech Bubble / Fun Quote */}
        {funQuote && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-full bg-[#FFF8EA] text-[#21100A] font-serif font-bold text-xs tracking-wide shadow-xl border-2 border-[#C87932] whitespace-nowrap animate-in fade-in zoom-in duration-200 pointer-events-none"
            style={{ transform: `rotate(${-coords.rot}deg)` }}
          >
            <span>{funQuote}</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#C87932]" />
          </div>
        )}

        {/* Hover Tooltip Micro-Badge */}
        {showTooltip && !funQuote && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-0.5 rounded-md bg-[#21100A]/90 text-[#F4E7D0] font-mono text-[9px] tracking-wider uppercase shadow-lg border border-[#C87932]/40 whitespace-nowrap pointer-events-none"
            style={{ transform: `rotate(${-coords.rot}deg)` }}
          >
            ✦ Click Me ✦
          </div>
        )}
      </div>
    </div>
  );
};
