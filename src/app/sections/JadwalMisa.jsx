const JadwalMisaSection = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-[80%] max-w-[1300px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-6 mb-14 " >

          <div className="flex flex-col gap-3 lg:gap-8 px-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.467285" y="0.529846" width="50.7935" height="50.7935" rx="7" fill="#0071B7" />
                <rect x="14.5552" y="12.3283" width="17.7824" height="27.1965" rx="3.07721" fill="white" />
                <rect x="15.0552" y="12.8283" width="21.6175" height="26.1965" rx="2.57721" stroke="white" />
                <path d="M23.5264 19.7775L23.5264 29.4567" stroke="#0071B7" strokeWidth="2" strokeLinecap="round" />
                <path d="M26.3719 22.3581H20.6805" stroke="#0071B7" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="font-heading text-2xl text-blue-secondary text-center">Misa Harian</h2>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg ">Hari Selasa, Kamis, dan Sabtu</h3>
              <ul className="list-inside list-none mb-3">
                <li>Pukul 06.00 (pagi)</li>
              </ul>
              <h3 className="font-semibold text-lg">Hari Senin, Rabu, dan Jumat</h3>
              <ul className="list-inside list-none">
                <li>Pukul 19.00</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-8 px-4 md:border-l md:border-r border-neutral-300">
            <div className="flex flex-col items-center justify-center gap-2">
              <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.529846" width="50.7935" height="50.7935" rx="7" fill="#0071B7" />
                <path d="M18.6392 24.2088C18.6392 23.6565 19.0869 23.2088 19.6392 23.2088H31.07C31.6223 23.2088 32.07 23.6565 32.07 24.2088V29.2322C32.07 31.9936 29.8314 34.2322 27.07 34.2322H23.6392C20.8777 34.2322 18.6392 31.9936 18.6392 29.2322V24.2088Z" fill="white" />
                <path d="M32.1544 42.838L18.7236 42.838V42.838C18.7236 41.2713 19.9936 40.0012 21.5603 40.0012L29.3177 40.0012C30.8844 40.0012 32.1544 41.2713 32.1544 42.838V42.838Z" fill="white" />
                <path d="M25.4391 33.2952V40.0012" stroke="white" strokeWidth="2" />
                <circle cx="25.3968" cy="14.9825" r="5.96736" fill="white" />
                <path d="M25.3967 13.0515V16.9135" stroke="#0071B7" strokeLinecap="round" />
                <path d="M26.6232 14.2691H24.1704" stroke="#0071B7" strokeLinecap="round" />
              </svg>
              <h2 className="font-heading text-2xl text-blue-secondary text-center">Misa Mingguan</h2>
            </div>
            <div className="text-center ">
              <h3 className="font-semibold text-lg">Hari Sabtu</h3>
              <ul className="list-inside list-none mb-3">
                <li>Pukul 17.00</li>
              </ul>
              <h3 className="font-semibold text-lg">Hari Minggu</h3>
              <ul className="list-inside list-none">
                <li>Pukul 06.00</li>
                <li>Pukul 08.30</li>
                <li>Pukul 17.00</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:gap-8 px-4">
            <div className="flex flex-col items-center justify-center gap-2">
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
              <h2 className="font-heading text-2xl text-blue-secondary text-center ">Misa Jumat Pertama & Adorasi</h2>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Setiap Hari Jumat di minggu pertama</h3>
              <ul className="list-inside list-none">
                <li>Pukul 19.00</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="bg-white p-8 pt-10 rounded-lg drop-shadow-md shadow-lg overflow-hidden">
          <div className="bg-blue-primary h-2 w-full fixed top-0 left-0" />
          <div className="flex flex-col lg:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1179.300278499702!2d106.71375096532124!3d-6.173913110648456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f82f762d21e1%3A0x6fa55f3e9b6796e9!2sGereja%20Katolik%20Paroki%20Santo%20Matias%20Rasul%2C%20Kosambi%20Baru!5e0!3m2!1sid!2sid!4v1728317186635!5m2!1sid!2sid"
              className="h-64 w-full md:h-96 md:aspect-[5/4] rounded-xl drop-shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="px-0 lg:px-6 flex flex-col gap-4 mt-4 md:mt-0 md:pl-6">
              <h3 className="font-heading text-xl text-blue-secondary mt-3 lg:mt-0 ">Ketentuan Mengikuti Perayaan Ekaristi</h3>
              <ul className="list-disc ml-4">
                <li>Umat tidak perlu melakukan pendaftaran untuk mengikuti Misa Harian, Misa Jumat Pertama, dan Misa Mingguan.</li>
                <li>Menjaga protokol kesehatan yang berlaku.</li>
                <li>Penggunaan masker tidak diwajibkan kecuali bagi umat yang sedang dalam kondisi sakit demi keselamatan bersama.</li>
                <li>Mengenakan pakaian rapi dan sopan.</li>
                <li>Datang tepat waktu.</li>
              </ul>
              <p className="bg-rose-500 w-fit px-4 py-2 rounded-lg text-white animate-pulse mb-4">Misa daring sudah ditiadakan</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default JadwalMisaSection