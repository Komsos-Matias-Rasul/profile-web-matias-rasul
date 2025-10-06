import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="https://storage.googleapis.com/web-samara-storage/headers/sejarah-paroki_01.webp"
            alt="hero"
            className="object-cover"
            priority
            fill
          />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 mt-20  ">
            <h1 className="font-heading text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max ">
              <b>Sejarah</b> Gereja
            </h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSection = () => {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-4/5 max-w-[1300px] flex">
        <div className="relative lg:w-[30%] w-[20%] border-r-3 border-blue-primary flex-shrink-0 flex justify-end items-center">
          <div className="flex flex-row items-center gap-4 origin-bottom-right -rotate-90 pb-4">
            <div className="size-4 bg-blue-primary rounded-full ring-2 ring-offset-4 ring-blue-secondary" />
            <h2 className="text-2xl font-heading font-semibold text-blue-primary leading-none">
              1990-1995
            </h2>
          </div>
        </div>
        <div className="py-20 px-6 flex flex-col text-1xl lg:text-xl gap-4 text-justify">
          <p>
            Setelah melalui penelitian geografis, pihak keuskupan Agung Jakarta,
            pada saat itu Mgr.Leo Seokoto, SJ (Alm) menugaskan Romo LBS
            Wiryowardoyo, Pr sebagai Pastor Kepala Paroki Santo Thomas Rasul
            Bojong Indah, untuk memekarkan paroki ke arah Barat, mengingat
            potensi perkembangan jumlah umat yang sangat besar seiring
            perkembangan jumlah penduduk di kawawan Jakarta Barat, dengan
            munculya beberapa perumahan baru, antara lain Interkota Indah,
            Cantiga, Kresek, Kosambi Baru dan Semanan Indah.
          </p>
          <h3 className="font-heading text-sm w-max bg-blue-secondary/20 text-blue-secondary px-3 py-1.5 rounded-full">
            9 September 1990
          </h3>
          <p>
            Pada tanggal 9 September 1990 dibentuklah Panitia Pembangunan Gereja
            (PPG) dengan ketua umumnya Bapak Jopie Sarwono (Alm). Kepanitiaan
            ini mulai mencari tanah untuk lokasi gereja, diantaranya tanah
            seluas 4500 m2 di Perumahan Kosambi Baru, milik PT.Metropolitan
            Development. Rencana pembelian ini telah dilaporkan ke Keuskupan
            Agung Jakarta dan telah terjadi beberapa kali pertemuan dengan
            pemilik dan peninjauan ke lokasi oleh Romo Vikjen Soenarwijaya, Pr
            (Alm) pada saat itu, ternyata pencarian tahan untuk lokasi gereja
            masih belum berhasil.
          </p>
          <h3 className="font-heading text-sm w-max bg-blue-secondary/20 text-blue-secondary px-3 py-1.5 rounded-full">
            1995
          </h3>
          <p>
            Mengingat kesehatannya makin menurun, pada tahun 1995 Bapak Jopie
            Sarwono mengundurkan diri dari kepanitiaan, maka sejak itu
            kepanitiaan ini menjadi terhenti. Kepanitian ini telah memberikan
            ide tentang pentingnya akan kebutuhan pemekaran paroki bagi
            pertumbuhan jumlah umat yang pesat.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContentSection2 = () => {
  return (
    <div className="flex w-full justify-center bg-white-secondary">
      <div className="w-4/5 max-w-[1300px] flex">
        <div className="relative lg:w-[30%] w-[20%] border-r-3 border-blue-primary flex-shrink-0 flex justify-end items-center">
          <div className="flex flex-row items-center gap-4 origin-bottom-right -rotate-90 pb-4">
            <div className="size-4 bg-blue-primary rounded-full ring-2 ring-offset-4 ring-blue-secondary" />
            <h2 className="text-2xl font-heading font-semibold text-blue-primary leading-none">
              1996-1999
            </h2>
          </div>
        </div>
        <div className="py-20 px-6 flex flex-col text-1xl lg:text-xl gap-4 text-justify">
          <h3 className="font-heading lg:text-sm text-xs w-max bg-blue-secondary/20 text-blue-secondary px-3 py-1.5 rounded-full">
            24 Desember 1996
          </h3>
          <p>
            Pada tanggal 24 Desember 1996, Romo TAM Rochadi, Pr Pastor Kepala
            Paroki Santo Thomas Rasul pengganti Romo LBS Wiryowardoyo, Pr
            membentuk kembali PPG dengan ketua umumnya Bp Benny Tani,
            kepanitiaan ini mencari lokasi tanah di daerah Taman Semanan Indah
            dan juga perijinan bagi pembangunan gereja akan tetapi belum juga
            berhasil mendapatkannya.
          </p>
          <div>
            <div className="relative lg:w-3/5 w-4/5  aspect-[5/4] bg-neutral-300 rounded-lg overflow-hidden">
              <Image
                src="/assets/sejarah-paroki_03.webp"
                alt="hero"
                className="object-cover"
                fill
              />
            </div>
            <p className="w-3/5 text-sm text-neutral-500 italic text-left">
              Usai peletakan batu pertama Rm. Ludo Reekmans, CICM dan
              Walikotamadya Jakarta Barat H. Fadjar Panjaitan
            </p>
          </div>
          <h3 className="font-heading text-sm w-max bg-blue-secondary/20 text-blue-secondary px-3 py-1.5 rounded-full">
            1997
          </h3>
          <p>
            Bersamaan dengan terjadinya krisis ekonomi di Indonesia pada tahun
            1997 dan terjadi peningkatan suku bunga sangat tinggi. PPG
            mendapatkan keuntungan yang cukup significant dari bunga deposito
            hasil penggalangan dana sehingga kepanitiaan ini mampu menyediakan
            modal awal bagi pembangunan fisik gedung gereja sebesar Rp 1,2
            milyar yang diserahkan kepada kepanitiaan berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContentSection3 = () => {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-4/5 max-w-[1300px] flex">
        <div className="relative lg:w-[30%] w-[20%] border-r-3 border-blue-primary flex-shrink-0 flex justify-end items-center">
          <div className="flex flex-row items-center gap-4 origin-bottom-right -rotate-90 pb-4 -translate-y-20">
            <div className="size-4 bg-blue-primary rounded-full ring-2 ring-offset-4 ring-blue-secondary" />
            <h2 className="text-2xl font-heading font-semibold text-blue-primary leading-none">
              2000-sekarang
            </h2>
          </div>
        </div>
        <div className="py-20 px-6 flex flex-col text-1xl lg:text-xl w-full gap-4 text-justify">
          <h3 className="text-xl font-heading text-blue-secondary">
            Peta Wilayah Paroki Kosambi Baru
          </h3>
          <div className="w-full h-[26rem] bg-neutral-300 rounded-lg animate-pulse">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1hB2Spsg2Jozjy0NUO19lz7-Kr4ICcAg&ehbc=2E312F&scrollwheel=true"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              pointerEvents="none"
              style={{ width: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const SejarahPage = () => {
  return (
    <>
      <Header />
      <ContentSection />
      <ContentSection2 />
      <ContentSection3 />
    </>
  );
};

export default SejarahPage;
