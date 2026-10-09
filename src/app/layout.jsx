import { Bebas_Neue, Paytone_One, Lilita_One, DM_Sans } from "next/font/google";
import "./globals.css";

const paytoneOne = Paytone_One({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  variable: "--font-alt",
  weight: "400",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-tall",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rhons' Burger",
  description: "Big burgers. Big flavor.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${paytoneOne.variable} ${dmsans.variable} ${lilitaOne.variable} ${bebas.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
