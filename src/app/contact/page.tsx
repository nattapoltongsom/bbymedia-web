'use client';
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ขอบคุณสำหรับข้อความของคุณ, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-red-600 text-center">ติดต่อเรา</h1>
      <p className="text-center text-gray-700 mb-12">
        หากคุณสนใจบริการของเรา หรือต้องการสอบถามข้อมูลเพิ่มเติม กรุณากรอกแบบฟอร์มด้านล่าง
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
            ชื่อของคุณ
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="ชื่อของคุณ"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
            ข้อความ
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="พิมพ์ข้อความที่นี่..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 text-white font-semibold rounded-md py-3 hover:bg-red-600 transition"
        >
          ส่งข้อความ
        </button>
      </form>

      <div className="mt-16 text-center text-gray-700">
        <p>โทร: <a href="tel:0801234567" className="underline">061 869 7892</a></p>
        <p>อีเมล: <a href="mailto:contact@bbymedia.com" className="underline">babyyak.bby@gmail.com</a></p>
      </div>
    </div>
  );
}
