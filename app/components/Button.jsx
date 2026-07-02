import Link from "next/link";
import PixelTrail from "./PixelTrail";

// Hierarchy decided from the /playground inventory review:
// - primary / primary-inverted: main CTAs, can opt into the brand pixel-trail
// - secondary: the brand-white-outline style — the white-outline variant was
//   dropped, every real usage sits on a sun-family surface where brand-white
//   reads far better
// - nav: the standalone brand-solid pill, only ever used in the nav today
// - ghost: low-emphasis inline link — underlined text, not a pill (a pill
//   here reads too much like the badges used atop sections)
//
// Checked against every surface in the contrast playground (/playground).
// NOT OK — don't place these combinations, pick a different surface instead
// of forcing a color fix:
//   primary            on code        (blue button vanishes on blue)
//   primary-inverted    on white           (white button vanishes on white)
//   secondary           on sun-light       (brand-white text on a sun-ish bg)
//   secondary           on the page's default pale-yellow background (same reason)
//   secondary           on white           (sun-lighter text too pale on white)
//   nav                 on --sun           (brand-yellow button vanishes on brand yellow)
const VARIANTS = {
  primary: {
    // hover uses brightness, not a 3rd blue — code/code-dark is the whole
    // ramp now, so a bg-code hover would be indistinguishable from default.
    className:
      "px-6 py-3 bg-code text-white rounded-full hover:brightness-90 active:bg-code-dark",
    trailColor: "255,255,255",
  },
  "primary-inverted": {
    // Its real usage (page.js) sits on code — a default/blue/white ring
    // vanishes there, so this variant gets its own sun focus ring.
    className:
      "px-6 py-3 bg-white text-code rounded-full hover:bg-code hover:text-white active:bg-code-dark focus-visible:ring-(--sun)",
    trailColor: "59,130,246", // code — default white trail would vanish on this bg
  },
  secondary: {
    // Border and text share one color so they read as one cohesive outline
    // instead of two mismatched yellows.
    className:
      "px-6 py-3 border-2 border-brand-white text-brand-white rounded-full hover:bg-white/10 active:bg-white/20",
  },
  nav: {
    className:
      "px-4 py-2 bg-(--sun) text-brand-white font-bold rounded-full tracking-wide hover:brightness-95 active:brightness-90",
  },
  ghost: {
    className:
      "text-brand-black/70 underline underline-offset-2 decoration-brand-black/30 hover:decoration-brand-black active:text-brand-black",
  },
};

// Playground-only: forces a state's look without needing real interaction,
// so every state can be reviewed on a static page. `!`-prefixed to win over
// the variant's own hover:/active: utilities regardless of class order.
const STATE_PREVIEW = {
  primary: {
    hover: "!brightness-90",
    active: "!bg-code-dark",
    focus: "!ring-2 !ring-code !ring-offset-1",
  },
  "primary-inverted": {
    hover: "!bg-code !text-white",
    active: "!bg-code-dark !text-white",
    focus: "!ring-2 !ring-(--sun) !ring-offset-1",
  },
  secondary: {
    hover: "!bg-white/10",
    active: "!bg-white/20",
    focus: "!ring-2 !ring-brand-white !ring-offset-1",
  },
  nav: {
    hover: "!brightness-95",
    active: "!brightness-90",
    focus: "!ring-2 !ring-brand-white !ring-offset-1",
  },
  ghost: {
    hover: "!decoration-brand-black",
    active: "!text-brand-black",
    focus: "!ring-2 !ring-brand-black/30 !ring-offset-1",
  },
};

export default function Button({
  variant = "primary",
  href,
  trail = false,
  disabled = false,
  previewState, // "hover" | "active" | "focus" — playground only
  className = "",
  children,
}) {
  const { className: variantClassName, trailColor } = VARIANTS[variant];
  const isPill = variant !== "ghost";
  const previewClassName = previewState
    ? STATE_PREVIEW[variant]?.[previewState]
    : "";

  const sharedClassName = `relative whitespace-nowrap font-space-mono lowercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${isPill ? "inline-flex items-center overflow-hidden" : "inline"} ${variantClassName} ${disabled ? "opacity-40 pointer-events-none cursor-not-allowed" : ""} ${previewClassName} ${className}`;

  if (disabled) {
    return (
      <span className={sharedClassName} aria-disabled="true" tabIndex={-1}>
        {trail && <PixelTrail color={trailColor} paused />}
        <span className="relative">{children}</span>
      </span>
    );
  }

  return (
    <Link href={href} className={sharedClassName}>
      {trail && <PixelTrail color={trailColor} />}
      <span className="relative">{children}</span>
    </Link>
  );
}
