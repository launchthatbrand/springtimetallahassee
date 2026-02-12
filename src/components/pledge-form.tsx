"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  zipCode: z.string().regex(/^\d{5}$/, { message: "Enter a valid 5-digit zip code" }),
});

type FormValues = z.infer<typeof formSchema>;

export function PledgeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      zipCode: "",
    },
  });

  const handleSubmitPledge = (values: FormValues) => {
    console.log("Form Submitted:", values);
    // Here you would typically send data to an API
    // await fetch('/api/pledge', { method: 'POST', body: JSON.stringify(values) })

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center animate-in zoom-in-50 fade-in duration-700">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2 animate-in slide-in-from-bottom-2 fade-in duration-700">
          <h3 className="text-3xl font-black text-[#1c3e6f] uppercase font-oswald tracking-wide">
            Thank you for pledging to stay safe
          </h3>
          <p className="text-xl text-[#1c3e6f] font-medium max-w-md mx-auto">
            Your commitment helps make Florida roads safer for everyone.
          </p>
        </div>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            reset();
          }} 
          variant="outline"
          className="mt-4 border-2 border-[#1c3e6f] text-[#1c3e6f] font-bold hover:bg-[#1c3e6f] hover:text-white"
        >
          Submit Another Pledge
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 transition-all duration-300"
      onSubmit={handleSubmit(handleSubmitPledge)}
    >
      <div className="text-xl md:text-2xl font-bold text-[#1c3e6f] leading-relaxed">
        <div className="flex flex-wrap items-baseline gap-x-2 relative">
          <span>I</span>
          <div className="relative group">
            <Input
              {...register("name")}
              className={`h-8 w-64 border-b-2 border-x-0 border-t-0 rounded-none bg-white px-2 py-0 text-[#1c3e6f] placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-b-[#d32f2f] transition-colors ${
                errors.name ? "border-red-500 bg-red-50" : "border-[#1c3e6f]"
              }`}
              placeholder="First and Last Name"
              aria-label="Name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="absolute left-0 -bottom-6 text-sm text-red-600 font-bold whitespace-nowrap animate-in slide-in-from-top-1 fade-in">
                * {errors.name.message}
              </span>
            )}
          </div>
          <span>pledge to</span>
        </div>
        <span className="mt-1 block">practice safer behaviors every time I travel by:</span>
      </div>

      <ul className="space-y-3 pl-4">
        {[
          "Staying alert and focused on the road",
          "Following traffic laws and posted speed limits",
          "Eliminating all distractions while walking, biking, or driving",
          "Never driving impaired",
          "Making smart decisions everytime I get behind a wheel",
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-lg font-bold text-[#1c3e6f]"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1c3e6f]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 sm:ml-auto w-full sm:w-auto">
        <div className="flex flex-col items-end gap-1 w-full sm:w-auto">
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <label
              htmlFor="zip"
              className="text-lg font-bold text-[#1c3e6f] whitespace-nowrap"
            >
              Zip Code:
            </label>
            <div className="relative">
              <Input
                id="zip"
                type="text"
                {...register("zipCode")}
                className={`h-10 w-32 rounded-sm border-none bg-white px-3 text-[#1c3e6f] shadow-inner text-center font-bold tracking-widest ${
                  errors.zipCode ? "ring-2 ring-red-500 bg-red-50" : ""
                }`}
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength={5}
                placeholder="#####"
                aria-invalid={!!errors.zipCode}
              />
            </div>
          </div>
          {errors.zipCode && (
            <span className="text-sm text-red-600 font-bold text-right w-full animate-in slide-in-from-right-2 fade-in">
              {errors.zipCode.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="h-10 px-8 text-lg font-black uppercase tracking-widest bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-full shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
        >
          SUBMIT
        </Button>
      </div>
    </form>
  );
}
