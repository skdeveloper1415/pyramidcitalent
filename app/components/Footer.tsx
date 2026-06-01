import Image from "next/image";
import AppButton from "./ui/Button";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-12 footer_bg max-lg:px-5">
        <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/20 pb-8 max-lg:grid max-lg:grid-cols-1 max-lg:gap-10">
            <div className="flex flex-col items-center gap-4 ">
                <Image src={"/assets/footer-logo.svg"} alt="logo" width={150} height={50} />
                <div className="flex items-center gap-4 mt-4">
                    <Image src={"/assets/Frame-1973341807-1.svg"} alt="logo" width={100} height={50} />
                    <Image src={"/assets/Frame-1973341808-1.svg"} alt="logo" width={100} height={50} />
                </div>
            </div>
            <div className="flex items-center gap-10 max-lg:grid max-lg:grid-cols-1 max-lg:gap-5">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 border-b border-white/20 pb-8">
            <div className="flex flex-col items-start gap-4 [&_h5]:text-lg [&_h5]:font-semibold text-white [&_a]:text-sm [&_a]:text-white/80">
                <h5>Company</h5>
                <ul className="flex flex-col gap-4">
                    <li><Link href={'/'}>About Us</Link> </li>
                    <li><Link href={'/'}>Resources</Link> </li>
                    <li><Link href={'/'}>Careers</Link> </li>                    
                    <li><Link href={'/'}>Contact Us</Link> </li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-4 [&_h5]:text-lg [&_h5]:font-semibold text-white [&_a]:text-sm [&_a]:text-white/80">
                <h5>Quick Links</h5>
                <ul className="flex flex-col gap-4">
                    <li><Link href={'/'}>Reasonable Accommodation Policy</Link> </li>
                    <li><Link href={'/'}>Privacy</Link> </li>
                    <li><Link href={'/'}>CCPA/CCRA</Link> </li>
                    <li><Link href={'/'}>GDPR</Link> </li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-4 [&_h5]:text-lg [&_h5]:font-semibold text-white [&_a]:text-sm [&_a]:text-white/80">
                <h5>Information</h5>
                <ul className="flex flex-col gap-4">
                    <li><Link href={'/'}>Microsoft privacy statement</Link> </li>
                    <li><Link href={'/'}>Web Accessibility</Link> </li>
                    <li><Link href={'/'}>Privacy introduction</Link> </li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-4 [&_h5]:text-lg [&_h5]:font-semibold text-white [&_a]:text-sm [&_a]:text-white/80">
                <h5>Get In Touch</h5>
                <ul className="flex flex-col gap-4">
                    <li><Link href={'/'}>info@gmail.com</Link> </li>
                    <li><Link href={'/'}>0011-2233-00</Link> </li>
                    <li><Link href={'/'}>Noida</Link> </li>
                </ul>
            </div>
        </div>
        <div className="flex items-center justify-center pt-5 text-sm text-white/80">
            <p>© 2026 Pyramid Consulting, Inc. | All rights reserved</p>
        </div>
        </div>
    </section>
  )
}
