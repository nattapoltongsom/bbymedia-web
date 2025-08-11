import Link from "next/link";
import { FaUsers, FaBusAlt, FaBullhorn, FaStore } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      name: "Marketing Online",
      href: "/services/marketing-online",
      icon: <FaBullhorn className="text-red-600 text-5xl mb-5" />,
      description:
        "BBY ด้านออนไลน์ บริการอินฟลูเอนเซอร์ ทีมถ่ายทำ พร้อมตัดต่อ Live stream โฆษณาโปรโมทสินค้า และแบรนด์ของคุณ",
    },
    {
      name: "Marketing Offline",
      href: "/services/marketing-offline",
      icon: <FaBusAlt className="text-yellow-400 text-5xl mb-5" />,
      description:
        "บริการสื่อโฆษณา OOH ครบวงจร เช่น ป้ายกลางแจ้ง รถเมล์ รถแห่ จอ LCD งานโรดโชว์ และกิจกรรมส่งเสริมการตลาด",
    },
    {
      name: "Event & Production",
      href: "/services/event-production",
      icon: <FaStore className="text-green-500 text-5xl mb-5" />,
      description:
        "ออกแบบบูธ จัดงานสัมมนา อีเวนต์พิเศษ พร้อมทีมโปรดักชันมืออาชีพที่ดูแลตั้งแต่ต้นจนจบ",
    },
    {
      name: "Influencer Marketing",
      href: "/services/influencer-marketing",
      icon: <FaUsers className="text-red-500 text-5xl mb-5" />,
      description:
        "วางกลยุทธ์ เลือกอินฟลูเอนเซอร์ที่เหมาะสมกับแบรนด์ของคุณ เพื่อผลลัพธ์ที่วัดผลได้จริง",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-[#00C853]">
          บริการของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map(({ name, href, icon, description }) => (
            <div
              key={name}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              style={{ minHeight: "320px" }}
            >
              {icon}
              <h3 className="font-semibold text-xl mb-3">{name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {description}
              </p>
              <Link
                href={href}
                className="text-[#00C853] hover:text-[#007b2d] text-sm font-medium transition"
              >
                ดูเพิ่มเติม
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
