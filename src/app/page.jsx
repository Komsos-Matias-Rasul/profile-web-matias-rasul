import AgendaParokiSection from "./sections/AgendaParoki"
import FotoTerbaruSection from "./sections/FotoTerbaru"
import HeroSection from "./sections/Hero"
import JadwalMisaSection from "./sections/JadwalMisa"
import SocialsSection from "./sections/Socials"
import UpdatesSection from "./sections/Updates"

const HomePage = async () => {
  let res = await fetch(`${process.env.BACKEND_URL}/api/berita`)
  let jsonData = await res.json()
  const beritaParoki = jsonData.data

  return (
    <main>
      <HeroSection />
      <SocialsSection />
      <UpdatesSection beritaParoki={beritaParoki}/>
      <JadwalMisaSection />
      <AgendaParokiSection />
      <FotoTerbaruSection />
    </main>
  )
}

export default HomePage