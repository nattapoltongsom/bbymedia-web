import GalleryPros from "@/components/GalleryProps";

export default function Page() {
  const galleryImages = [
    "/influencer/image1.jpg",
    "/influencer/image2.jpg",
    "/influencer/image3.jpg",
    "/influencer/image4.jpg",
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/influencer/hero-banner.jpg')" }}
      >
        <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
          Influencer Marketing
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className="mb-6 text-gray-700 leading-relaxed">
          สร้างการรับรู้และเพิ่มความน่าเชื่อถือให้กับแบรนด์ของคุณ ด้วยกลยุทธ์ Influencer Marketing ที่เราคัดสรรมาอย่างพิถีพิถัน
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12">
          <li>**วางกลยุทธ์ที่แม่นยำ:** วิเคราะห์และวางแผนเพื่อให้ได้ผลลัพธ์ที่ตรงตามเป้าหมายของแบรนด์</li>
          <li>**เลือกอินฟลูเอนเซอร์ที่เหมาะสม:** คัดสรรจากฐานข้อมูลขนาดใหญ่กว่า 5,000 คน ที่เหมาะกับทุกกลุ่มเป้าหมาย</li>
          <li>**วัดผลได้จริง:** ติดตามและสรุปผลรายงานหลังแคมเปญ เพื่อให้คุณเห็นถึงประสิทธิภาพของการลงทุน</li>
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
