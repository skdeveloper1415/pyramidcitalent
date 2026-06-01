import Aurora from "./Aurora";
import BlurText from "../animation/BlurText";
import {
  ArrowRight,
} from "lucide-react";
        

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Banner() {
  return (
    <>
    <section className="bg-black h-screen">
    <div className="h-screen w-full relative">
    <div className="text-white flex flex-col gap-10 items-center justify-center absolute h-full w-full [&_p]:text-xl xl:[&_p]:text-5xl [&_p]:font-semibold text-center max-lg:px-5">
        <BlurText
        text="Creating Greater Value for All, Together"
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        />        
        <div>We connect industry leaders with the best talent across the globe and ensure they are the best fit for each other.</div>
        <div className="flex items-center gap-5 [&_a]:bg-[#facc15] [&_a]:py-1 [&_a]:px-3 [&_a]:rounded-md [&_a]:text-black [&_a]:text-md">
        <button className="group bg-lime-400 hover:bg-lime-400 text-black px-4 py-2 xl:px-10 xl:py-5 rounded-full font-semibold flex items-center gap-3 transition-all">
                Find Jobs

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
        <button className="group bg-lime-400 hover:bg-lime-400 text-black px-4 py-2 xl:px-10 xl:py-5 rounded-full font-semibold flex items-center gap-3 transition-all">
                Hire Talent

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

        
        </div>
    </div>
  <Aurora
  colorStops={["#7cff67","#B497CF","#5227FF"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/>
</div>
    </section>
    </>
  )
}
