// Final token set — named via agentation comments on the old comparison
// grids, matched by exact swatch background color. Every other yellow that
// used to exist in the codebase (amber-50..900, --amarelo, --amarelo-dark,
// the oklch body bg, a couple one-off hexes) got folded into whichever of
// these 6 is closest in OKLab space. Registered as real Tailwind tokens in
// globals.css (--color-brand-white etc.) — these are now bg-sun, text-sun-light...
const TOKENS = [
    { name: "brand-white", swatch: "bg-brand-white", value: "#fffbeb", replaces: "amber-50" },
    { name: "sun-lighter", swatch: "bg-sun-lighter", value: "#fef3c7", replaces: "amber-100" },
    { name: "sun-light", swatch: "bg-sun-light", value: "#fde68a", replaces: "amber-200, body bg, #fee685, #ffe270" },
    { name: "sun", swatch: "bg-sun", value: "#ffcc00", replaces: "--amarelo, amber-300, amber-400" },
    { name: "sun-dark", swatch: "bg-sun-dark", value: "#f59e0b", replaces: "amber-500, --amarelo-dark, amber-600, amber-700, amber-800, amber-900" },
];

// Final token set — 3 shades picked and named via agentation, everything
// else (blue-200/600/700, the other azure-radiance candidates) folded in or
// dropped in favor of these.
const BLUES = [
    { name: "code-light", swatch: "bg-code-light", value: "#dbeafe", replaces: "azure-radiance-100 (new — no prior usage)" },
    { name: "code", swatch: "bg-code", value: "#3b82f6", replaces: "blue-200, blue-500, blue-600" },
    { name: "code-dark", swatch: "bg-code-dark", value: "#1e40af", replaces: "blue-700, blue-800" },
];

// Chosen via the color-picker experiment — real black, replaces the old
// #442304 (--foreground, formerly amber-950-ish) site-wide.
const BLACKS = [
    { name: "brand-black", swatch: "bg-brand-black", value: "#110a03", replaces: "--foreground (#442304)" },
];

export default function PlaygroundPage() {
    return (
        <main className="font-space-mono min-h-screen bg-brand-white px-6 py-12">
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="space-y-1">
                    <h1 className="text-2xl font-manrope font-semibold text-stone-900">
                        Playground
                    </h1>
                    <p className="text-sm text-stone-600">
                        Espaço pra conferir peças visuais antes de ir pro ar.
                    </p>
                </div>

                <section className="space-y-3">
                    <h2 className="text-sm font-semibold text-stone-700">
                        Paleta — amarelos ({TOKENS.length} tokens, era 14 tons)
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {TOKENS.map(({ name, swatch, value, replaces }) => (
                            <div key={name} className="space-y-1.5">
                                <div className={`h-16 rounded border border-stone-200 ${swatch}`} />
                                <p className="text-[11px] font-semibold text-stone-800">
                                    {name}
                                </p>
                                <p className="text-[10px] text-stone-500 font-space-mono">
                                    {value}
                                </p>
                                <p className="text-[10px] text-stone-400 leading-snug">
                                    substitui: {replaces}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-3">
                    <h2 className="text-sm font-semibold text-stone-700">
                        Paleta — azuis ({BLUES.length} tokens, era 5 tons)
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {BLUES.map(({ name, swatch, value, replaces }) => (
                            <div key={name} className="space-y-1.5">
                                <div className={`h-16 rounded border border-stone-200 ${swatch}`} />
                                <p className="text-[11px] font-semibold text-stone-800">
                                    {name}
                                </p>
                                <p className="text-[10px] text-stone-500 font-space-mono">
                                    {value}
                                </p>
                                <p className="text-[10px] text-stone-400 leading-snug">
                                    substitui: {replaces}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-3">
                    <h2 className="text-sm font-semibold text-stone-700">
                        Paleta — preto ({BLACKS.length} token)
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {BLACKS.map(({ name, swatch, value, replaces }) => (
                            <div key={name} className="space-y-1.5">
                                <div className={`h-16 rounded border border-stone-200 ${swatch}`} />
                                <p className="text-[11px] font-semibold text-stone-800">
                                    {name}
                                </p>
                                <p className="text-[10px] text-stone-500 font-space-mono">
                                    {value}
                                </p>
                                <p className="text-[10px] text-stone-400 leading-snug">
                                    substitui: {replaces}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
