"use client";

import Image from "next/image";
import { Card } from "primereact/card";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  // Prevent crash
  if (!service) return null;

  return (
    <Card
      className="overflow-hidden rounded-4xl border border-white/10 bg-black xl:sticky top-35"
      
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="p-12 lg:p-16 flex flex-col justify-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-black text-3xl font-bold mb-10">
            {service.id}
          </div>

          <h2 className="text-xl xl:text-5xl font-bold mb-6">
            {service.title}
          </h2>

          <p className="text-xl text-white/70 mb-10">
            {service.description}
          </p>


          <button className="bg-lime-400 text-black px-8 py-4 rounded-xl w-fit font-semibold">
           Read More
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </Card>
  );
}