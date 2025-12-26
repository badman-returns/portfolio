import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10 space-y-20">

      {/* HEADER */}
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Built, Not Taught</h1>

        <p className="text-lg text-[var(--muted)] max-w-2xl">
          My journey into frontend engineering didn’t follow a conventional path.
          It was shaped by curiosity, experimentation, and learning things the
          hard way.
        </p>
      </header>

      {/* INTRO + PHOTO */}
      <section className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-14 items-start">
        {/* PHOTO */}
        <div className="relative">
          <div className="surface p-2 inline-block">
            <Image
              src="/dp.jpeg"
              alt="Trishnangshu Goswami"
              width={220}
              height={280}
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I’m <span className="font-medium">Trishnangshu Goswami</span>, a
            frontend engineer from Kolkata, West Bengal.
          </p>

          <p className="text-[var(--muted)]">
            Before I ever wrote code, I was deeply drawn to the arts — sketching,
            painting, and anything that allowed creative expression. Traditional
            schooling never clicked with me, but everything changed when a
            computer entered my life in 5th standard.
          </p>

          <p className="text-[var(--muted)]">
            What started as curiosity quickly became obsession — cloning web
            pages, experimenting with HTML, and trying to understand why things
            worked the way they did.
          </p>
        </div>
      </section>

      {/* STORY BLOCK */}
      <section className="space-y-8 max-w-3xl">
        <p className="text-lg leading-relaxed">
          That curiosity led me into unexpected places — hacking tools,
          networking basics, Linux, and the command line. While exploring
          Metasploit, I came across exploit code written in C, which pushed me to
          learn programming seriously.
        </p>

        <p className="text-[var(--muted)] leading-relaxed">
          In 7th grade, I borrowed <em>Let Us C</em> from a teacher who challenged
          me by saying I wouldn’t understand it because I was bad at math. That
          challenge became fuel. I spent weeks learning C fundamentals, and
          concepts like pointers clicked naturally — shaping how I reason about
          systems even today.
        </p>
      </section>

      {/* PULL QUOTE */}
      <section className="border-l-4 border-[var(--accent)] pl-6 max-w-3xl">
        <p className="text-xl italic leading-relaxed">
          “What hooked me wasn’t hacking itself — it was the freedom to build,
          break, and understand things on my own terms.”
        </p>
      </section>

      {/* CAREER */}
      <section className="space-y-8 max-w-3xl">
        <p className="text-lg leading-relaxed">
          After 10th grade, I stepped away from traditional schooling and joined
          a diploma engineering course. There, I picked up JavaScript and
          Angular, built real projects, freelanced, and worked on a friend’s
          startup.
        </p>

        <p className="text-[var(--muted)] leading-relaxed">
          By my second year, I landed my first full-time role and dropped the
          course entirely. Since then, I’ve been working as a full-time developer
          for about five years — entirely self-taught, learning through
          production systems, mistakes, and real-world constraints.
        </p>
      </section>

      {/* CURRENT */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="section-title">Today</h2>

        <p className="leading-relaxed">
          I currently work as a Frontend Engineer at Delta Exchange, building
          reliable, high-performance user experiences for a real-time trading
          platform.
        </p>

        <p className="text-[var(--muted)] leading-relaxed">
          While frontend is my core specialization, I actively explore systems
          beyond it — backend architecture, infrastructure, async I/O, CPU
          scheduling, and Go — to better understand how everything fits together.
        </p>
      </section>

      {/* MINDSET */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="section-title">Mindset</h2>

        <p className="leading-relaxed">
          The hardest part of my journey wasn’t learning to code — it was
          navigating expectations.
        </p>

        <p className="text-[var(--muted)] leading-relaxed">
          With a 53% score in 10th grade and no formal degree, I faced a lot of
          skepticism. But that friction taught me to trust myself, focus on
          long-term growth, and keep building even when the path looked
          unconventional.
        </p>
      </section>

      {/* FOOT NOTE */}
      <section className="pt-10 border-t border-[var(--surface-border)] max-w-3xl">
        <p className="text-sm text-[var(--muted-light)]">
          This site is a collection of my work, thinking, and notes from building
          and debugging real-world systems.
        </p>
      </section>

    </section>
  );
}
