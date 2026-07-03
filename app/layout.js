import {
  Geist,
  Geist_Mono,
  Inter,
  Manrope,
  Unbounded,
  Space_Mono,
  Redacted,
} from "next/font/google";
import "./globals.css";
import AgentationWidget from "./agentation-widget";
import LogoOdometer from "./components/LogoOdometer";
import NavDrawer from "./components/NavDrawer";
import ExternalLinkPill from "./components/ExternalLinkPill";
import Button from "./components/Button";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const redacted = Redacted({
  variable: "--font-redacted",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://linksamarelos.com"),
  title: {
    default: "links amarelos",
    template: "%s • links amarelos",
  },
  description: "Curadoria mensal de links que valem seu tempo.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "links amarelos",
    description: "Curadoria mensal de links que valem seu tempo.",
    url: "https://linksamarelos.com",
    siteName: "links amarelos",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "links amarelos",
    description: "Curadoria mensal de links que valem seu tempo.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${unbounded.variable} ${spaceMono.variable} ${redacted.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="relative border-b border-(--sun) py-3 px-6 flex justify-between items-center">
          <Link href="/" className="text-sun">
            <LogoOdometer />
          </Link>

          <div className="flex gap-2 text-sm items-center">
            <ExternalLinkPill
              platform="substack"
              href="https://amarelodandara.substack.com"
              className="hidden md:flex bg-stone-400/10"
            />
            <ExternalLinkPill
              platform="spotify"
              href="https://open.spotify.com/show/043Gs7eyY2KOlotEWSTSxB?si=e7abf2b9730747d7"
              className="hidden md:flex bg-stone-400/10"
            />
            <Button variant="nav" href="/apoio">
              Apoie
            </Button>

            <div className="hidden md:block w-px h-5 bg-(--sun) mx-1" />

            <NavDrawer />
          </div>
        </nav>
        <div className="flex-1 bg-[url('/bg-texture.svg')] bg-repeat">
          {children}
        </div>

        <footer className="border-t border-sun bg-[url('/bg-texture.svg')] bg-repeat">
          <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="space-y-3">
              <div className="text-sun w-fit">
                <LogoOdometer />
              </div>
              <p className="font-manrope text-sm leading-relaxed">
                Curadoria de links que valem o seu tempo, hoje e sempre.
              </p>
            </div>

            {/* Pages */}
            <div className="space-y-3">
              <p className="font-space-mono text-xs text-(--sun-dark) uppercase tracking-widest">
                Páginas
              </p>
              <nav className="flex flex-col gap-2">
                {[
                  { href: "/sobre", label: "Sobre" },
                  { href: "/realizacoes", label: "Realizações" },
                  { href: "/apoio", label: "Apoio" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="font-manrope text-sm hover:text-(--sun-dark) transition-colors lowercase"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <p className="font-space-mono text-xs text-(--sun-dark) uppercase tracking-widest">
                Leia e ouça
              </p>
              <div className="flex flex-col gap-2 items-start">
                <ExternalLinkPill
                  platform="substack"
                  href="https://amarelodandara.substack.com"
                />
                <ExternalLinkPill
                  platform="spotify"
                  href="https://open.spotify.com/show/043Gs7eyY2KOlotEWSTSxB?si=e7abf2b9730747d7"
                />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-(--sun)/30 px-6 py-4 max-w-4xl mx-auto flex justify-between items-center">
            <p className="font-space-mono text-xs text-brand-black/50 lowercase">
              © {new Date().getFullYear()} amarelo dandara
            </p>
            <p className="font-space-mono text-xs text-brand-black/50 lowercase">
              feito por completo
            </p>
          </div>
        </footer>

        <AgentationWidget />
      </body>
    </html>
  );
}
