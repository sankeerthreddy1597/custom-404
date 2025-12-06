import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 to-white flex items-center justify-center overflow-hidden p-4">
      <div className="absolute inset-0 flex items-center justify-center select-none z-0 pointer-events-none">
        <h1 className="text-[50vw] -translate-y-1/3 md:text-[45vw] md:-translate-y-1/4 lg:text-[40vw] lg:-translate-y-1/4 font-black text-blue-100/60 leading-none mix-blend-multiply">
          404
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl space-y-4">
        <div className="relative w-72 h-72 md:w-96 md:h-96 mb-8">
          {/*
             Tip: To add a simple "floating" animation, add 'animate-bounce-slow'
             to the class below and define it in tailwind.config.js (see step 3)
          */}
          <Image
            src="/images/confused-monster.png"
            alt="Confused blue monster"
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Oops, I think we&apos;re lost...
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Let&apos;s get you back to somewhere familiar.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-2 mt-4"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
