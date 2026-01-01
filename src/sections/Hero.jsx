export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 id="hero-heading" className="text-3xl md:text-5xl font-extrabold leading-tight">
            Grow your business with high-converting digital products
          </h2>
          <p className="mt-4 text-lg md:text-xl text-teal-100 max-w-xl mx-auto md:mx-0">
            We design responsive websites and tailored marketing strategies that drive measurable growth.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="/contact" className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-md shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white" role="button">
              Get Started
            </a>
            <a href="/services" className="inline-block border border-white/40 text-white px-5 py-3 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white" role="button">
              Learn more
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <svg viewBox="0 0 600 400" className="w-full h-auto" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <rect width="600" height="400" rx="16" fill="url(#g2)" />
            <g transform="translate(40,40)" fill="none" stroke="#fff" strokeWidth="2">
              <rect x="0" y="0" width="220" height="120" rx="8" strokeOpacity="0.6" />
              <circle cx="320" cy="120" r="60" strokeOpacity="0.6" />
              <path d="M0 200h520" strokeOpacity="0.2" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
