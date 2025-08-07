"use client";

export default function MarketingSection() {
  return (
    <section
      id="marketing-section"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Marketing Online
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            BBY ด้านออนไลน์ บริการอินฟลูเอ็นเซอร์ ทีมถ่ายทำ พร้อมตัดต่อ Live stream โฆษณาโปรโมทสินค้า และแบรนด์ของคุณ
          </p>
        </div>

        {/* Right: Phone with embedded video */}
        <div className="relative w-full max-w-[220px] h-[330px] mx-auto">
          <div className="absolute top-[30px] left-[15px] w-[190px] h-[260px] rounded-[1rem] overflow-hidden shadow-inner bg-black z-10">
            <video
              src="/IMG_2091.mov"
              autoPlay
              muted
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
