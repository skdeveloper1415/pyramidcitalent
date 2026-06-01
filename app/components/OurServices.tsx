"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    title: "Contract & Contract-to-hire",
    image: "/assets/services1.png",
  },
  {
    title: "Direct hire",
    image: "/assets/services2.png",
  },
  {
    title: "Teams as a Service",
    image: "/assets/services3.png",
  },
  {
    title: "Employer of record",
    image: "/assets/services4.png",
  },
  
  
];

export default function OurServices() {
     const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
  
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      // Heading Animation
      gsap.from(".industry-badge", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".industry-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Horizontal Scroll
      const totalScroll =
  slider.scrollWidth -
  slider.parentElement!.offsetWidth;

const horizontalTween = gsap.to(slider, {
  x: -totalScroll,
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "bottom bottom",
    end: () => `+=${totalScroll}`,
    scrub: 1,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

      // Cards Reveal
      gsap.from(".industry-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Active Card Scale Animation
      gsap.utils
  .toArray<HTMLElement>(".industry-card")
  .forEach((card) => {
    gsap.fromTo(
      card,
      {
        scale: 0.92,
      },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalTween,
          start: "left center",
          end: "right center",
          scrub: true,
        },
      }
    );
  });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => clearTimeout(timer);
    return () => ctx.revert();
  }, []);
  return (
     <section
      ref={sectionRef}
      className="relative bg-[#f5f5f5] py-30"
    >
      <div className="min-h-screen flex flex-col justify-center">
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-6 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <span className="industry-badge inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700">
                Our Services
              </span>
            </div>

            <div className="lg:col-span-9">
              <h2 className="industry-heading text-2xl md:text-4xl font-bold leading-tight text-black">
                Lorem Ipsum is simply dummy text
              </h2>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 px-10"
          >
            {industries.map((item, index) => (
              <div
                key={index}
                className="industry-card group relative w-112.5 h-125 rounded-[28px] overflow-hidden shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#57C785]/50 to-[#EDDD53]/60" />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-black text-2xl font-bold leading-tight bg-white text-center rounded-2xl py-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
