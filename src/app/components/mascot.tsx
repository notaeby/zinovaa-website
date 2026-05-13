/**
 * MascotFloat — Zinovaa's official mascot with parallax, 3D tilt, and ambient float.
 * Different angle + depth presets give each page a unique feel.
 */
import mascotImg from "../../imports/Zinovaa_Mascot.png";
import { Parallax, FloatLayer, Tilt3D, motion, EASE } from "./motion";

interface MascotFloatProps {
  /** CSS rotation in degrees — use different values per page */
  angle?: number;
  /** Width in pixels */
  size?: number;
  parallaxDistance?: number;
  floatAmplitude?: number;
  floatDuration?: number;
  /** translateZ depth for the FloatLayer */
  depth?: number;
  /** Mirror the mascot horizontally */
  flipX?: boolean;
  /** Tailwind / className for outer positioning wrapper */
  className?: string;
  /** Glow accent color (defaults to zn-accent lime) */
  glowColor?: string;
  /** Glare overlay on tilt */
  glare?: boolean;
  /** Maximum 3D tilt angle */
  maxTilt?: number;
  /** Entry animation delay in seconds */
  entryDelay?: number;
}

export function MascotFloat({
  angle = 0,
  size = 220,
  parallaxDistance = 60,
  floatAmplitude = 14,
  floatDuration = 5,
  depth = 20,
  flipX = false,
  className = "",
  glowColor = "var(--zn-accent)",
  glare = true,
  maxTilt = 12,
  entryDelay = 0.4,
}: MascotFloatProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: entryDelay }}
    >
      <Parallax distance={parallaxDistance}>
        <FloatLayer amplitude={floatAmplitude} duration={floatDuration} depth={depth}>
          <Tilt3D max={maxTilt} scale={1.04} glare={glare} className="relative">
            {/* Glow halo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20%",
                borderRadius: "50%",
                background: glowColor,
                opacity: 0.18,
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            {/* Mascot image */}
            <img
              src={mascotImg}
              alt="Zinovaa Mascot"
              draggable={false}
              style={{
                width: size,
                height: "auto",
                transform: `rotate(${angle}deg) scaleX(${flipX ? -1 : 1})`,
                display: "block",
                position: "relative",
                zIndex: 1,
                filter: `drop-shadow(0 16px 48px ${glowColor}55) drop-shadow(0 4px 16px rgba(0,0,0,0.35))`,
                userSelect: "none",
              }}
            />
          </Tilt3D>
        </FloatLayer>
      </Parallax>
    </motion.div>
  );
}

/**
 * MascotCorner — absolute-positioned mascot for hero sections.
 * Wraps MascotFloat with absolute placement so pages just drop this in
 * their `relative overflow-hidden` hero without extra layout work.
 */
export function MascotCorner({
  top,
  right,
  bottom,
  left,
  ...props
}: MascotFloatProps & {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none"
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left,
        zIndex: 1,
      }}
    >
      <MascotFloat {...props} />
    </div>
  );
}
