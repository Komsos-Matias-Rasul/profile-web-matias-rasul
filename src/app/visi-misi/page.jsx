import Image from "next/image"

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image // anjay HD 🤙🏻
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
    <div className="w-full bg-white py-5 px-10 flex justify-center">
      <div className="flex w-full rounded-2xl overflow-hidden shadow-xl bg-[#056CB6] min-h-[300px]">
        <div className="p-5 flex-shrink-0">
          <div className="relative w-[700px] h-[400px] rounded-xl overflow-hidden">
            {/* kegedean gk gambarnya? wkwkwk */}
            <Image
              src="https://storage.googleapis.com/parokikosambibaru-bucket/visi-misi/Visi2.webp"
              alt="Foto Visi"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-5 px-8 py-10">
          <h2 className="text-white text-3xl font-bold font-heading underline underline-offset-4 decoration-2">
            Visi
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
            Meningkatkan kualitas hidup umat beriman dalam keluarga dan masyarakat
            dengan karya nyata, inovatif, dan dalam terang Roh Kudus sehingga
            kehadiran Allah dapat lebih dirasakan berdasarkan semangat Gembala Baik
            dan murah hati.
          </p>
        </div>
      </div>
    </div>
  )
}

const Misi = () => {
  // svg nya ada di figma yakk
  const misiData = [
    {
      id: 1,
      text: "Meningkatkan serta memperdalam iman akan Yesus Kristus di dalam komunitas basis, lingkungan, keluarga, dan kaum muda sehingga dapat menjadi Saksi Kristus dimanapun berada",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 2a1 1 0 0 0-1 1v5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4V3a1 1 0 0 0-1-1h-2z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 2,
      text: "Membangun komunitas basis yang kooperatif, solider (kepedulian terhadap sesama) dan misioner",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 3,
      text: "Mendorong umat untuk menjadi saksi dan pewartaan iman sebagai tugas perutusan",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 4,
      text: "Membangun persaudaraan sejati dalam suka dan duka dengan sesama Umat Beriman dan dengan sesama umat di sekitar Gereja",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 5,
      text: "Meningkatkan kesadaran serta kedewasaan umat untuk berperan aktif dalam hidup menggereja dan bermasyarakat",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 6,
      text: "Mengembangkan Pelayanan Kasih dengan sikap dan semangat Gembala Baik serta Murah Hati kepada Umat Beriman dan Masyarakat dengan Gerakan Ayo Sekolah, Ayo Kuliah, Ayo Kerja sehingga Kehadiran Gereja St. Matias Rasul dapat lebih dirasakan Umat",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 7,
      text: "Memberi perhatian lebih kepada yang Lemah dan Tertindas",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 8,
      text: "Menggalakkan Pendampingan Kaum Muda ( Anak dan Remaja ) sebagai Generasi Penerus",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 9,
      text: "Mengembangkan dan Memperlancar Komunikasi serta menggalang kesatuan antar Bidang, Seksi, Kategorial serta Teritorial dengan semangat kerjasama",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </svg>
      ),
    },
    {
      id: 10,
      text: "Memperlengkap Sarana dan Prasarana yang diperlukan",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#056CB6" />
          <svg x="16" y="16" width="32" height="32" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83l5 5V18H7v-8.17l5-5z" />
          </svg>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white p-10">
      <div className="relative w-full min-h-screen lg:h-auto overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <Image
            src="https://storage.googleapis.com/parokikosambibaru-bucket/visi-misi/Misi2.webp"
            alt="Misi Background"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-blue-950/70" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center py-12 px-6 lg:px-12">
          <div className="flex flex-col items-center gap-2 mb-12">
            <h1 className="text-white text-5xl font-heading font-bold">Misi</h1>
            <div className="w-16 h-1 bg-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full">
            {misiData.map((misi) => (
              <div
                key={misi.id}
                className="relative bg-slate-900/70 backdrop-blur-sm p-8 rounded-xl flex flex-col items-center text-center border border-white/10 min-h-[280px] justify-start overflow-hidden group"
              >
                <span className="absolute -bottom-0 left-5 text-[260px] md:text-[200] lg:text-[150] font-bold text-white/5 select-none leading-none">
                  {misi.id}
                </span>
                
                <div className="mb-6 z-10">{misi.svg}</div>

                <p className="text-white text-sm md:text-base leading-relaxed z-10">
                  {misi.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    </>
  )
}

export default VisiMisiPage