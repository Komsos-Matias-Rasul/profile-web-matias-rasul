import Image from "next/image"

export const metadata = {
    title: "Pelayanan",
    description: "Jadwal pelayanan Gereja Santo Matias Rasul Kosambi Baru",
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
        <div className="w-full flex justify-center py-10 bg-gray-50">
            <div className="w-[90%] max-w-[1300px]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">



                    <div className="bg-[#e3ebf6] rounded-2xl border border-blue-100 p-5 md:p-8 flex flex-col items-center gap-4 md:gap-5 shadow-md w-full max-w-md md:max-w-lg mx-auto">

                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                            <Image
                                src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + "/jadwal/Sekretariat.webp"}
                                alt="pdkk icon"
                                width={60}
                                height={60}
                                className="w-10 h-10 md:w-[60px] md:h-[60px]"
                            />
                        </div>

                        <h2 className="font-heading text-xl md:text-2xl font-semibold text-[#0071B7] text-center">Sekretariat</h2>

                        <div className="w-full flex flex-col gap-3 text-sm md:text-base text-gray-700">

                            <div className="flex items-center justify-between border-b border-[#0071B7] pb-3 gap-2">
                                <span className="text-black font-medium text-left">Senin & Libur Hari Naisonal</span>
                                <span className="font-semibold text-[#0071B7] whitespace-nowrap">Libur</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#0071B7] pb-3 gap-2">
                                <span className="text-black font-medium text-left">Selasa - Jumat</span>
                                <span className="font-semibold text-[#0071B7] whitespace-nowrap">08.00 - 19.00</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#0071B7] pb-3 gap-2">
                                <span className="text-black font-medium text-left">Sabtu</span>
                                <div className="text-right">
                                    <div className="font-semibold text-[#0071B7] whitespace-nowrap">08.00 - 12.00</div>
                                    <div className="font-semibold text-[#0071B7] whitespace-nowrap">16.00 - 19.00</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-1 gap-2">
                                <span className="text-black font-medium text-left">Minggu</span>
                                <div className="text-right">
                                    <div className="font-semibold text-[#0071B7] whitespace-nowrap">07.00 - 11.00</div>
                                    <div className="font-semibold text-[#0071B7] whitespace-nowrap">16.00 - 19.00</div>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div>

                        <div className="bg-[#e3ebf6] rounded-2xl p-8 flex flex-col items-center gap-5 shadow-md">



                        </div>
                        <div className="bg-[#e3ebf6] rounded-2xl p-8 flex flex-col items-center gap-5 shadow-md">



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