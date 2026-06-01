"use client";
import Image from "next/image";

interface AppButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function AppButton({
  label,
  className = "",
  onClick,
}: AppButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-lime-400 px-4 py-2 rounded-full text-sm font-medium text-black flex items-center justify-between gap-2 hover:bg-lime-500 transition cursor-pointer"
    >
      {label}
      <Image src={"/assets/right-arrow-svgrepo.svg"} alt="arrow" width={16} height={16} className="inline-block ml-2 w-5" />
    </button>
  );
}