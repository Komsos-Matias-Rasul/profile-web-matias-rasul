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
                        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Jadwal</b> Layanan</h1>
                        <div className="w-8 h-1.5 bg-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const JadwalLayanan = () => {
    return (
        <div className="w-full flex justify-center py-7">
            <div className="w-[80%] max-w-[1300px] p-4">


                <div className="flex flex-col gap-0 ">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="font-heading font-bold text-2xl text-blue-secondary text-center">SEKRETARIAT</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-0 mt-10">
                        <div className="text-center ">
                            <h3 className="font-bold text-lg">Senin dan Libur Hari Nasional</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>LIBUR</li>
                            </ul>
                        </div>
                        <div className="text-center ">
                            <h3 className="font-bold text-lg">Selasa - Jumat</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>08.00 – 19.00</li>
                            </ul>
                        </div>
                        <div className="text-center ">
                            <h3 className="font-bold text-lg">Sabtu</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>08.00 – 12.00</li>
                                <li>16.00 – 19.00</li>
                            </ul>
                        </div>
                        <div className="text-center ">
                            <h3 className="font-bold text-lg">Minggu</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>07.00 – 11.00</li>
                                <li>16.00 – 19.00</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 my-4"></div>
                
                <div className="mt-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h2 className="font-heading font-bold text-2xl text-blue-secondary text-center">RUANG ADORASI & GUA MARIA</h2>
                    </div>
                    <div className="mt-10">
                        <div className="text-center ">
                            <h3 className="font-bold text-lg">Senin – Minggu</h3>
                            <ul className="list-disc list-inside list-none mb-3">
                                <li>06.00 - 21.00</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


const JadwalLayananPage = () => {
    return (
        <>
            <Header />
            <JadwalLayanan />
        </>
    )
}

export default JadwalLayananPage