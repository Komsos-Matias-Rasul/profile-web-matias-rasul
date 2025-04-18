import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaYoutube } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import Link from "next/link"

const SocialsSection = () => {
  return (
    <div className="flex justify-center bg-blue-primary py-1">
      <div className="w-[95%] max-w-[1300px] text-white flex justify-center items-center gap-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-sm" />
          <p className="text-xs">(021) 5411509</p>
        </div>
        <Link href="mailto:sekretariat@parokikosambibaru.or.id">
          <FiMail className="text-lg hover:text-blue-secondary transition-colors" />
        </Link>
        <Link href="https://wa.me/6281806999631" target="_blank">
          <FaWhatsapp className="text-lg hover:text-blue-secondary transition-colors" />
        </Link>
        <Link href="http://instagram.com/paroki.kosambibaru" target="_blank">
          <FaInstagram className="text-lg hover:text-blue-secondary transition-colors" />
        </Link>
        <Link href="https://www.youtube.com/@GerejaSantoMatiasRasul" target="_blank">
          <FaYoutube className="text-xl hover:text-blue-secondary transition-colors" />
        </Link>
      </div>
    </div>
  )
}

export default SocialsSection