export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Babyyak Co., Ltd.</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 font-semibold text-xl">Babyyak เบบี้ยักษ์</p>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ออนไลน์ : เราให้บริการอินฟลูเอ็นเซอร์ ทีมถ่ายทำ พร้อมตัดต่อ Live stream โฆษณาโปรโมทสินค้า และแบรนด์ของคุณ
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ออฟไลน์ : สื่อโฆษณา Out of Home (OOH), Moving ADS อาทิ ป้ายโฆษณาภายนอกรถเมล์, ป้ายโฆษณาติดรถสองแถว, ป้ายโฆษณาติดรถตุ๊กตุ๊ก, รถแห่โฆษณา, โฆษณาบนจอ LCD บนรถเมล์ และบนเรือ, ป้ายกองโจร, จัดงานสัมมนา, งานอีเว้นท์ และออกแบบบูธ จัดทำบูธ
          </p>
        </div>

        {/* Right: Company Logo */}
        <div className="flex justify-center">
          <img
            src="/logo.png"
            alt="Babyyak Co., Ltd. Logo"
            className="h-32 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
