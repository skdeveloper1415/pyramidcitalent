import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const logos = [
  "/assets/logo/1.svg",
  "/assets/logo/2.svg",
  "/assets/logo/3.svg",
  "/assets/logo/4.svg",
  "/assets/logo/5.svg",
  "/assets/logo/6.svg",
  "/assets/logo/7.svg",
  "/assets/logo/8.svg",
  "/assets/logo/9.svg",
  "/assets/logo/10.svg",

];

export default function Partnerships() {
    const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const tween = gsap.to(slider, {
      xPercent: -50,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    slider.addEventListener("mouseenter", () => {
      tween.pause();
    });

    slider.addEventListener("mouseleave", () => {
      tween.resume();
    });

    return () => {
      tween.kill();
    };
  }, []);
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-2xl font-semibold uppercase tracking-[4px] text-black">
          Our Industry Partnerships
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex items-center gap-20 w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-40 h-17.5 shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
