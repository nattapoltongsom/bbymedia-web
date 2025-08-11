"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface GalleryProps {
  images: string[];
  title?: string;
}

export default function GalleryPros({ images, title }: GalleryProps) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    scrollThumbnailToIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    const nextIdx = (lightboxIndex + 1) % images.length;
    setLightboxIndex(nextIdx);
    scrollThumbnailToIndex(nextIdx);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    const prevIdx = (lightboxIndex - 1 + images.length) % images.length;
    setLightboxIndex(prevIdx);
    scrollThumbnailToIndex(prevIdx);
  };

  const scrollThumbnailToIndex = (index: number) => {
    if (!thumbnailsRef.current) return;
    const container = thumbnailsRef.current;
    const thumbnails = container.children;
    const target = thumbnails[index] as HTMLElement;
    if (!target) return;

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const scrollLeft =
      container.scrollLeft +
      targetRect.left -
      containerRect.left -
      containerRect.width / 2 +
      targetRect.width / 2;

    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  const scrollThumbnailsBy = (distance: number) => {
    if (!thumbnailsRef.current) return;
    thumbnailsRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-red-600">
            {title}
          </h2>
        )}

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => scrollThumbnailsBy(-200)}
            aria-label="เลื่อนดูภาพก่อนหน้า"
            className="absolute left-0 z-10 bg-red-700 text-white rounded-full p-2 opacity-80 hover:opacity-100"
          >
            ‹
          </button>

          <div
            ref={thumbnailsRef}
            className="flex justify-center space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-100 py-2 scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {images.map((src, idx) => (
              <button
                key={src}
                onClick={() => openLightbox(idx)}
                className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-shadow shadow-md hover:shadow-lg ${
                  lightboxIndex === idx ? "border-red-600" : "border-transparent"
                }`}
                aria-label={`เปิดภาพกิจกรรมที่ ${idx + 1}`}
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="relative h-36 w-48">
                  <Image
                    src={src}
                    alt={`กิจกรรมที่ ${idx + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollThumbnailsBy(200)}
            aria-label="เลื่อนดูภาพถัดไป"
            className="absolute right-0 z-10 bg-red-700 text-white rounded-full p-2 opacity-80 hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 text-white text-4xl font-bold"
          >
            ‹
          </button>

          <div
            className="relative w-[90vw] max-w-[1200px] aspect-[3/2] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`กิจกรรมที่ ${lightboxIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 text-white text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
