import Image from "next/image"

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="https://storage.googleapis.com/web-samara-storage/headers/VISI-DAN-MISI_02.png"
            alt="hero"
            className="object-cover"
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 mt-20  ">
            <h1 className="font-heading text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Visi</b> dan Misi</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Visi = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="relative w-1/2 aspect-square flex-shrink-0">
        <Image
          src="/assets/VISI-DAN-MISI_05.png"
          alt="hero"
          className="object-cover brightness-75"
          priority
          fill />
      </div>
      {/* <div className="flex gap-16 flex-col justify-center items-end max-w-[650px] px-6"> */}
      <div className="m-2 bg-white px-2 lg:px-9 flex gap-1 lg:gap-16 flex-col justify-center  py-2 lg:py-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl my-4 lg:text-6xl font-bold font-heading text-blue-primary text-center">Visi</h2>
        <p className="text-xs md:text-1xl lg:text-2xl  lg:text-center text-justify ">Meningkatkan kualitas hidup umat beriman dalam keluarga dan masyarakat dengan karya nyata, inovatif, dan dalam terang Roh Kudus sehingga kehadiran Allah dapat lebih dirasakan berdasarkan semangat Gembala Baik dan murah hati.</p>
        {/* text-2xl sm:text-1xl md:text-2xl lg:text-5xl */}
      </div>
    </div>
  )
}

const Misi = () => {
  return (
    <div className="flex">
      <div className="relative w-1/2 aspect-square max-h-[1300px] flex-shrink-0">
        <Image
          src="/assets/VISI-DAN-MISI_13.png"
          alt="hero"
          className="object-cover brightness-75"
          priority
          fill />
      </div>
      <div className=" m-2 bg-white px-2 lg:px-9 flex flex-col justify-center  py-2 lg:py-1">
        <h2 className="text-2xl sm:text-4xl md:text-5xl my-4 lg:my-14 lg:text-6xl font-bold font-heading text-blue-primary text-center">Misi</h2>
        <ol className="lg:pl-6 pl-3 text-xs lg:text-lg  list-decimal list-outside flex flex-col gap-2 lg:gap-4 text-justify">
          <li>Meningkatkan serta memperdalam iman akan Yesus Kristus di dalam komunitas basis, lingkungan, keluarga, dan kaum muda sehingga dapat menjadi Saksi Kristus dimanapun berada</li>
          <li>Membangun komunitas basis yang kooperatif, solider (kepedulian terhadap sesama) dan misioner</li>
          <li>Mendorong umat untuk menjadi saksi dan pewartaan iman sebagai tugas perutusan</li>
          <li>Membangun persaudaraan sejati dalam suka dan duka dengan sesama Umat Beriman dan dengan sesama umat di sekita Gereja</li>
          <li>Meningkatkan kesadaran serta kedewasaan umat untuk berperan aktif dalam hidup menggereja dan bermasyarakat</li>
          <li>Mengembangkan Pelayanan Kasih dengan sikap dan semangat Gembala Baik serta Murah Hati kepada Umat Beriman dan Masyarakat dengan Gerakan Ayo Sekolah, Ayo Kuliah, Ayo Kerja sehingga Kehadiran Gereja St. Matias Rasul dapat lebih dirasakan Umat</li>
          <li>Memberi perhatian lebih kepada yang Lemah dan Tertindas</li>
          <li>Menggalakkan Pendampingan Kaum Muda ( Anak dan Remaja ) sebagai Generasi Penerus</li>
          <li>Mengembangkan dan Memperlancar Komunikasi serta menggalang kesatuan antar Bidang, Seksi, Kategorial serta Teritorial dengan semangat kerjasama</li>
          <li>Memperlengkap Sarana dan Prasarana yang diperlukan</li>
        </ol>
      </div>
    </div>
  )
}

const Map = () => {
  return (
    <div className="m-0 p-0">
      <div className="flex flex-col items-center justify-center gap-4 my-16">
        <h2 className="text-6xl font-bold font-heading text-blue-primary ">Peta Wilayah Paroki Kosambi Baru</h2>
        <div className="w-8 h-1.5 bg-blue-primary" />
      </div>
      <iframe src="https://www.google.com/maps/d/embed?mid=1hB2Spsg2Jozjy0NUO19lz7-Kr4ICcAg&ehbc=2E312F&scrollwheel=false" height="500"
        loading="lazy" referrerPolicy="no-referrer-when-downgrade" pointerEvents="none" style={{ width: "100%" }}></iframe>
    </div>
  )
}

const VisiMisiPage = () => {
  return (
    <>
      <Header />
      <Visi />
      <Misi />
      {/* <Map /> */}
    </>
  )
}

export default VisiMisiPage