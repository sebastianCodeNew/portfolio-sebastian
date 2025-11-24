import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sebastian Kurniawan Windu Wiwaha | AI Engineer & Data Scientist",
  description: "AI Engineer and Data Scientist specializing in Computer Vision, Deep Learning, and Edge AI. Exploring the digital frontier through intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
