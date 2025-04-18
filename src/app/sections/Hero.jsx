import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-screen max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="https://storage.googleapis.com/web-samara-storage/headers/parokikosambi-hero.webp"
            alt="hero"
            className="object-cover brightness-75" 
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-full max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center  gap-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-center">SELAMAT DATANG</h1>
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center">DI WEBSITE PAROKI KOSAMBI BARU</h2>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center">GEREJA SANTO MATIAS RASUL</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection