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
  title: "Rhon's Burger • Bite into Better",
  description:
    "Satisfy your cravings with Rhon's Burger. Explore a menu of burgers, fries, hotdogs, and more, then place your order and enjoy your favorites delivered straight to your door.",

  openGraph: {
    title: "Rhon's Burger • Bite into Better",
    description:
      "Satisfy your cravings with Rhon's Burger. Explore a menu of burgers, fries, hotdogs, and more, then place your order and enjoy your favorites delivered straight to your door.",
    url: "https://https://rhons-burger.vercel.app/",
    siteName: "Rhon's Burger",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rhon's Burger • Bite into Better",
    description:
      "Satisfy your cravings with Rhon's Burger. Explore a menu of burgers, fries, hotdogs, and more, then place your order and enjoy your favorites delivered straight to your door.",
    images: "/banner.png",
  },

  metadataBase: new URL("https://https://rhons-burger.vercel.app/"),
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
