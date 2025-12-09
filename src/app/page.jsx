import AgendaParokiSection from "./sections/AgendaParoki"
import FotoTerbaruSection from "./sections/FotoTerbaru"
import HeroSection from "./sections/Hero"
import JadwalMisaSection from "./sections/JadwalMisa"
import SocialsSection from "./sections/Socials"
import UpdatesSection from "./sections/Updates"

const HomePage = async () => {
  let beritaData
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/berita`)
    const jsonData = await res.json()
    beritaData = jsonData.data
  } catch (err) {
    console.error(err)
    // change dis to error page pls >:(
    return <div>Error</div>
  }

  return (
    <main>
      <HeroSection />
      <SocialsSection />
      <UpdatesSection beritaParoki={beritaData}/>
      <JadwalMisaSection />
      <AgendaParokiSection />
      <FotoTerbaruSection />
    </main>
  )
}

export default HomePage