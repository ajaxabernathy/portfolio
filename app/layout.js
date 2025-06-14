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
  title: "Ajax Abernathy",
  description: "Portfolio site for Ajax Abernathy",
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
