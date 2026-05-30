import { Plus_Jakarta_Sans, Karla, Ibarra_Real_Nova } from "next/font/google"
import Script from "next/script";
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
  metadataBase: new URL('https://parokikosambibaru.or.id'),
  title: {
    template: "%s | Paroki Kosambi Baru",
    default: "Gereja St. Matias Rasul Paroki Kosambi Baru"
  },
  description: "Selamat datang di Gereja Santo Matias Rasul Paroki Kosambi Baru. Duc In Altum.",
  keywords: ['gereja', 'gereja katolik', 'gereja jakarta', 'gereja katolik jakarta', 'kosambi baru'],
  authors: [
    { name: 'Ariaa.', url: 'https://instagram.com/petrusaria25' },
    { name: 'Der.', url: 'https://instagram.com/derrylodja' },
  ],
  creator: 'Komsos Paroki Kosambi Baru',
  publisher: 'Komsos Paroki Kosambi Baru',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID', // or id_ID if primarily Indonesian
    url: '/',
    siteName: 'Gereja St. Matias Rasul Paroki Kosambi Baru',
    title: 'Gereja St. Matias Rasul Paroki Kosambi Baru',
    description: 'Selamat datang di Gereja Santo Matias Rasul Paroki Kosambi Baru. Duc In Altum.',
    images: [
      {
        url: '/parokikosambibaru-profile.jpg', // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: 'Gereja St. Matias Rasul Paroki Kosambi Baru',
      },
    ],
  },
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
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "Gereja St. Matias Rasul Paroki Kosambi Baru",
              "description": "Selamat datang di Gereja Santo Matias Rasul Paroki Kosambi Baru. Duc In Altum.",
              "url": "https://parokikosambibaru.or.id",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Kosambi Selatan Raya, Duri Kosambi, Cengkareng",
                "addressLocality": "Jakarta Barat",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "telephone": "+6281806999631",
              "sameAs": ["https://instagram.com/paroki.kosambibaru", "https://www.youtube.com/@GerejaSantoMatiasRasul", "https://www.tiktok.com/@komsos.samara"],
              "hasMap": "https://maps.app.goo.gl/ULU8sGZrFZEzvEuz8"
            })
          }}
        />
      </body>
    </html>
  );
}
