import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Text */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-6 text-red-800">เกี่ยวกับเรา</h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          BBY Media คือเอเจนซี่ที่ให้บริการด้านการตลาดครบวงจร เรามุ่งเน้นการ
          สร้างสรรค์และผลักดันธุรกิจของคุณให้เติบโต ด้วยทีมงานมืออาชีพที่พร้อม
          ช่วยให้แบรนด์ของคุณโดดเด่นในตลาด
        </p>
        <p className="text-gray-600 leading-relaxed">
          เรามีบริการหลากหลาย ทั้งการจัดหาอินฟลูเอนเซอร์ การทำโฆษณาบนรถเมล์และ
          รถสองแถว รวมถึงบริการถ่ายทำและจัดงานสัมมนา เพื่อให้ทุกแคมเปญของคุณ
          ประสบความสำเร็จอย่างเต็มที่
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full h-72 relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/logo.jpeg" // เปลี่ยนเป็นรูปบริษัทจริง ๆ ของคุณ
          alt="รูปบริษัท BBY Media"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
