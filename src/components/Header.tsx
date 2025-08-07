"use client";
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">BBYMedia</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-600 transition-colors">บริการของเรา</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">เกี่ยวกับเรา</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">ติดต่อเรา</a>
        </nav>
      </div>
    </header>
  );
}
