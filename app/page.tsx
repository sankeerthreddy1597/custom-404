"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Compass, Map, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const handleRandomRedirect = () => {
    const randomPath = Math.random().toString(36).substring(7);
    router.push(`/explore/${randomPath}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* Background HELLO Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-0 md:translate-x-0 -translate-y-1/2 font-black text-[12rem] md:text-[20rem] text-slate-100/60 select-none z-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: isHovering
            ? "translate(-50%, -52%) scale(1.05)"
            : "translate(-50%, -50%) scale(1)",
        }}
      >
        HELLO
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-fade-in-up">

        {/* Decorative Icon */}
        <div className="mx-auto w-20 h-20 bg-white rounded-3xl shadow-xl shadow-slate-200 flex items-center justify-center mb-6 transform transition-transform hover:scale-110 duration-300">
            <Compass className="w-10 h-10 text-brand-500" />
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-brand-500">
              Unknown
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
            Not all those who wander are lost — sometimes getting lost is the
            best part of the journey.
          </p>
        </div>

        {/* Interaction Card */}
        <div
          className="bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group mt-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2 text-sm font-semibold text-brand-500 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Demo Interaction</span>
            </div>

            <p className="text-slate-600">
              Click the button below to be redirected to a random, non-existent route to see the custom 404 page.
            </p>

            <Button
              onClick={handleRandomRedirect}
              variant={"secondary"}
              className="w-full md:w-auto min-w-[200px] justify-center text-lg py-4 cursor-pointer"
            >
              <span>Go Nowhere</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 gap-4 mt-8 opacity-60">
          <div className="p-4 rounded-2xl bg-white/40 border border-white/40 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Map size={16} />
            <span>Seamless Routing</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/40 border border-white/40 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Sparkles size={16} />
            <span>Custom Aesthetics</span>
          </div>
        </div>

      </div>
    </div>
  );
}
