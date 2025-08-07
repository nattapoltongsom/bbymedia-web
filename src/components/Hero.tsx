export default function Hero() {
  return (
    <section
      className="relative text-center py-20 md:py-32 px-6 bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-banner.jpeg')" }}
    >
      {/* Overlay ดำทึบ 50% */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto text-white max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          We are Branding Agency
        </h2>
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line mb-10">
          รวมพลังอินฟลูเอนเซอร์ / ป้ายโฆษณารถเมล์ / ป้ายโฆษณาติดรถสองแถว / รถแห่ป้ายโฆษณา /{"\n"}
          ถ่ายทำ ตัดต่อ / จัดงานสัมมนา / งานแถลงข่าว / ออกแบบบูธ พร้อมโครงสร้างบูธ{"\n"}
          ครบจบที่เดียว
        </p>
       <a
        href="#features"
        className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-600 transition-colors cursor-pointer inline-block"
      >
        ดูบริการของเรา
      </a>
      </div>
    </section>
  );
}
