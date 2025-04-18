import AgendaParokiSection from "./sections/AgendaParoki"
import FotoTerbaruSection from "./sections/FotoTerbaru"
import HeroSection from "./sections/Hero"
import JadwalMisaSection from "./sections/JadwalMisa"
import SocialsSection from "./sections/Socials"
import UpdatesSection from "./sections/Updates"

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SocialsSection />
      <UpdatesSection />
      <JadwalMisaSection />
      <AgendaParokiSection />
      <FotoTerbaruSection />
    </main>
  )
}

export default HomePage