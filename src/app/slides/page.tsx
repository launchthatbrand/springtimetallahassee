"use client";

import { CheckCircle2, ChevronDown, Circle, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FadeIn } from "~/app/_components/fade-in";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const pledgeActions = [
  "I will stay alert and focused every trip.",
  "I will avoid distractions while traveling.",
  "I will follow speed limits and traffic laws.",
  "I will never drive impaired.",
  "I will encourage friends and family to do the same.",
];

export default function TransportationDaySlidesPage() {
  const [pledgeName, setPledgeName] = useState("");
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [locationError, setLocationError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const completionPercent = useMemo(() => {
    if (pledgeActions.length === 0) return 0;
    return Math.round((selectedActions.length / pledgeActions.length) * 100);
  }, [selectedActions.length]);

  const handleToggleAction = (action: string) => {
    setSelectedActions((prev) =>
      prev.includes(action) ? prev.filter((item) => item !== action) : [...prev, action],
    );
  };

  const handleLocationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;
    const trimmedLocation = location.trim();

    if (trimmedLocation.length < 2) {
      setLocationError("Enter a valid city, county, or location.");
      hasError = true;
    } else {
      setLocationError("");
    }

    if (!/^\d{5}$/.test(zipCode)) {
      setZipCodeError("Enter a valid 5-digit zip code.");
      hasError = true;
    } else {
      setZipCodeError("");
    }

    if (hasError) return;

    setIsSubmitted(true);
  };

  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory bg-[#0b3e66] text-white font-gotham">
      <section className="relative min-h-screen snap-start overflow-hidden bg-[#0b3e66]">
        <div className="absolute inset-0">
          <Image
            src="/view-from-above-of-usa-transportation-infrastructu-2024-12-07-03-39-50-utc-gs.jpg"
            alt="Transportation network aerial view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#132f57]/90" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <FadeIn className="flex flex-1 flex-col items-center justify-center px-6 pt-12 pb-8 text-center">
            <Image src="/Star Trio.png" alt="Star Trio" width={100} height={100} className="h-14 w-auto object-contain" />
            <h1 className="text-5xl font-black uppercase tracking-wide drop-shadow-3xl md:text-6xl">
              Transportation Day
            </h1>
            <div className="-mt-2 text-7xl font-black tracking-tighter drop-shadow-2xl md:-mt-4 md:text-9xl">
              2026
            </div>
          </FadeIn>

          <FadeIn className="z-20 mx-auto w-full max-w-5xl rounded-xl bg-white py-6 shadow-2xl ring-1 ring-blue-500" delayMs={100}>
            <div className="mx-auto grid w-full grid-cols-1 items-center gap-6 px-4 md:grid-cols-3 md:gap-8">
              <Link href="https://www.fdot.gov" target="_blank" className="flex w-full justify-center">
                <Image src="/Web%20Assets/FDOT%20Logo_K.png" alt="FDOT Logo" width={240} height={96} className="h-auto w-44 object-contain md:w-56" />
              </Link>
              <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank" className="flex w-full justify-center md:justify-self-center">
                <Image src="/tz_logo_black.png" alt="Target Zero Logo" width={240} height={96} className="h-auto w-44 object-contain md:w-56" />
              </Link>
              <div className="flex w-full justify-center">
                <Image src="/america250fullcolorlarge.png" alt="America 250 Florida Logo" width={240} height={96} className="h-auto w-18 object-contain" />
              </div>
            </div>
          </FadeIn>

          <FadeIn className="flex flex-1 items-center justify-center px-6 py-10 text-center md:py-14" delayMs={150}>
            <div className="w-full max-w-4xl space-y-5">
              <p className="text-xl leading-relaxed text-white drop-shadow-lg md:text-2xl">
                Thank you for participating in <b>America 250 Transportation Day 2026.</b>
              </p>
              <p className="text-lg leading-relaxed text-white/90 drop-shadow-md md:text-2xl">
                We appreciate your commitment to transportation safety and Target Zero, Florida’s statewide initiative to
                reduce transportation-related serious injuries and fatalities to ZERO.
              </p>

              <div className="mx-auto mt-7 w-full max-w-md">
                <Button asChild className="h-14 w-full rounded-full bg-white text-lg font-black uppercase tracking-wide text-[#10345e] hover:bg-white/90">
                  <Link href="#checklist">Take the Safety Pledge!</Link>
                </Button>
              </div>
              <ChevronDown className="mx-auto mt-6 h-6 w-6 animate-bounce text-white/80" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="checklist" className="relative min-h-screen snap-start overflow-hidden px-4 py-10 text-[#173b67]">
        <Image
          src="/honoring-laborers-on-labor-day-engage-your-audien-2026-01-06-00-35-15-utc copy.jpg"
          alt="American flag background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />

        <FadeIn className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#d7e3f3]">
            <p className="text-sm font-bold uppercase tracking-wide text-[#3d6fa6]">Step 1 of 2</p>
            <h2 className="mt-1 text-3xl font-black leading-tight">Tap your safety commitments</h2>
            <p className="mt-2 text-base text-[#365c89]">
              Choose the promises you are making today. This builds intent before submission and boosts completion.
            </p>
            <div className="mt-4 rounded-xl border border-[#d7e3f3] bg-[#f7fbff] p-3">
              <label htmlFor="pledge-name" className="flex flex-wrap items-center gap-2 text-base font-semibold text-[#1c3e6f]">
                <span>I</span>
                <input
                  id="pledge-name"
                  type="text"
                  value={pledgeName}
                  onChange={(event) => setPledgeName(event.target.value)}
                  className="min-w-0 flex-1 border-b-2 border-[#2a6aac] bg-transparent px-1 py-1 text-[#173b67] outline-none placeholder:text-[#7b97b8]"
                  placeholder="enter your name"
                  aria-label="Your name"
                />
                <span>commit to safer travel.</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            {pledgeActions.map((action) => {
              const isSelected = selectedActions.includes(action);
              return (
                <button
                  key={action}
                  type="button"
                  onClick={() => handleToggleAction(action)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all",
                    isSelected
                      ? "border-[#2a6aac] bg-[#e8f1fb] shadow-sm"
                      : "border-[#d7e3f3] bg-white hover:border-[#88abd4]",
                  )}
                  aria-pressed={isSelected}
                >
                  {isSelected ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2a6aac]" />
                  ) : (
                    <Circle className="mt-0.5 h-5 w-5 shrink-0 text-[#7c9fc6]" />
                  )}
                  <span className="text-base font-semibold leading-snug">{action}</span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#d7e3f3]">
            <div className="flex items-center justify-between text-sm font-bold">
              <span>Commitment progress</span>
              <span>{completionPercent}%</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#dfeaf8]">
              <div className="h-full rounded-full bg-[#2a6aac] transition-all duration-500" style={{ width: `${completionPercent}%` }} />
            </div>
            <p className="mt-3 text-sm text-[#365c89]">
              {selectedActions.length >= 3
                ? "Great momentum. You are ready to complete your pledge."
                : "Pick at least 3 commitments, then complete the short form below."}
            </p>
          </div>

          <Button asChild className="h-11 rounded-full bg-[#b91c1c] text-white hover:bg-[#991b1b]">
            <Link href="#step-two">Continue to Step 2</Link>
          </Button>
        </FadeIn>
      </section>

      <section id="step-two" className="min-h-screen snap-start bg-white px-4 py-10 text-[#173b67]">
        <FadeIn className="mx-auto flex w-full max-w-md flex-col gap-5">
          <div className="rounded-2xl border border-[#d7e3f3] p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-[#3d6fa6]">Step 2 of 2</p>
            <h3 className="mt-1 text-3xl font-black leading-tight">Enter your location</h3>
            <p className="mt-2 text-base leading-relaxed text-[#365c89]">
              One last step to complete your pledge. Share your location and zip code so we can map community participation.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-3xl border border-[#cfe1f5] bg-[#f6fbff] p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 animate-in zoom-in-50 fade-in duration-700">
                <CheckCircle2 className="h-9 w-9 text-green-600" />
              </div>
              <h4 className="mt-5 text-3xl font-black uppercase text-[#1c3e6f] animate-in slide-in-from-bottom-2 fade-in duration-700">
                Thank you for pledging to stay safe
              </h4>
              <p className="mt-3 text-base text-[#365c89]">
                Your pledge helps strengthen safer travel choices across Florida.
              </p>
              <Button
                type="button"
                className="mt-6 h-11 rounded-full bg-[#1c3e6f] text-white hover:bg-[#163158]"
                onClick={() => {
                  setIsSubmitted(false);
                  setLocation("");
                  setZipCode("");
                  setLocationError("");
                  setZipCodeError("");
                }}
              >
                Submit Another Pledge
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleLocationSubmit}
              className="rounded-3xl border border-[#d7e3f3] bg-[#f7fbff] p-5 space-y-5"
            >
              <div className="rounded-2xl border border-[#d7e3f3] bg-white p-4">
                <div className="grid grid-cols-3 items-center gap-3">
                  <Link href="https://www.fdot.gov" target="_blank" className="flex justify-center">
                    <Image src="/Web%20Assets/FDOT%20Logo_K.png" alt="FDOT Logo" width={180} height={72} className="h-12 w-auto object-contain" />
                  </Link>
                  <Link href="https://www.fdot.gov/agencyresources/target-zero" target="_blank" className="flex justify-center">
                    <Image src="/tz_logo_black.png" alt="Target Zero Logo" width={180} height={72} className="h-12 w-auto object-contain" />
                  </Link>
                  <div className="flex justify-center">
                    <Image src="/america250fullcolorlarge.png" alt="America 250 Florida Logo" width={160} height={64} className="h-10 w-auto object-contain" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="location" className="text-sm font-bold uppercase tracking-wide text-[#3d6fa6]">
                  City or County
                </label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5b7ea8]" />
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className={cn(
                      "h-11 w-full rounded-xl border bg-white pl-9 pr-3 text-[#173b67] outline-none transition-colors focus:border-[#2a6aac]",
                      locationError ? "border-red-400" : "border-[#d7e3f3]",
                    )}
                    placeholder="Enter your city or county"
                    aria-invalid={!!locationError}
                  />
                </div>
                {locationError && <p className="text-sm font-semibold text-red-600">{locationError}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="zipCode" className="text-sm font-bold uppercase tracking-wide text-[#3d6fa6]">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  value={zipCode}
                  onChange={(event) => setZipCode(event.target.value.replace(/\D/g, "").slice(0, 5))}
                  className={cn(
                    "h-11 w-full rounded-xl border bg-white px-3 text-[#173b67] tracking-widest outline-none transition-colors focus:border-[#2a6aac]",
                    zipCodeError ? "border-red-400" : "border-[#d7e3f3]",
                  )}
                  placeholder="#####"
                  inputMode="numeric"
                  maxLength={5}
                  aria-invalid={!!zipCodeError}
                />
                {zipCodeError && <p className="text-sm font-semibold text-red-600">{zipCodeError}</p>}
              </div>

              <Button type="submit" className="h-11 w-full rounded-full bg-[#b91c1c] text-white hover:bg-[#991b1b]">
                Complete My Pledge
              </Button>
            </form>
          )}
        </FadeIn>
      </section>
    </main>
  );
}
