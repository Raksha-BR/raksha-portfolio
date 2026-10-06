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
  title: "Raksha BR | Software Engineer",
  description:
    "Portfolio of Raksha BR, a Software Engineer focused on backend development, systems engineering, automation, testing, and reliable software.",
  keywords: [
    "Raksha BR",
    "Software Engineer",
    "Software Developer",
    "Backend Engineer",
    "C++",
    "Python",
    "Backend Development",
    "Systems Engineering",
    "Bengaluru",
  ],
  authors: [{ name: "Raksha BR" }],
  creator: "Raksha BR",

  openGraph: {
    title: "Raksha BR | Software Engineer",
    description:
      "Software Engineer focused on backend development, systems engineering, automation, testing, and reliable software.",
    type: "website",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
