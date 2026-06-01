"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const testimonials = [
  {
    id: 1,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources. Their flexible delivery models bring significant value to the table. We achieve a close, intimate relationship by having them as our local partner.",
  },
  {
    id: 2,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources. Their flexible delivery models bring significant value to the table. We achieve a close, intimate relationship by having them as our local partner.",
  },
  {
    id: 3,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources. Their flexible delivery models bring significant value to the table. We achieve a close, intimate relationship by having them as our local partner.",
  },
  {
    id: 4,
    name: "Insurance Underwriting Company",
    designation: "Vice President - Information Technology",
    image: "/assets/testimonial-1.jpg",
    review:
      "Pyramid Talent brings value to our partnership by providing hard-to-find skills and resources. Their flexible delivery models bring significant value to the table. We achieve a close, intimate relationship by having them as our local partner.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
    const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      const slider = sliderRef.current;

      if (!slider) return;

      const sliderTween = gsap.to(slider, {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      slider.addEventListener("mouseenter", () => {
        sliderTween.pause();
      });

      slider.addEventListener("mouseleave", () => {
        sliderTween.play();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="py-28 bg-[#f7f7f7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <span className="inline-flex px-5 py-2 rounded-full border border-gray-300 text-sm font-medium">
            Testimonials
          </span>

          <h2 className="testimonial-heading mt-6 text-5xl font-bold text-black">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-8 w-max"
        >
          {[...testimonials, ...testimonials].map(
            (item, index) => (
              <div
                key={index}
                className="w-137.5 shrink-0 rounded-4xl overflow-hidden border border-gray-200 bg-white"
              >
                {/* Top Area */}
                <div className="bg-black px-10 py-8 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        {item.designation}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#C6F000] text-8xl leading-none">
                    ”
                  </div>
                </div>

                {/* Bottom Area */}
                <div className="p-10">
                  <div className="flex gap-2 text-black text-xl mb-8">
                    ★ ★ ★ ★ ★
                  </div>

                  <p className="text-xl font-medium leading-relaxed text-black">
                    "{item.review}"
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
