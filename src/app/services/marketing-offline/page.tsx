import GalleryPros from "@/components/GalleryProps";

export default function Page() {
  const galleryImages = [
    "/marketing-offline/image1.jpg",
    "/marketing-offline/image2.jpg",
    "/marketing-offline/image3.jpg",
    "/marketing-offline/image4.jpg",
    "/marketing-offline/image5.jpg",
    "/marketing-offline/image6.jpg",
    "/marketing-offline/image7.jpg",
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/marketing-offline/hero-banner.jpg')" }}
      >
        <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
          Marketing Offline
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className="mb-6 text-gray-700 leading-relaxed">
          สร้างการจดจำที่แข็งแกร่งให้แบรนด์ของคุณด้วยสื่อโฆษณานอกบ้าน (OOH) ที่เข้าถึงผู้คนในวงกว้าง เรามีบริการที่หลากหลาย ตั้งแต่ป้ายโฆษณาขนาดใหญ่ไปจนถึงกิจกรรมส่งเสริมการตลาดที่น่าสนใจ
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12">
          <li>**สื่อโฆษณา OOH ครบวงจร:** ทั้งป้ายกลางแจ้ง, โฆษณาบนรถเมล์, รถแห่ และจอ LCD</li>
          <li>**กิจกรรมส่งเสริมการตลาด:** จัดทำ Roadshow และกิจกรรมพิเศษเพื่อสร้างการมีส่วนร่วมกับลูกค้า</li>
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
