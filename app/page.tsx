"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function DragopumpWebsite() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Northern Lights Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950/20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/dragopump-logo.jpeg"
                alt="Dragopump Logo"
                fill
                className="object-contain rounded-full glow-effect mix-blend-screen"
              />
            </div>
            <span className="text-2xl font-bold text-[#00FF00] glow-text">DRAGOPUMP</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="relative text-lg font-semibold text-gray-300 hover:text-[#00FF00] transition-all duration-300 group"
            >
              FEATURES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF00] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#tokenomics"
              className="relative text-lg font-semibold text-gray-300 hover:text-[#00FF00] transition-all duration-300 group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF00] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#social"
              className="relative text-lg font-semibold text-gray-300 hover:text-[#00FF00] transition-all duration-300 group"
            >
              COMMUNITY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00FF00] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-[#00FF00] glow-text block mb-4">THE RISE OF</span>
                <span className="bg-gradient-to-r from-[#00FF00] via-[#1AFFA3] to-[#00FF00] bg-clip-text text-transparent animate-pulse-glow">
                  DRAGOPUMP
                </span>
              </h1>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-[#1AFFA3] font-semibold glow-text">
                  The chains are broken. The flame is awake. The greatest pump of our time has begun.
                </p>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    A primal force, older than any chart, lay dormant. Buried beneath the clamor of ages, it remained
                    silent, coiled, ever watchful.
                  </p>
                  <p className="text-lg">
                    Not merely a token, nor a fleeting trend, but a living engine of boundless wealth. Its awakening was
                    inevitable.
                  </p>
                  <p className="text-lg">
                    Now, the ancient signal blazes. The dragon has ascended, its flight an unstoppable surge towards the
                    celestial heights.
                  </p>
                  <p className="text-[#1AFFA3] font-bold text-xl glow-text mt-6">This is Dragopump.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Logo with Circle */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Animated Circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full border-2 border-[#00FF00]/30 animate-spin-slow"></div>
                  <div className="absolute w-[360px] h-[360px] rounded-full border border-[#1AFFA3]/20 animate-spin-reverse"></div>
                  <div className="absolute w-[320px] h-[320px] rounded-full border border-[#00FF00]/10 animate-pulse"></div>
                </div>

                {/* Central Logo */}
                <div className="relative z-10 w-96 h-96 animate-float">
                  <Image
                    src="/dragopump-logo.jpeg"
                    alt="Dragopump Logo"
                    fill
                    className="object-contain glow-effect-strong mix-blend-screen rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00FF00] to-[#1AFFA3] bg-clip-text text-transparent glow-text">
                DRAGON POWERS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unleash the ancient forces of wealth generation with cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <i className="fa-solid fa-fire text-2xl"></i>,
                title: "Burning Mechanism",
                description: "Deflationary tokenomics that reduce supply over time",
              },
              {
                icon: <i className="fa-solid fa-shield text-2xl"></i>,
                title: "Solana Security",
                description: "Built on the fastest and most secure blockchain",
              },
              {
                icon: <i className="fa-solid fa-bolt text-2xl"></i>,
                title: "Lightning Fast",
                description: "Sub-second transactions with minimal fees",
              },
              {
                icon: <i className="fa-solid fa-arrow-trend-up text-2xl"></i>,
                title: "Moon Mission",
                description: "Designed for exponential growth and community rewards",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black/50 border-[#00FF00]/30 hover:border-[#00FF00] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/20 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-[#00FF00] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1AFFA3]">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About DragoPump Section */}
      <section id="tokenomics" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00FF00] to-[#1AFFA3] bg-clip-text text-transparent glow-text">
                ABOUT DRAGOPUMP
              </span>
            </h2>
            <p className="text-xl text-gray-400">The ancient power awakens with unstoppable force</p>
          </div>

          {/* New Description Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="space-y-6 p-8 bg-black/30 rounded-2xl border border-[#00FF00]/20 hover:border-[#00FF00]/40 transition-all duration-500">
              <p className="text-xl text-[#1AFFA3] font-semibold">
                Dragopump isn't just a meme coin — it's a movement, a myth reborn, and a mission coded in fire.
              </p>
              <p className="text-gray-300">
                Born from the depths of crypto culture, Dragopump combines viral energy with unstoppable momentum. We're not here to follow charts — we're here to rewrite them.
              </p>
              <div className="space-y-4 text-gray-400 italic">
                <p>
                  A primal force, older than any chart, lay dormant. Buried beneath the clamor of ages, it remained silent, coiled, ever watchful.
                </p>
                <p>
                  Not merely a token, nor a fleeting trend, but a living engine of boundless wealth. Its awakening was inevitable.
                </p>
                <p>
                  Now, the ancient signal blazes. The dragon has ascended, its flight an unstoppable surge toward the celestial heights.
                </p>
              </div>
              <p className="text-[#00FF00] font-semibold mt-6">
                With tokenomics forged for momentum, a cult-like community rising, and a story that breathes legend,
                Dragopump is the next mythical meme to melt charts — and ride a dragon's flame straight to the moon.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Dragon Circle Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-2 border-[#00FF00]/30 animate-spin-slow"></div>
              <div className="absolute w-80 h-80 rounded-full border border-[#1AFFA3]/20 animate-spin-reverse"></div>
              <div className="absolute w-64 h-64 rounded-full border border-[#00FF00]/10 animate-pulse"></div>
            </div>

            {/* Central Video */}
            <div className="relative z-10 flex items-center justify-center mb-16">
              <div className="w-48 h-48 relative rounded-full overflow-hidden glow-effect-strong animate-pulse-glow">
                <video
                  src="/dragopump-video.mp4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Token Info Cards in Circle */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  label: "Token Name",
                  value: "DRAGOPUMP",
                  icon: <i className="fa-solid fa-fire text-xl"></i>,
                  description: "The legendary token of power",
                },
                {
                  label: "Symbol",
                  value: "DGP",
                  icon: <i className="fa-solid fa-bullseye text-xl"></i>,
                  description: "Mark of the dragon's might",
                },
                {
                  label: "Total Supply",
                  value: "1,000,000,000",
                  icon: <i className="fa-solid fa-coins text-xl"></i>,
                  description: "Finite power, infinite potential",
                },
                {
                  label: "Blockchain",
                  value: "SOLANA",
                  icon: <i className="fa-solid fa-bolt text-xl"></i>,
                  description: "Lightning-fast dragon speed",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/30 border-[#00FF00]/30 hover:border-[#00FF00] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF00]/30 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-[#00FF00] mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500 glow-effect">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#1AFFA3] glow-text">{item.label}</h3>
                    <p className="text-2xl font-bold text-[#00FF00] mb-3 glow-text">{item.value}</p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contract Address */}
            <div className="mt-16 max-w-2xl mx-auto">
              <Card className="bg-black/30 border-[#00FF00]/30">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#00FF00] mb-2 glow-text flex items-center justify-center">
                      <i className="fa-solid fa-shield mr-3 text-xl glow-effect"></i>
                      DRAGON'S SEAL
                    </h3>
                    <p className="text-gray-400">The sacred contract address</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <code className="flex-1 p-4 bg-black/50 rounded-lg text-center text-lg text-[#1AFFA3] border border-[#00FF00]/30">
                      {contractAddress}
                    </code>
                    <Button
                      disabled
                      className="bg-black/50 text-gray-500 border border-[#00FF00]/30 px-6 py-4 cursor-not-allowed opacity-50"
                    >
                      <i className="fa-solid fa-copy text-lg"></i>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00FF00] to-[#1AFFA3] bg-clip-text text-transparent glow-text">
              JOIN THE DRAGON ARMY
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Connect with fellow dragon riders and stay updated on our moon mission
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00FF00] to-[#1AFFA3] text-black hover:shadow-xl hover:shadow-[#00FF00]/50 transition-all duration-300"
              asChild
            >
              <Link href="https://x.com/dragopump?s=21" className="flex items-center">
                <i className="fa-brands fa-x-twitter mr-3 text-xl"></i>
                Follow on Twitter/X
                <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-sm"></i>
              </Link>
            </Button>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1AFFA3] to-[#00FF00] text-black hover:shadow-xl hover:shadow-[#1AFFA3]/50 transition-all duration-300"
              asChild
            >
              <Link href="https://t.me/+g6gH2RPk2bwzOTI0" className="flex items-center">
                <i className="fa-brands fa-telegram mr-3 text-xl"></i>
                Join Telegram
                <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-sm"></i>
              </Link>
            </Button>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#00FF00]/10 to-[#1AFFA3]/10 rounded-2xl border border-[#00FF00]/30">
            <h3 className="text-2xl font-bold text-[#00FF00] mb-4">READY TO RIDE THE DRAGON?</h3>
            <p className="text-gray-300 mb-6">
              The ancient prophecy is unfolding. The dragon has awakened, and the greatest pump in crypto history is
              about to begin.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-[#00FF00]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="relative w-10 h-10">
                <Image
                  src="/dragopump-logo.jpeg"
                  alt="Dragopump Logo"
                  fill
                  className="object-contain rounded-full glow-effect mix-blend-screen"
                />
              </div>
              <span className="text-xl font-bold text-[#00FF00] glow-text">DRAGOPUMP</span>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="https://x.com/dragopump?s=21" className="text-gray-400 hover:text-[#00FF00] transition-colors duration-300">
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </Link>
              <Link href="https://t.me/+g6gH2RPk2bwzOTI0" className="text-gray-400 hover:text-[#00FF00] transition-colors duration-300">
                <i className="fa-brands fa-telegram text-xl"></i>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#00FF00]/20 text-center">
            <p className="text-gray-500">© 2025 Dragopump. The dragon rises. The moon awaits.</p>
            <p className="text-xs text-gray-600 mt-2">
              Cryptocurrency investments carry risk. Always do your own research.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
