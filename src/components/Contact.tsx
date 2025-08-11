import { FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-md mx-auto px-6 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          Bbysmartads โฆษณาสื่อออนไลน์ ออฟไลน์
        </h3>
        <p className="text-sm md:text-base leading-relaxed mb-3 text-gray-700">
          105/3 ซอยประชาชื่น 34<br />
          แขวงวงศ์สว่าง เขตบางซื่อ<br />
          กรุงเทพมหานคร
        </p>
        <p className="text-sm md:text-base mb-1 text-gray-700">
          โทร:{" "}
          <a href="tel:0618697892" className="underline hover:text-[#FF3B30] transition">
            061-869-7892
          </a>
        </p>
        <p className="text-sm md:text-base mb-6 text-gray-700">
          อีเมล:{" "}
          <a
            href="mailto:babyyak.bby@gmail.com"
            className="underline hover:text-[#FF3B30] transition break-words"
          >
            babyyak.bby@gmail.com
          </a>
        </p>
        <a
          href="https://www.facebook.com/BBYMediaTH"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 text-[#00C853] hover:text-[#007b2d] transition"
        >
          <FaFacebookF className="text-lg" />
          <span className="text-sm font-medium">Facebook</span>
        </a>
      </div>
    </section>
  );
}
