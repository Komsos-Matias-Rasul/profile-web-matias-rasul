import { Plus_Jakarta_Sans, Karla, Ibarra_Real_Nova } from "next/font/google"

import Providers from "./Providers";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
})

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla"
})

const ibara = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibara"
})

export const metadata = {
  title: "St. Matias Rasul - Paroki Kosambi Baru",
  description: "Situs Web Resmi Gereja Santo Matias Rasul Kosambi Baru",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${karla.variable} ${ibara.variable} ${karla.className} text-dark-primary antialiased`}
      >
        <Providers>
          <div className="flex flex-col w-full justify-between min-h-screen">
            <div>
              <Navbar />
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
