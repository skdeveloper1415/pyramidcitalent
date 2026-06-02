"use client";

import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const testimonials = [
  {
    id: 1,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources.",
  },
  {
    id: 2,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Their flexible delivery models bring significant value to the table.",
  },
  {
    id: 3,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "We achieve a close, intimate relationship by having them as our local partner.",
  },
  {
    id: 4,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent consistently delivers high quality talent solutions.",
  },
];

export default function Testimonial() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-28 bg-[#f7f7f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-center mb-16 flex-wrap">
          <div>
            <span className="inline-flex px-5 py-2 rounded-full border border-gray-300 text-sm font-medium">
              Testimonials
            </span>

            <h2 className="mt-6 text-xl lg:text-5xl font-bold text-black">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-14 h-14 rounded-full bg-lime-400 flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-14 h-14 rounded-full bg-lime-400 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
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

            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-[32px] overflow-hidden border border-gray-200 bg-white h-full">

                {/* Top */}
                <div className="bg-black px-8 py-6 flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#C6F000] text-6xl">
                    ”
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-8">
                  <div className="mb-6 text-yellow-500">
                    ★★★★★
                  </div>

                  <p className="text-lg leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}