import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Starburst graphic in top right */}
      <div className="absolute top-16 right-16">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-[#95ff00]">
          <g fill="currentColor">
            {/* Starburst rays */}
            <polygon points="60,10 65,45 60,50 55,45" />
            <polygon points="110,60 75,65 70,60 75,55" />
            <polygon points="60,110 55,75 60,70 65,75" />
            <polygon points="10,60 45,55 50,60 45,65" />
            <polygon points="95,25 70,50 65,45 85,30" />
            <polygon points="95,95 70,70 75,65 90,85" />
            <polygon points="25,95 50,70 55,75 30,90" />
            <polygon points="25,25 50,50 45,55 30,35" />
            <polygon points="85,15 75,40 70,35 80,20" />
            <polygon points="105,85 80,75 85,70 100,80" />
            <polygon points="35,105 45,80 50,85 40,100" />
            <polygon points="15,35 40,45 35,50 20,40" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-8 py-16 max-w-6xl">
        {/* Main heading */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-[#95ff00]">Who are </span>
            <span className="text-white">we?</span>
          </h1>

          {/* Arrow pointing down-right */}
          <div className="ml-8">
            <svg width="80" height="40" viewBox="0 0 80 40" className="text-[#95ff00]">
              <path
                d="M10 20 L60 20 M50 10 L60 20 L50 30"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg md:text-xl leading-relaxed max-w-5xl">
          <p>
            <span className="text-[#95ff00] font-semibold">The Sample —</span>{" "}
            <span className="text-white">YouTube & Music Agency for the Digital Generation</span>
          </p>

          <p className="text-white">
            The Sample is a creative agency built for today's creators, brands, and music artists.
          </p>

          <p className="text-white">
            We specialize in YouTube strategy, content production, and music creation, helping you grow your audience,
            amplify your voice, and build a lasting digital presence.
          </p>

          <p className="text-white">
            Whether you're launching a YouTube channel, producing original tracks, or looking to level up your visual
            content — we provide end-to-end solutions tailored to your goals.
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-24 flex flex-col items-center space-y-8">
          {/* Arrow pointing down */}
          <svg width="40" height="60" viewBox="0 0 40 60" className="text-[#95ff00]">
            <path
              d="M20 10 L20 40 M10 30 L20 40 L30 30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Back to home button */}
          <Button
            variant="outline"
            className="border-[#95ff00] text-white hover:bg-[#95ff00] hover:text-black bg-transparent px-8 py-3 text-lg rounded-full"
            asChild
          >
            <Link href="/">Back to home page</Link>
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-8">
        <p className="text-white text-sm">© Copyright by THE SAMPLE 2025</p>
      </div>
    </div>
  )
}
