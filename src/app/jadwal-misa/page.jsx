import Image from "next/image"

export const metadata = {
  title: "Jadwal Misa",
  description: "Jadwal misa Gereja Santo Matias Rasul Kosambi Baru",
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
            <h1 className="font-heading text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Jadwal</b> Misa</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const JadwalMisa = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-gray-50">
      <div className="w-[90%] max-w-[1300px]">
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
 










          <div className="bg-[#e3ebf6]  rounded-2xl border border-blue-100 p-8 flex flex-col items-center gap-5 shadow-md">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.467285" y="0.529846" width="50.7935" height="50.7935" rx="7" fill="#0071B7" />
                <rect x="14.5552" y="12.3283" width="17.7824" height="27.1965" rx="3.07721" fill="white" />
                <rect x="15.0552" y="12.8283" width="21.6175" height="26.1965" rx="2.57721" stroke="white" />
                <path d="M23.5264 19.7775L23.5264 29.4567" stroke="#0071B7" strokeWidth="2" strokeLinecap="round" />
                <path d="M26.3719 22.3581H20.6805" stroke="#0071B7" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-[#0071B7] text-center">Misa Harian</h2>
            <div className="w-full flex flex-col gap-3 text-base text-gray-700">
              <div className="flex items-baseline justify-between border-b border-[#0071B7] pb-3">
                <span className="text-black font-medium">Selasa, Kamis, Sabtu</span>
                <span className="font-semibold text-[#0071B7] ml-4 whitespace-nowrap">06.00 (pagi)</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-black font-medium">Senin, Rabu, Jumat</span>
                <span className="font-semibold text-[#0071B7] ml-4 whitespace-nowrap">19.00</span>
              </div>
            </div>
          </div>
 




          <div className="bg-[#e3ebf6] rounded-2xl p-8 flex flex-col items-center gap-5 shadow-md">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.529846" width="50.7935" height="50.7935" rx="7" fill="#0071B7" />
                <path d="M18.6392 24.2088C18.6392 23.6565 19.0869 23.2088 19.6392 23.2088H31.07C31.6223 23.2088 32.07 23.6565 32.07 24.2088V29.2322C32.07 31.9936 29.8314 34.2322 27.07 34.2322H23.6392C20.8777 34.2322 18.6392 31.9936 18.6392 29.2322V24.2088Z" fill="white" />
                <path d="M32.1544 42.838L18.7236 42.838V42.838C18.7236 41.2713 19.9936 40.0012 21.5603 40.0012L29.3177 40.0012C30.8844 40.0012 32.1544 41.2713 32.1544 42.838V42.838Z" fill="white" />
                <path d="M25.4391 33.2952V40.0012" stroke="white" strokeWidth="2" />
                <circle cx="25.3968" cy="14.9825" r="5.96736" fill="white" />
                <path d="M25.3967 13.0515V16.9135" stroke="#0071B7" strokeLinecap="round" />
                <path d="M26.6232 14.2691H24.1704" stroke="#0071B7" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-[#0071B7] text-center">Misa Mingguan</h2>
            <div className="w-full flex flex-col gap-3 text-base">
              <div className="flex items-baseline justify-between border-b border-[#0071B7] pb-3">
                <span className="text-black font-medium">Sabtu</span>
                <span className="font-semibold text-[#0071B7] ml-4">17.00</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-black font-medium">Minggu</span>
                <span className="font-semibold text-[#0071B7] ml-4">06.30, 09.00, 17.00</span>
              </div>
            </div>
          </div>
 
          {/* Misa Jumat Pertama */}
          <div className="bg-[#e3ebf6] rounded-2xl border border-blue-100 p-8 flex flex-col items-center gap-5 shadow-md">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.892578" y="0.529846" width="50.7935" height="50.7935" rx="7" fill="#0071B7" />
                <circle cx="26.0035" cy="21.3826" r="4.49481" stroke="white" strokeWidth="2" />
                <path d="M30.4983 21.3826H37.4983" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M14.5087 21.3826H21.5087" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M29.1818 24.5609L34.1315 29.5107" stroke="white" strokeLinecap="round" />
                <path d="M17.8755 13.2546L22.8252 18.2043" stroke="white" strokeLinecap="round" />
                <path d="M29.1819 18.2044L34.1316 13.2546" stroke="white" strokeLinecap="round" />
                <path d="M17.8755 29.5107L22.8252 24.5609" stroke="white" strokeLinecap="round" />
                <path d="M29.896 23.6301L34.2261 26.1301" stroke="white" strokeLinecap="round" />
                <path d="M17.7808 16.6352L22.1109 19.1352" stroke="white" strokeLinecap="round" />
                <path d="M28.2507 25.2753L30.7507 29.6054" stroke="white" strokeLinecap="round" />
                <path d="M21.2561 13.1599L23.7561 17.49" stroke="white" strokeLinecap="round" />
                <path d="M23.756 25.2752L21.256 29.6053" stroke="white" strokeLinecap="round" />
                <path d="M30.7509 13.16L28.2509 17.4901" stroke="white" strokeLinecap="round" />
                <path d="M22.1108 23.6299L17.7807 26.1299" stroke="white" strokeLinecap="round" />
                <path d="M34.2261 16.6353L29.8959 19.1353" stroke="white" strokeLinecap="round" />
                <path d="M26.0034 25.8774L26.0034 38.3235" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M26.0034 9.88782L26.0034 16.8878" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <rect x="18.4059" y="37.3043" width="15.1953" height="2.97894" rx="1.48947" fill="white" />
                <rect x="28.2607" y="31.5417" width="8.19702" height="4.51434" rx="2.25717" transform="rotate(90 28.2607 31.5417)" fill="white" />
                <rect x="15.5703" y="38.7937" width="20.8665" height="2.97894" rx="1.48947" fill="white" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-[#0071B7] text-center">Misa Jumat Pertama &amp; Adorasi</h2>
            <div className="w-full flex flex-col gap-3 text-base text-gray-700">
              <div className="flex items-baseline justify-between">
                <span className="text-black font-medium">Jumat pertama tiap bulan</span>
                <span className="font-semibold text-[#0071B7] ml-4 whitespace-nowrap">19.00</span>
              </div>
            </div>
          </div>
 
        </div>
 
        {/* Info & Map */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden">
          <div className="bg-blue-primary h-1.5 w-full" />
          <div className="flex flex-col lg:flex-row p-6 md:p-8 gap-6 md:gap-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.300278499702!2d106.71375096532124!3d-6.173913110648456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f82f762d21e1%3A0x6fa55f3e9b6796e9!2sGereja%20Katolik%20Paroki%20Santo%20Matias%20Rasul%2C%20Kosambi%20Baru!5e0!3m2!1sid!2sid!4v1728317186635!5m2!1sid!2sid"
              className="h-64 w-full md:h-80 lg:w-[420px] lg:flex-shrink-0 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col gap-4 justify-center">
              <h3 className="font-heading text-xl md:text-2xl text-blue-900 font-semibold">Ketentuan Mengikuti Perayaan Ekaristi</h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {[
                  "Umat tidak perlu melakukan pendaftaran untuk mengikuti Misa Harian, Misa Jumat Pertama, dan Misa Mingguan.",
                  "Menjaga protokol kesehatan yang berlaku.",
                  "Penggunaan masker tidak diwajibkan kecuali bagi umat yang sedang dalam kondisi sakit demi keselamatan bersama.",
                  "Mengenakan pakaian rapi dan sopan.",
                  "Datang tepat waktu.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                    <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#0071B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  )
}


const JadwalMisaPage = () => {
  return (
    <>
      <Header />
      <JadwalMisa />
    </>
  )
}

export default JadwalMisaPage