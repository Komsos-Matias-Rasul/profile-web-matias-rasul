import Image from "next/image"

export const metadata = {
    title: "Kegiatan",
    description: "Agenda kegiatan Gereja Santo Matias Rasul Kosambi Baru",
};

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
                        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Jadwal</b> Kegiatan Rutin</h1>
                        <div className="w-8 h-1.5 bg-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const JadwalKegiatanRutin = () => {
    return (
        <div className="w-full flex justify-center py-14">
            <div className="w-[80%] max-w-[1300px]">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14  " >

                    <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:text-left sm:gap-0 p-6 bg-[#E3EBF6] rounded-2xl shadow-xl">
                        <div className="order-2 sm:order-1 flex flex-col gap-2">
                            <h2 className="font-heading font-bold text-3xl text-blue-secondary">PDKK</h2>
                            <div className="gap-0 py-0">
                                <h2 className=" text-lg">Setiap Hari <b>Senin</b></h2>
                                <h2 className="font-bold text-lg">Pukul 19.30</h2>
                            </div>
                            <h2 className=" italic">Aula Yohanes Paulus 2</h2>
                        </div>
                        <div className="order-1 sm:order-2 flex items-center justify-center sm:justify-end sm:ml-auto">
                            <Image
                                src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + "/jadwal/PDKK.webp"}
                                alt="pdkk icon"
                                className="sm:mr-10"
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:text-left sm:gap-0 p-6 bg-[#E3EBF6] rounded-2xl shadow-xl">
                        <div className="order-2 sm:order-1 flex flex-col gap-2">
                            <h2 className="font-heading font-bold text-3xl text-blue-secondary">PDOMKK</h2>
                            <div className="gap-0 py-0">
                                <h2 className=" text-lg">Setiap Hari <b>Sabtu</b></h2>
                                <h2 className="font-bold text-lg">Pukul 19.30</h2>
                            </div>
                            <h2 className=" italic">Aula Wisma Santo Yohanes Paulus II</h2>
                        </div>
                        <div className="order-1 sm:order-2 flex items-center justify-center sm:justify-end sm:ml-auto">
                            <Image
                                src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + "/jadwal/PDOMPKK.webp"}
                                alt="pdkk icon"
                                className="sm:mr-10"
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>

                    {/* gas dilanjutkan bro yos.. */}

                    <div className="flex flex-col gap-0 p-4 md:border-r md:border-t border-neutral-300">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h2 className="font-heading font-bold text-2xl text-blue-secondary text-center">BINA IMAN ANAK</h2>
                        </div>
                        <div className="text-center ">
                            <h3 className="font-semibold text-lg">Minggu, pukul 07.30 - 08.30</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>di ruang Mediatrix 1 & 3, dan Yohanes Paulus II <br /> (Minggu pertama setiap bulan, BIA libur)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-0 p-4 md:border-t md:border-l">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-heading font-bold text-2xl text-blue-secondary text-center">BINA IMAN REMAJA</h2>
                        </div>
                        <div className="text-center ">
                            <h3 className="font-semibold text-lg">Minggu, pukul 10.30 - 12.00</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>di Ruang Mediatrix 1-3</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


const JadwalKegiatanRutinPage = () => {
    return (
        <>
            <Header />
            <JadwalKegiatanRutin />
        </>
    )
}

export default JadwalKegiatanRutinPage