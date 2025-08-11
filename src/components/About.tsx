import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400 text-center">
        เกี่ยวกับเรา
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed text-base md:text-lg text-center">
        BBY Media คือเอเจนซี่ที่ให้บริการด้านการตลาดครบวงจร เรามุ่งเน้นการ
        สร้างสรรค์และผลักดันธุรกิจของคุณให้เติบโต ด้วยทีมงานมืออาชีพที่พร้อม
        ช่วยให้แบรนด์ของคุณโดดเด่นในตลาด เรามีบริการหลากหลาย
        ทั้งการจัดหาอินฟลูเอนเซอร์ การทำโฆษณาบนรถเมล์และ รถสองแถว
        รวมถึงบริการถ่ายทำและจัดงานสัมมนา
        เพื่อให้ทุกแคมเปญของคุณประสบความสำเร็จอย่างเต็มที่
      </p>
      <div className="text-center">
        <Link
          href="/about"
          className="inline-block bg-yellow-400 text-white font-semibold px-12 py-3 hover:bg-yellow-500 transition"
        >
          อ่านเพิ่มเติม
        </Link>
      </div>
    </section>
  );
}
