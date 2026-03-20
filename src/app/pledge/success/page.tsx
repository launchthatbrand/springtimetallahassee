import { FadeIn } from "~/app/_components/fade-in";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-white font-gotham">
      {/* Layered patriotic frame (side stripes overlap top/bottom) */}
      <div className="pointer-events-none absolute inset-0">
        {/* top/bottom stripes */}
        <div className="absolute inset-x-0 top-0 h-3 bg-[#0d4f7f]" />
        <div className="absolute inset-x-0 top-3 h-3 bg-white" />
        <div className="absolute inset-x-0 top-6 h-3 bg-[#c62828]" />
        <div className="absolute inset-x-0 bottom-0 h-3 bg-[#0d4f7f]" />
        <div className="absolute inset-x-0 bottom-3 h-3 bg-white" />
        <div className="absolute inset-x-0 bottom-6 h-3 bg-[#c62828]" />

        {/* full-height side stripes (on top) */}
        <div className="absolute inset-y-0 left-0 w-3 bg-[#0d4f7f]" />
        <div className="absolute inset-y-0 left-3 w-3 bg-white" />
        <div className="absolute inset-y-0 left-6 w-3 bg-[#c62828]" />
        <div className="absolute inset-y-0 right-0 w-3 bg-[#0d4f7f]" />
        <div className="absolute inset-y-0 right-3 w-3 bg-white" />
        <div className="absolute inset-y-0 right-6 w-3 bg-[#c62828]" />
      </div>

      <div className="absolute inset-9">
        <Image
          src="/view-from-above-of-usa-transportation-infrastructu-2024-12-07-03-39-50-utc-gs.jpg"
          alt="Transportation background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0d3f6f]/85" />
      </div>

      <FadeIn
        as="section"
        direction="up"
        durationMs={700}
        className="relative z-10 flex h-full items-center justify-center px-5 py-10 text-center text-white sm:px-6"
      >
        <div className="max-w-4xl space-y-4 sm:space-y-6 p-5">
          <Image src="/Star Trio.png" alt="Star Trio" width={100} height={100} className="mx-auto h-14 w-auto object-contain" />
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-black font-oswald leading-tight drop-shadow-2xl">
            Congratulations on taking your first step toward the Target Zero mission!
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl font-medium leading-relaxed">
            Together we are making Florida&apos;s roadways safer for everyone. Signing the Target Zero pledge is just the first step.
          </p>
          <p className="text-xl sm:text-2xl md:text-2xl font-medium leading-relaxed wrap-break-word">
            Go to{" "}
            <Link
              href="https://www.fdot.gov/agencyresources/target-zero"
              target="_blank"
              rel="noopener noreferrer"
              className="underline break-all md:break-normal"
            >
              https://www.fdot.gov/agencyresources/target-zero
            </Link>{" "}
            to learn more on how you can better our Florida roadways one drive at a time.
          </p>
        </div>
      </FadeIn>
    </main>
  );
}