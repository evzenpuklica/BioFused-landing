import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="BioFused logo"
    width={40}
    height={40}
  />
  <span className="font-semibold tracking-tight text-lg">
    BioFused
  </span>
</div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a className="hover:text-zinc-900" href="#problem">Problem</a>
            <a className="hover:text-zinc-900" href="#solution">Solution</a>
            <a className="hover:text-zinc-900" href="#use-cases">Use cases</a>
            <a className="hover:text-zinc-900" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 transition"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              Sustainable materials, redesigned
            </div>

            <h1 className="mt-5 text-5xl md:text-6xl font-bold tracking-tight">
              Edible & biodegradable alternatives to single-use plastics.
            </h1>

            <p className="mt-5 text-lg text-zinc-700 max-w-xl">
              BioFused turns waste-free thinking into a product you can actually use.
              Built for real-world adoption: food packaging and single-use items that disappear naturally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition"
              >
                Join the waitlist
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:bg-zinc-50 transition"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                Fully biodegradable
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                Food-safe direction
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                Scalable manufacturing
              </div>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="lg:pl-8">
            <div className="rounded-3xl border border-emerald-100 bg-white shadow-sm p-6">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
                <p className="text-sm text-emerald-900 font-medium">Pilot concept</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  From single-use → to zero-waste
                </h3>
                <p className="mt-2 text-zinc-700">
                  Designed for high-volume environments: take-away, cafeterias, events, and packaging.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">Material</p>
                    <p className="mt-1 font-semibold">Bio-based</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">End-of-life</p>
                    <p className="mt-1 font-semibold">Compost / Eat*</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-zinc-200 p-4">
                    <p className="text-xs text-zinc-500">Target</p>
                    <p className="mt-1 font-semibold">B2B + B2C</p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  *Edibility depends on final formulation & certification path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">The problem</h2>
            <p className="mt-3 text-zinc-700">
              Single-use plastics are optimized for minutes of use and centuries of waste.
              Regulations are tightening, consumers are demanding alternatives, and businesses need solutions that don’t break operations.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-medium">Operational reality</p>
              <p className="mt-2 text-zinc-700">
                Alternatives must be cost-aware, consistent, and scalable — not just “eco”.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-medium">Brand & compliance pressure</p>
              <p className="mt-2 text-zinc-700">
                Companies need credible sustainability without greenwashing risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">The solution</h2>
          <p className="mt-3 text-zinc-700 max-w-3xl">
            BioFused focuses on a material direction that can be fully biodegradable and aims for food-safe certification.
            The goal: products that integrate into existing workflows and remove end-of-life friction.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-emerald-100 p-6">
              <h3 className="font-semibold">Eco by design</h3>
              <p className="mt-2 text-zinc-700">
                Built to degrade naturally, not just “recycle later”.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-emerald-100 p-6">
              <h3 className="font-semibold">Food-safe pathway</h3>
              <p className="mt-2 text-zinc-700">
                Designed with certification requirements in mind from day one.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-emerald-100 p-6">
              <h3 className="font-semibold">Scale-ready</h3>
              <p className="mt-2 text-zinc-700">
                Prioritizing repeatability and manufacturing realism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold tracking-tight">Use cases</h2>
        <p className="mt-3 text-zinc-700 max-w-3xl">
          Initial focus on high-volume, high-impact categories where single-use dominates.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-semibold">Take-away & catering</h3>
            <p className="mt-2 text-zinc-700">Cutlery, trays, cups, portion packaging.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-semibold">Food packaging</h3>
            <p className="mt-2 text-zinc-700">Wraps, liners, protective layers.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-semibold">Events & venues</h3>
            <p className="mt-2 text-zinc-700">Single-day usage, massive waste reduction.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Get early access</h2>
              <p className="mt-3 text-zinc-700">
                Want to pilot BioFused or follow progress? Drop your email and we’ll reach out.
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                (This is a UI only for now — we’ll connect the form next.)
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                type="button"
                className="rounded-xl bg-emerald-700 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>

        {/* FAQ SECTION */}
<section id="faq" className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="text-3xl font-semibold tracking-tight text-center">
    Frequently Asked Questions
  </h2>

  <div className="mt-10 space-y-6">
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="font-semibold">Is BioFused really edible?</h3>
      <p className="mt-2 text-zinc-700">
        Our material is being developed with food-safe certification in mind.
        Final edibility depends on the certified formulation.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="font-semibold">How is it different from biodegradable plastics?</h3>
      <p className="mt-2 text-zinc-700">
        BioFused focuses on true end-of-life simplicity — aiming for compostability
        and eliminating long-term environmental persistence.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="font-semibold">Who is it for?</h3>
      <p className="mt-2 text-zinc-700">
        Food packaging companies, catering businesses, event organizers,
        and environmentally conscious brands.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="font-semibold">When will it be available?</h3>
      <p className="mt-2 text-zinc-700">
        We are currently in development and pilot preparation phase.
        Join the waitlist to stay updated.
      </p>
    </div>
  </div>
</section>
        {/* CONTACT SECTION */}
<section id="contact" className="bg-emerald-50 py-16">
  <div className="mx-auto max-w-6xl px-6 text-center">
    <h2 className="text-3xl font-semibold tracking-tight">
      Contact BioFused
    </h2>

    <p className="mt-4 text-zinc-700">
      Interested in partnerships, pilot programs, or investment?
      Reach out to us.
    </p>

    <div className="mt-8 space-y-3">
      <p>
        📩 Email:{" "}
        <a
          href="mailto:contact@biofused.com"
          className="text-emerald-700 font-medium hover:underline"
        >
          contact@biofused.com
        </a>
      </p>

      <p>
        📷 Instagram:{" "}
        <a
          href="https://instagram.com/biofused"
          target="_blank"
          className="text-emerald-700 font-medium hover:underline"
        >
          @biofused
        </a>
      </p>
    </div>
  </div>
</section>
        <footer className="mt-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} BioFused. All rights reserved.
        </footer>
      </section>
    </main>
  );
}