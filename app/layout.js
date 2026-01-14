import localFont from "next/font/local";
import { Cousine } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const haas = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplayMedium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayLight.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

const serif = localFont({
  src: [
    {
      path: "../public/fonts/georgia.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-serif",
    },
  ],
});

const mono = Cousine({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL('https://ajaxabernathy.com'),
  title: "Ajax Abernathy",
  description:
    "Full stack software engineer building things for screens—balancing functionality and aesthetics with a bias toward simplicity. I partner with designers to create thoughtful, brand-aligned websites that perform.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ajax Abernathy",
    description:
      "Full stack software engineer building things for screens—balancing functionality and aesthetics with a bias toward simplicity. I partner with designers to create thoughtful, brand-aligned websites that perform.",
    url: "https://ajaxabernathy.com",
    siteName: "Ajax Abernathy",
    images: [
      {
        url: "https://ajaxabernathy.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajax Abernathy",
    description:
      "Full stack software engineer building things for screens—balancing functionality and aesthetics with a bias toward simplicity. I partner with designers to create thoughtful, brand-aligned websites that perform.",
    images: ["https://ajaxabernathy.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${haas.className} ${serif.variable} ${mono.variable}  antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
