import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soji Jacob | Product, Financial Services and AI",
  description: "A visual journey through Soji Jacob's work across product ownership, financial services technology, asset finance and AI workflow automation.",
  metadataBase: new URL("https://soji.in"),
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: {
    title: "Soji Jacob | Product, financial services and AI delivery",
    description: "Explore the journey, the work and the outcomes behind product and technology delivery.",
    url: "https://soji.in",
    siteName: "Soji Jacob",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
