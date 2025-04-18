import Image from "next/image"

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="https://storage.googleapis.com/web-samara-storage/headers/JADWAL-PETUGAS-LITURGI_02.png"
            alt="hero"
            className="object-cover"
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 mt-20  ">
            <h1 className="font-heading text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Petugas</b> Liturgi</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const PetugasLiturgiPage = () => {
    return (
      <>
        <Header />
      </>
    )
  }
  
  export default PetugasLiturgiPage