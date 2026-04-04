"use client";

import { useState } from "react";
import Image from "next/image";

type AuctionCardProps = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  images: string[];
};

export default function AuctionCard({
  title,
  date,
  time,
  location,
  description,
  images,
}: AuctionCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const previewImages = images.slice(0, 3);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              {title}
            </h2>

            <div className="mt-4 space-y-3 rounded-2xl bg-gray-50 p-4">
              <div>
                <p className="text-sm font-semibold text-[#0b5d3b]">Date</p>
                <p className="text-gray-800">{date}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0b5d3b]">Time</p>
                <p className="text-gray-800">{time}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0b5d3b]">Location</p>
                <p className="text-gray-800">{location}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-[#0b5d3b]">Description</p>
              <p className="mt-2 leading-7 text-gray-700">{description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex rounded-xl bg-[#0b5d3b] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Contact Us About This Auction
              </a>

              {images.length > 3 && (
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(true)}
                  className="inline-flex rounded-xl border border-[#0b5d3b] px-5 py-3 text-sm font-semibold text-[#0b5d3b] hover:bg-green-50"
                >
                  View More Photos
                </button>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {previewImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className={`relative overflow-hidden rounded-2xl border border-black/10 bg-gray-100 text-left ${
                  index === 0 ? "sm:col-span-2 h-72" : "h-44"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                {title} Gallery
              </h3>

              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-xl border border-black/10 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative h-64 overflow-hidden rounded-2xl border border-black/10 bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${title} gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}