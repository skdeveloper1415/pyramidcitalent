"use client";

import Image from "next/image";
import { Card } from "primereact/card";
import { CalendarDays, MessageCircle, ArrowRight } from "lucide-react";

interface IndustryCardProps {
  category: string;
  image: string;
  date: string;
  comments: number;
  title: string;
  onReadMore?: () => void;
}

export default function IndustryCard({
  category,
  image,
  date,
  comments,
  title,
  onReadMore,
}: IndustryCardProps) {
  return (
    <Card
      unstyled
      className="relative overflow-hidden rounded-4xl group"
    >
      {/* Background Image */}
      <div className="relative h-130">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-lime-400 text-black text-sm font-light uppercase">
            {category}
          </span>
        </div>

        {/* Content Card */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white rounded-[28px] p-8 shadow-xl">
            {/* Meta */}
            <div className="flex items-center gap-8 text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-lime-400"
                />
                <span className="text-sm">
                  {date}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle
                  size={18}
                  className="text-lime-400"
                />
                <span className="text-sm">
                  {comments} Comments
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-md leading-tight font-bold text-[#0A1F44] mb-8">
              {title}
            </h3>

            {/* CTA */}
            <button
              onClick={onReadMore}
              className="flex items-center gap-4 group/button"
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-lime-400 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                  <ArrowRight
                    size={20}
                    className="text-white"
                  />
                </div>
              </div>

              <span className="font-bold text-md text-[#0A1F44] uppercase">
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}