import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gio Diamante | Software Engineer",
  description:
    "Personal site of Gio Diamante – software engineer showcasing experience, projects, blog posts, and ways to get in touch.",
  keywords: [
    "Gio Diamante",
    "software engineer",
    "full stack",
    "developer portfolio",
    "projects",
    "blog",
    "resume",
  ],
  metadataBase: new URL("https://giodiamante.com"),
  openGraph: {
    title: "Gio Diamante | Software Engineer",
    description:
      "Learn more about Gio, explore recent projects, read the blog, and get in touch.",
    url: "https://giodiamante.com",
    siteName: "Gio Diamante",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gio Diamante | Software Engineer",
    description:
      "Personal site with bio, resume, portfolio projects, and blog posts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
