import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "~/app/_components/fade-in";

export default function SuccessPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-white font-gotham">
      <div className="absolute inset-2 border-4 border-[#0d4f7f] shadow-[0_0_0_2px_rgba(255,255,255,0.2),0_10px_25px_rgba(0,0,0,0.28)]" />
      <div className="absolute inset-4 border-4 border-[#c62828] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
      <div className="absolute inset-6 border-4 border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]" />
      <div className="absolute inset-8 border-4 border-[#c62828] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]" />
      <div className="absolute inset-10 border-4 border-[#0d4f7f] shadow-[0_8px_20px_rgba(0,0,0,0.22)]" />

      <div className="absolute inset-10">
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
        className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white"
      >
        <div className="max-w-6xl space-y-6">
          <Image src="/Star Trio.png" alt="Star Trio" width={100} height={100} className="mx-auto h-14 w-auto object-contain" />
          <h1 className="text-5xl md:text-7xl font-black uppercase font-oswald leading-tight drop-shadow-2xl">
            Thank You For
            <br />
            Your Commitment!
          </h1>
          <p className="text-2xl md:text-4xl font-medium leading-relaxed">
            Together we are making Florida&apos;s roadways safer for everyone.
            <br />
            Signing the safety pledge is just the first step.
          </p>
          <p className="text-2xl md:text-4xl font-medium leading-relaxed">
            Go to{" "}
            <Link
              href="https://www.fdot.gov/agencyresources/target-zero"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.fdot.gov/agencyresources/target-zero
            </Link>{" "}
            to learn
            <br />
            more on how you can be apart of the Target Zero mission.
          </p>
        </div>
      </FadeIn>
    </main>
  );
}