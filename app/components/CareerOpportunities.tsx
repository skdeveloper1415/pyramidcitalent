import Image from "next/image";
import Link from "next/link";
import AppButton from "./ui/Button";



export default function CareerOpportunities() {
  return (
    <section className="py-16 bg-[#010101]">
        <div className="max-w-7xl mx-auto px-6 mb-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div className="flex flex-col items-start gap-6 rounded-xl w-full overflow-hidden relative h-100 xl:h-125 hover:[&_.primarybtn]:bottom-5 transition-all duration-300">
                    <Image src={"/assets/career.png"} alt="career" width={546} height={520} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#57C785]/50 to-[#EDDD53]/60"></div>
                    <div className="absolute -bottom-10 left-10 primarybtn transition-all duration-300">
                    <AppButton
                    label="Looking for Now career opportunities?"
                    className="primary-btn"
                    />	
                    </div>
                </div>
                <div className="flex flex-col items-start gap-6 rounded-xl w-full overflow-hidden relative h-100 xl:h-125 hover:[&_.primarybtn]:bottom-5 transition-all duration-300">
                    <Image src={"/assets/talent.png"} alt="career" width={546} height={520} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#57C785]/50 to-[#EDDD53]/60"></div>
                    <div className="absolute -bottom-10 left-10 primarybtn transition-all duration-300">
                    <AppButton
                    label="Looking for the Now right talent?"
                    className="primary-btn"
                    />	
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
