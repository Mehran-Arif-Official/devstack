import heroStack from "../assets/hero-stack.png";

export default function Hero() {
  return (
    <section id="home" className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-[3.1rem] leading-[1.08] font-extrabold tracking-tight">
            <span className="text-ink">Build Your Ideal</span>
            <br />
            <span className="bg-gradient-to-r from-brandOrange via-brandPink to-brandPurple bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed max-w-md">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-brandOrange to-brandPink text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="border border-slate-200 text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-slate-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroStack}
            alt="Isometric illustration of a layered development stack"
            className="w-full max-w-[420px] h-auto select-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
