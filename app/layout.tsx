import type { Metadata } from "next";
import "@xyflow/react/dist/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOJI.OS | An interactive map of a product career",
  description: "Explore the systems, decisions and outcomes behind Soji Jacob's work across product ownership, financial services technology and AI workflow automation.",
  metadataBase: new URL("https://soji.in"),
  openGraph: {
    title: "SOJI.OS | Soji Jacob",
    description: "I make complex systems work better.",
    url: "https://soji.in",
    siteName: "SOJI.OS",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
