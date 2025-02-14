import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 text-gray-500 text-sm py-3 px-4 border-t shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <span className="cursor-pointer hover:text-black">Privacy</span>
          <span className="cursor-pointer hover:text-black">Terms</span>
          <span className="cursor-pointer hover:text-black">Sitemap</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer justify-center">
          <FaGlobe className="text-base" />
          <span>English (US) · INR</span>
        </div>

        <div className="flex gap-4 justify-center">
          <FaFacebookF className="cursor-pointer hover:text-black text-lg" />
          <FaTwitter className="cursor-pointer hover:text-black text-lg" />
          <FaInstagram className="cursor-pointer hover:text-black text-lg" />
        </div>
      </div>

      <div className="text-center mt-2 text-xs">
        © {new Date().getFullYear()} Airbnb, Inc.
      </div>
    </footer>
  );
}
