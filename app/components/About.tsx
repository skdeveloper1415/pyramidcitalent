"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  DollarSign,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".experience-card", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".floating-image", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".content-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f8ff] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-30 ">
          {/* LEFT SIDE */}
          <div className="relative">
            <div className="absolute top-0 left-0 grid grid-cols-6 gap-4 opacity-20">
              {[...Array(36)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#6D5DF6]"
                />
              ))}
            </div>

            <div className="relative about-image">
              <div className="overflow-hidden rounded-[35px]">
                <Image
                  src="/assets/about-1.webp"
                  alt="team"
                  width={700}
                  height={800}
                  className="w-full h-175 object-cover"
                />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition">
                  <Play
                    size={28}
                    fill="#6D5DF6"
                    className="text-lime-400"
                  />
                </button>
              </div>

              {/* Experience Card */}
              <div className="experience-card absolute right-5 xl:-right-10 top-40 bg-lime-400 text-black rounded-[30px] px-8 py-8 shadow-2xl">
                <h3 className="text-5xl font-bold">25+</h3>
                <p className="uppercase tracking-wider text-sm mt-2">
                  Years Of Experience
                </p>
              </div>

              {/* Floating Image */}
              <div className="floating-image xl:absolute -bottom-60 -right-15 bg-white p-3 rounded-[30px] shadow-2xl">
                <Image
                  src="/assets/about-1.webp"
                  alt="meeting"
                  width={420}
                  height={280}
                  className="rounded-[22px] w-105 h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="content-item inline-flex items-center px-6 py-3 rounded-full bg-lime-400/20 text-black text-sm font-semibold uppercase tracking-widest">
              Pyramid Talent
            </div>

            <h2 className="content-item mt-8 text-xl xl:text-4xl font-bold leading-tight text-slate-900">
             With Us You Gain More 
              <span className="block text-lime-400">
                Than Just Access to Talent
              </span>
            </h2>

            <p className="content-item mt-8 text-md text-black leading-9">
              You get a dedicated partner committed to deeply understanding your requirements and offering market-driven, customized talent solutions that work for you. We ensure fast access to tested IT, engineering, and professional talent through our powerful global talent engine and skills-first approach.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="content-item bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
                  <DollarSign className="text-lime-400" />
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  Transparent Pricing
                </h3>

                <p className="mt-2 text-slate-500">
                  Clear plans built for organizations of every size.
                </p>
              </div>

              <div className="content-item bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center">
                  <Users className="text-lime-400" />
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  Verified Talent
                </h3>

                <p className="mt-2 text-slate-500">
                  Access qualified professionals ready to contribute.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="content-item mt-10 space-y-5">
              {[
                "Precision Role Matching",
                "Fast, Simple Applications",
                "Support for Every Hiring Stage",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={22}
                    className="text-lime-400"
                  />
                  <span className="text-lg text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="content-item mt-12">
              <button className="group bg-lime-400 hover:bg-lime-400 text-black px-10 py-5 rounded-full font-semibold flex items-center gap-3 transition-all">
                Learn More

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}