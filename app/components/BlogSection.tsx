"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import IndustryCard from "./ui/BlogCard";
import { blogs } from "@/app/data/blogs";

export default function BlogSection() {
  const sliderRef = useRef<Slider | null>(null);
  
  const settings = {
    className: "",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    dots: false,
    arrows: false, // Important
    responsive: [      
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
    <section className="py-16 blog_bg max-lg:px-5">
      <div className="max-w-7xl mx-auto">
      <div className="text-black font-semibold text-3xl flex items-center justify-between">
        <h5>More on Pyramid Talent</h5>
        {/* Custom Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
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
              transition
              "
            >
              <Image
                src={"/assets/arrow-narrow-left.svg"}
                alt="Next"
                width={16}
                height={16}
              />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
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
              transition
              "
            >
              <Image
                src={"/assets/arrow-narrow-right.svg"}
                alt="Next"
                width={16}
                height={16}
              />
            </button>
          </div>
      </div>
        <div className="my-10">
    <Slider ref={sliderRef} {...settings}>
       {blogs.map((item) => (
        <div
          key={item.id}
          className="px-4"
        >
          <IndustryCard
            category={item.category}
            image={item.image}
            date={item.date}
            comments={item.comments}
            title={item.title}
          />
        </div>
      ))}
    </Slider>
    </div>
    </div>
    </section>
    </>
    )
}
