"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    img: "/hero1.jpg",
    title: "บริการครบวงจร",
    subtitle:
      "รวมพลังอินฟลูเอนเซอร์ จัดหาอินฟลูเอนเซอร์ ป้ายโฆษณารถเมล์ และอีกมากมาย",
  },
  {
    img: "/hero2.jpg",
    title: "ทีมงานมืออาชีพ",
    subtitle:
      "พร้อมให้คำปรึกษาและสนับสนุนทุกขั้นตอน เพื่อผลลัพธ์ที่ดีที่สุด",
  },
  {
    img: "/hero3.jpg",
    title: "เพิ่มยอดขาย",
    subtitle: "สร้างแบรนด์คุณให้โดดเด่นด้วยกลยุทธ์การตลาดที่เหมาะสม",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000 }}
        loop
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="w-full h-[400px] md:h-[600px]"
      >
        {slides.map(({ img, title, subtitle }, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* ใช้ Image แทน img */}
            <Image
              src={img}
              alt={title}
              fill
              priority={idx === 0} // โหลดรูปแรกก่อนเพื่อ LCP ดีขึ้น
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
              <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
                {title}
              </h2>
              <p className="text-white text-lg md:text-2xl max-w-3xl drop-shadow-md">
                {subtitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ปุ่มซ้าย */}
      <button
        className="hero-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
        aria-label="ก่อนหน้า"
      >
        ‹
      </button>

      {/* ปุ่มขวา */}
      <button
        className="hero-next absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
        aria-label="ถัดไป"
      >
        ›
      </button>
    </div>
  );
}
