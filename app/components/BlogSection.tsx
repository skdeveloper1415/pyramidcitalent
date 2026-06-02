"use client";

import { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import IndustryCard from "./ui/BlogCard";
import { blogs } from "@/app/data/blogs";

export default function BlogSection() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-16 blog_bg max-lg:px-5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-black font-semibold text-3xl flex items-center justify-between">
          <h5>More on Pyramid Talent</h5>

          {/* Custom Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                cursor-pointer
                w-14
                h-14
                rounded-full
                border
                border-gray-300
                bg-lime-400
                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/assets/arrow-narrow-left.svg"
                alt="Previous"
                width={16}
                height={16}
              />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="
                cursor-pointer
                w-14
                h-14
                rounded-full
                border
                border-gray-300
                bg-lime-400
                flex
                items-center
                justify-center
              "
            >
              <Image
                src="/assets/arrow-narrow-right.svg"
                alt="Next"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="my-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogs.map((item) => (
              <SwiperSlide key={item.id}>
                <IndustryCard
                  category={item.category}
                  image={item.image}
                  date={item.date}
                  comments={item.comments}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}