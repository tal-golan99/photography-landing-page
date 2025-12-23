import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tal Golan | Fine Art Photography",
  description: "Capturing timeless moments through the lens. Fine art wedding and portrait photography by Tal Golan.",
  keywords: ["photography", "wedding photography", "fine art", "portrait", "Tal Golan"],
  authors: [{ name: "Tal Golan" }],
  openGraph: {
    title: "Tal Golan | Fine Art Photography",
    description: "Capturing timeless moments through the lens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

