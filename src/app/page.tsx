import { Facebook, Instagram } from "lucide-react";

import { FadeIn } from "~/app/_components/fade-in";
import Image from "next/image";
import Link from "next/link";
import { PledgeForm } from "~/components/pledge-form";

// Custom X icon since Lucide doesn't have the new logo yet
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function TransportationDayPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-gotham gap-2">
      <section className="relative w-full bg-[#0b3e66] border-b-4 border-red-500">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/view-from-above-of-usa-transportation-infrastructu-2024-12-07-03-39-50-utc-gs.jpg"
            alt="Highway Background"
            fill
            className="object-cover"
            priority
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#132f57]/90"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col">
          {/* Top Content: Title */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-12 pb-8">
            <Image src="/Star Trio.png" alt="Star Trio" width={100} height={100} className="h-14 w-auto object-contain" />
            <h1 className="text-3xl md:text-7xl tracking-wide font-black text-white uppercase font-oswald drop-shadow-3xl">
              Target Zero
            </h1>
            <div className="-mt-2 text-7xl md:text-9xl text-shadow-sm font-black text-white font-oswald tracking-tighter drop-shadow-2xl md:-mt-4">
              TOGETHER
            </div>
          </div>

          {/* Middle Content: White Bar with Logos */}
          <div className="bg-white ring-1 ring-blue-500 py-6 w-full mx-auto shadow-2xl z-20">
            <div className="mx-auto grid w-full grid-cols-3 items-center gap-6 px-4 md:gap-8">
              <Link href="https://www.fdot.gov" target="_blank" rel="noopener noreferrer" className="flex w-full justify-center">
                <Image
                  src="/fdot_logo_color.png"
                  alt="FDOT Logo"
                  width={240}
                  height={96}
                  className="h-auto w-18 object-contain sm:w-22 md:w-44"
                />
              </Link>
              <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank" rel="noopener noreferrer" className="flex w-full justify-center md:justify-self-center">
                <Image
                  src="/tz_logo_black.png"
                  alt="Target Zero Logo"
                  width={240}
                  height={96}
                  className="h-auto w-18 object-contain sm:w-22 md:w-44"
                />
              </Link>
              <div className="flex w-full justify-center">
                <Image
                  src="/america250fullcolorlarge.png"
                  alt="America 250 Florida Logo"
                  width={240}
                  height={96}
                  className="h-auto w-8 object-contain sm:w-10 md:w-14"
                />
              </div>
            </div>
          </div>

          {/* Bottom Content: Intro Text */}
          <div className="flex-1 flex items-center justify-center text-center px-6 py-12 md:py-16">
            <div className="max-w-5xl space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-white drop-shadow-lg">
                Thank you for participating in <b>America 250 Transportation Day 2026.</b>
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 drop-shadow-md">
                The Florida Department of Transportation appreciates your commitment to transportation safety and Target Zero,
                Florida’s Statewide initiative to reduce the number of transportation-related
                serious Injuries and fatalities across Florida to ZERO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pledge Section */}
      <section className="bg-white py-12 md:py-20 border-t-5 border-b-5 border-[#0b3e66] flex flex-col gap-20">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-8">
          <FadeIn direction="up" delayMs={100}>
            {/* Pledge Card */}
            <div className="relative rounded-3xl shadow-xl overflow-hidden min-h-125">
              <Image
                src="/honoring-laborers-on-labor-day-engage-your-audien-2026-01-06-00-35-15-utc copy.jpg"
                alt="Labor Day background"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-white/80" /> */}

              <div className="relative z-10 pt-8 px-4 md:pt-10 md:px-6 text-center">
                <h2 className="text-center text-4xl md:text-5xl font-black text-[#1c3e6f] uppercase font-oswald tracking-tight">
                  Take the Safety Pledge!
                </h2>
              </div>

              {/* Form */}
              <div className="relative z-10 w-full md:w-2/3 md:mx-auto p-8 pt-6 md:p-12 md:pt-8 text-left flex flex-col justify-center">
                <PledgeForm />
              </div>
            </div>
          </FadeIn>
        </div>
        <div>
          <FadeIn as="section" direction="up" className="bg-white pb-12 text-center space-y-8">
            <h3 className="text-2xl md:text-4xl font-black text-[#1c3e6f] uppercase font-oswald tracking-wide">
              Follow Us On Socials!
            </h3>
            <div className="flex flex-col justify-center items-center gap-8 md:gap-14">
              <Link href="https://instagram.com/myfdot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1c3e6f] hover:text-[#d32f2f] transition-colors">
                <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-[10px] bg-linear-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                  <Instagram className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </span>
                <span className="text-2xl md:text-3xl font-bold">@my_fdot</span>
              </Link>
              <Link href="https://twitter.com/MyFDOT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1c3e6f] hover:text-[#d32f2f] transition-colors">
                <XIcon className="h-12 w-12 md:h-14 md:w-14" />
                <span className="text-2xl md:text-3xl font-bold">@myfdot</span>
              </Link>
              <Link href="https://facebook.com/MyFDOT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1c3e6f] hover:text-[#d32f2f] transition-colors">
                <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#1877f2]">
                  <Facebook className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </span>
                <span className="text-2xl md:text-3xl font-bold">@myfdot</span>
              </Link>
            </div>

            {/* Divider Line */}
            <div className="container mx-auto px-4 max-w-4xl pt-8">
              <div className="h-px w-full bg-slate-300"></div>
            </div>
          </FadeIn>
          <FadeIn as="footer" direction="up" delayMs={100} className="bg-white pb-12 pt-4">
            <div className="container mx-auto px-6 text-center space-y-8 max-w-4xl">
              <p className="text-2xl font-medium text-[#1c3e6f]">
                For information about FDOT programs, safety initiatives,<br className="hidden md:block" />
                and travel information, please visit <Link href="https://www.fdot.gov" target="_blank" rel="noopener noreferrer" className="font-bold underline">www.fdot.gov</Link>
              </p>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                <Link href="https://www.fdot.gov" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/Web%20Assets/FDOT%20Logo_K.png"
                    alt="FDOT Logo"
                    width={150}
                    height={60}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </Link>
                <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/tz_logo_black.png"
                    alt="Target Zero Logo"
                    width={150}
                    height={60}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </Link>
                <Image
                  src="/america250fullcolorlarge.png"
                  alt="America 250 Florida Logo"
                  width={150}
                  height={60}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative w-full bg-[#0b3e66] border-b-4 border-red-500 h-36">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/view-from-above-of-usa-transportation-infrastructu-2024-12-07-03-39-50-utc-gs.jpg"
            alt="Highway Background"
            fill
            className="object-cover object-bottom"
            priority
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#132f57]/90"></div>
        </div>
      </section>
    </main>
  );
}
