import GalleryPros from "@/components/GalleryProps";

export default function Page() {
  const galleryImages = [
    "/event-production/image1.jpg",
    "/event-production/image2.jpg",
    "/event-production/image3.jpg",
    "/event-production/image4.jpg",
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/event-production/hero-banner.jpg')" }}
      >
        <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
          Event & Production
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className="mb-6 text-gray-700 leading-relaxed">
          ให้ทุกอีเวนต์ของคุณเป็นที่น่าจดจำและประสบความสำเร็จ เราพร้อมเป็นพาร์ทเนอร์ดูแลคุณตั้งแต่เริ่มต้น ตั้งแต่การออกแบบบูธที่สะท้อนตัวตนของแบรนด์ ไปจนถึงการจัดงานสัมมนาและอีเวนต์สุดพิเศษ
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12">
          <li>**ออกแบบและจัดงานอีเวนต์:** ทั้งงานสัมมนา, เปิดตัวสินค้า หรืออีเวนต์พิเศษต่างๆ</li>
          <li>**ทีมโปรดักชันมืออาชีพ:** ดูแลทุกรายละเอียด ตั้งแต่การออกแบบ การติดตั้ง ไปจนถึงการรันงานจริง</li>
        </ul>

        {/* Video Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#00C853]">
            ตัวอย่างผลงานวิดีโอ
          </h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="ผลงานอินฟลูเอนเซอร์"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#00C853]">
            ผลงานที่ผ่านมา
          </h2>
          <GalleryPros 
            images={galleryImages} 
          />
        </div>
      </div>
    </div>
  );
}
