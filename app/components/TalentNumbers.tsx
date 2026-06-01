"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Network,
  Users,
  Smile,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Network,
    value: 1250,
    suffix: "K",
    title: "Successful Placements",
    color: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Hiring Specialists",
    color: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Smile,
    value: 1330,
    suffix: "K",
    title: "Satisfied Clients",
    color: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: BadgeCheck,
    value: 100,
    suffix: "%",
    title: "Service Quality",
    color: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
];

export default function TalentNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Refresh after render
      ScrollTrigger.refresh();

      // Cards Animation
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Icons Animation
      gsap.from(".stat-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Counter Animation
      gsap.utils
        .toArray<HTMLElement>(".counter")
        .forEach((counter) => {
          const target = Number(counter.dataset.value);
          const suffix = counter.dataset.suffix || "";

          const obj = { value: 0 };

          gsap.to(obj, {
            value: target,
            duration: 2.5,
            ease: "power2.out",

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
              once: true,
            },

            onUpdate: () => {
              const current = Math.floor(obj.value);

              if (suffix === "K") {
                counter.innerHTML = current + "K";
              } else if (suffix === "%") {
                counter.innerHTML = current + "%";
              } else {
                counter.innerHTML = current + suffix;
              }
            },
          });
        });

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://pyramidci.com/wp-content/uploads/2024/06/with-pyramid-1.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0a1025]/50 via-transparent to-cyan-500/10" />

      {/* Heading */}
      <div className="relative z-10 flex items-center justify-center text-white text-2xl md:text-4xl xl:text-5xl font-bold mb-16 text-center px-4">
        <h2>Pyramid Talent by the Numbers</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`stat-card text-center px-6 ${
                  index !== stats.length - 1
                    ? "lg:border-r border-white/10"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`stat-icon w-24 h-24 mx-auto rounded-3xl backdrop-blur-md border border-white/10 flex items-center justify-center ${item.color}`}
                >
                  <Icon
                    size={34}
                    className={item.iconColor}
                  />
                </div>

                {/* Counter */}
                <h3
                  className="counter mt-8 text-5xl lg:text-6xl font-bold text-white"
                  data-value={item.value}
                  data-suffix={item.suffix}
                >
                  0
                </h3>

                {/* Title */}
                <p className="mt-4 text-lg text-gray-300">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}