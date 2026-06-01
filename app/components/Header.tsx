"use client";

import { Sidebar } from "primereact/sidebar";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { gsap } from "gsap";
import AppButton from "./ui/Button";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
 const items = [
        {
            label: 'About Us',
             url: "/",
        },
        {
            label: 'Resources',
            url: "/",
        },
        {
            label: 'Careers',
            url: "/",
        },        
        {
            label: 'Contact',
            url: "/",
        }
    ];

  

  const topBarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(topBarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.from(
      navRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    gsap.from(".brand-logo", {
      opacity: 0,
      y: -20,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      delay: 0.4,
    });

    gsap.from(".nav-item", {
      opacity: 0,
      y: -15,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });

    const handleScroll = () => {
      if (window.scrollY > 80) {
        gsap.to(navRef.current, {
          height: 70,
          duration: 0.3,
        });
      } else {
        gsap.to(navRef.current, {
          height: 88,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`fixed top-0 w-full z-50 pt-4 max-lg:px-5 ${
      isSticky
        ? "bg-black shadow-lg py-2 transition-all duration-300"
        : "bg-transparent py-6"
    }`} ref={topBarRef}>
      <div ref={navRef} className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
            <Image
      src="/assets/logo.svg"
      width={100}
      height={48}
      className="h-12 md:h-14"
      alt="Pyramid Talent"
    />
            </Link>
            <div className="flex items-center gap-10 max-lg:hidden">
              <div className="flex items-center gap-6 [&_li]:list-none [&_a]:text-white">
              {items.map((item, index) => (
              <li key={index}>
              <Link
              href={item.url}
              className="font-medium hover:text-lime-400 transition"
              >
              {item.label}
              </Link>
              </li>
              ))}
              </div>
              <div className="flex items-center gap-3 [&_.nav-item]:text-black [&_.nav-item]:text-sm [&_.nav-item]:font-extralight [&_.nav-item]:bg-white [&_.nav-item]:px-3 [&_.nav-item]:py-1 [&_.nav-item]:rounded-sm">
                <AppButton
                                label="For Job Seekers"
                                className="primary-btn"
                                />
                <AppButton
                                label="For Employers"
                                className="primary-btn"
                                />
            </div>
            
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setVisible(true)}
              className="lg:hidden"
            >
              <Image src={"/assets/hamburger-menu.svg"} alt="menu" width={24} height={24} />
            </button>
      </div>
    </header>

    {/* Sidebar */}
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="w-[320px] bg-white p-10"
        showCloseIcon={false}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold">
            Menu
          </h2>

          <button
            onClick={() => setVisible(false)}
          >
            <Image src={"/assets/close-circle.svg"} alt="close" width={24} height={24} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index}>
              <button
                className="text-lg font-medium"
                onClick={() =>
                  setVisible(false)
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4">
        <AppButton
        label="For Job Seekers"
        className="primary-btn"
        />
        <AppButton
        label="For Employers"
        className="primary-btn"
        />
        </div>
      </Sidebar>
    
    
    </>
  );
}