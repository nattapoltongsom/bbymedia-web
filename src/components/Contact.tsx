"use client";

import { Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          พร้อมสร้างแบรนด์ของคุณให้โดดเด่นหรือยัง?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          ให้เราช่วยวางกลยุทธ์ สร้างตัวตน และขับเคลื่อนแบรนด์ของคุณให้เป็นที่จดจำ ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี!       
         </p>

        {/* Contact Methods */}
        <div className="flex flex-col items-center gap-4 mb-8 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>061-869-7892</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>babyyak.bby@gmail.com</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <Facebook size={28} />
          </a>
          <a
            href="https://instagram.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://line.me/YOUR_LINE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
