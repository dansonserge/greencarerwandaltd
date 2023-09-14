import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenCareRwanda Ltd",
  description:
    "At Greencare Rwanda Ltd, we offer a range of competitive products that provide solutions to the agricultural sector, environmental protection, and construction projects. Our products are designed to promote a greener future while meeting the highest quality standards",
  keywords:
    "waste management, fertilizer manufacturing, construction materials, sustainable solutions, environmental needs, environmental protection, GreenCare, Green Care Rwanda",
  openGraph: {
    type: "website",
    url: "https://greencarerwandaltd.com/",
    title: "GreenCareRwanda Ltd",
    description:
      "At Greencare Rwanda Ltd, we offer a range of competitive products that provide solutions to the agricultural sector, environmental protection, and construction projects. Our products are designed to promote a greener future while meeting the highest quality standards",
    siteName: "https://greencarerwandaltd.com/",
    images: [
      {
        url: "https://greencarerwandaltd.com/_next/static/media/GreenCareLogo.f40c7c72.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
