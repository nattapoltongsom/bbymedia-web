"use client";

import BriefcaseIcon from "./icons/BriefcaseIcon";

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold">บริการของเรา</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            เรามุ่งมั่นที่จะมอบสิ่งที่ดีที่สุดให้กับลูกค้า
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            icon={<BriefcaseIcon />}
            title="Marketing Online"
            description="BBY ด้านออนไลน์ บริการอินฟลูเอ็นเซอร์ ทีมถ่ายทำ พร้อมตัดต่อ Live stream โฆษณาโปรโมทสินค้า และแบรนด์ของคุณ"
            bg="blue"
          />
          {/* Feature 2 */}
          <FeatureCard
            icon={<BriefcaseIcon />}
            title="Marketing Offline"
            description="บริการสื่อโฆษณา OOH ครบวงจร เช่น ป้ายกลางแจ้ง รถเมล์ รถแห่ จอ LCD งานโรดโชว์ และกิจกรรมส่งเสริมการตลาด"
            bg="green"
          />
          {/* Feature 3 */}
          <FeatureCard
            icon={<BriefcaseIcon />}
            title="Event & Production"
            description="ออกแบบบูธ จัดงานสัมมนา อีเวนต์พิเศษ พร้อมทีมโปรดักชันมืออาชีพที่ดูแลตั้งแต่ต้นจนจบ"
            bg="red"
          />
          {/* Feature 4 */}
          <FeatureCard
            icon={<BriefcaseIcon />}
            title="Influencer Marketing"
            description="วางกลยุทธ์ เลือกอินฟลูเอนเซอร์ที่เหมาะสมกับแบรนด์ของคุณ เพื่อผลลัพธ์ที่วัดผลได้จริง"
            bg="purple"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  bg
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: 'blue' | 'green' | 'red' | 'purple';
}) {
  const bgMap = {
    blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400',
    red: 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400',
    purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className={`${bgMap[bg]} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}
