"use client";

export default function BBYMediaSection() {
  const steps = [
    "เพื่อนคู่คิดช่วยสร้างแบรนด์",
    "ช่วยคุณวิเคราะห์กิจกรรมกลุ่มเป้าหมาย",
    "ช่วยคุณแพลนเรื่องการโปรโมท",
    "เราพร้อมดูแลคุณทุกขั้นตอน",
  ];

  return (
    <section id="bby-media" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          BBY Media Marketing 360
        </h3>
        <p className="text-xl font-semibold mb-16 text-blue-600 dark:text-blue-400">
          ครบ จบ คุ้ม อินฟลู ออฟไลน์ กลยุทธ์
        </p>

        {/* Step Flow without lines */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:w-1/4 px-4">
              {/* Circle with number */}
              <div className="w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-400 shadow-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                {index + 1}
              </div>

              {/* Text */}
              <p className="text-gray-800 dark:text-gray-300 text-lg font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
