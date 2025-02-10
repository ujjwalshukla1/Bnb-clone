import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 text-gray-500 text-sm py-0 px-4 border-t shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-black">Privacy</span>
          <span className="cursor-pointer hover:text-black">Terms</span>
          <span className="cursor-pointer hover:text-black">Sitemap</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaGlobe className="text-base" />
          <span>English (US)</span>
          <span>· USD</span>
        </div>

        <div className="flex gap-3 text-base">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>
      </div>
      <div className="text-center mt-2 text-xs">© {new Date().getFullYear()} Airbnb, Inc.</div>
    </footer>
  );
}
