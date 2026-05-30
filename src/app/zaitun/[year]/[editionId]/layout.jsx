export const metadata = {
  metadataBase: new URL('https://parokikosambibaru.or.id/zaitun'),
  description: "Majalah digital Paroki Kosambi Baru. Zaitun menjadi wadah pewartaan gereja melalui artikel rohani dan non rohani yang terbit setiap natal dan paskah.",
  keywords: ['gereja', 'gereja katolik', 'majalah rohani', 'majalah digital', 'zaitun', 'paroki kosambi baru'],
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
};

export default function ZaitunLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}