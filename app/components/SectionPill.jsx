// Section identifier badge — the small lowercase label pill at the top of
// most sections ("sobre", "Apoie", "última edição"...).
//
// Two tones only, picked after a contrast audit (see /playground) found the
// site's various white/pale-on-yellow recipes landing ~1.2-1.5:1 — nowhere
// close to WCAG AA. Both tones below pass:
// - light (default): brand-black text/border on bright surfaces (sun,
//   sun-light, the yellow textures) — ~12-14:1.
// - dark: white text/border, for the rare genuinely dark surface (bg-code).
//   Needs text-sm font-semibold baked in — at text-xs it only clears ~3.2:1,
//   which only counts as a pass under the WCAG "large text" 3:1 exemption
//   (bold, ≥14px). Don't drop the size/weight or it fails again.
const TONES = {
  light: "bg-black/5 border-brand-black/40 text-brand-black",
  dark: "bg-white/10 border-white/50 text-white text-sm font-semibold tracking-wide",
};

export default function SectionPill({ children, tone = "light", className = "" }) {
  return (
    <p
      className={`lowercase rounded-full text-xs font-space-mono px-2 py-0.5 border w-fit ${TONES[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
