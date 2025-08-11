import GalleryPros from "@/components/GalleryProps";

export default function Page() {
  const galleryImages = [
    "/marketing-online/image1.jpg",
    "/marketing-online/image2.jpg",
    "/marketing-online/image3.jpg",
    "/marketing-online/image4.jpg",
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/marketing-online/hero-banner.jpg')" }}
      >
        <h1 className="text-white text-4xl font-bold text-center drop-shadow-lg">
          Marketing Online
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <p className="mb-6 text-gray-700 leading-relaxed">
          ยกระดับการตลาดออนไลน์ของคุณให้เหนือกว่าใคร ด้วยบริการที่ครบวงจรจากเรา ไม่ว่าจะเป็นการสร้างสรรค์คอนเทนต์, การโปรโมตผ่านอินฟลูเอนเซอร์, ไปจนถึงการทำ Live stream ที่เข้าถึงกลุ่มเป้าหมายอย่างมีประสิทธิภาพ
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-12">
          <li>**Influencer Marketing:** คัดสรรอินฟลูเอนเซอร์ที่ตรงกับแบรนด์ของคุณ</li>
          <li>**ทีมผลิตมืออาชีพ:** บริการถ่ายทำ ตัดต่อ และสร้างสรรค์คอนเทนต์ที่โดดเด่น</li>
          <li>**Live Stream และโฆษณา:** เพิ่มการมองเห็นและยอดขายผ่าน Live stream และโฆษณาออนไลน์</li>
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
