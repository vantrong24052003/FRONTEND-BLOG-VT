import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[826px] bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#171717]" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8 pt-8">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[90px] text-[#f4f4f5]">
                <p>Giúp bạn</p>
                <p>tiến bộ nhanh</p>
                <div className="flex items-center gap-3">
                  <span>hơn</span>
                  <span className="relative inline-block">
                    <div className="absolute inset-0 bg-[#171717] rounded border border-white/10" />
                    <div className="relative bg-[#171717] rounded px-4 py-2">
                      <span className="text-white">x10 lần</span>
                      {/* Decorative lines */}
                      <div className="absolute inset-0 overflow-hidden rounded">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 h-px bg-white/10"
                            style={{ top: `${i * 10 + 9.6}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-[#d4d4d8] leading-relaxed max-w-2xl">
              Mình là Được, một Web Developer 5+ kinh nghiệm, sỡ hữu 3 khóa học React, Next, Node và đã mentor cho hơn
              2000 học viên trong 3 năm.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-[#171717] hover:bg-white/90 transition-colors shadow-lg"
              >
                Tìm hiểu các khóa học
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#191919] border border-[#191919] px-6 py-3 text-sm font-medium text-[#fafafa] hover:bg-[#262626] transition-colors"
              >
                Inbox mình tư vấn miễn phí
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Image src="/logos/nextjs.svg" alt="Next.js" width={24} height={24} />
                </div>
                <span className="text-sm font-semibold text-[#737373]">Next.js</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Image src="/logos/react.svg" alt="React" width={24} height={24} />
                </div>
                <span className="text-sm font-semibold text-[#737373]">React</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Image src="/logos/nodejs.svg" alt="Node.js" width={24} height={24} />
                </div>
                <span className="text-sm font-semibold text-[#737373]">Node.js</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Image src="/logos/vue.svg" alt="Vue" width={24} height={24} />
                </div>
                <span className="text-sm font-semibold text-[#737373]">Vue</span>
              </div>
            </div>
          </div>

          {/* Right Content - Author Image */}
          <div className="relative lg:pt-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-1">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image src="/images/author.jpg" alt="Dư Thanh Được" fill className="object-cover" priority />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-4 top-20 hidden lg:block">
              <div className="rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-0.5 shadow-2xl shadow-emerald-500/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0a]">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-20 hidden lg:block">
              <div className="rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-0.5 shadow-2xl shadow-purple-500/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0a]">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
