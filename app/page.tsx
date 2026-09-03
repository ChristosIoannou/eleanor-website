import Image from "next/image";
import Reveal from "@/components/Reveal";
import billboard from "@/public/billboard.jpeg";
import headshot from "@/public/headshot-main.jpeg";
import grapeMoon from "@/public/grape-moon.jpeg";
import estatesMist from "@/public/estates-mist.jpeg";
import lichin from "@/public/lichin.jpeg";
import showcase from "@/public/showcase.jpeg";
import paper from "@/public/paper_edited.jpg";

const works = [
  { title: "'portens',", publication: "Propel Magazine", image: grapeMoon },
  { title: "Brickwork,", publication: "Roundhouse", image: estatesMist },
  { title: "Homesteading,", publication: "The London Magazine", image: lichin },
];

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="hero relative max-lg:px-[6.15vw] max-lg:py-[8vw]">
        <Reveal className="hero-img lg:absolute max-lg:mb-[8vw]">
          <Image
            src={billboard}
            alt=""
            sizes="(max-width: 1023px) 100vw, 73vw"
            placeholder="blur"
            priority
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal className="hero-title lg:absolute">
          <h1>
            Poet
            <br /> Writer
            <br /> Editor
          </h1>
        </Reveal>

        <Reveal className="hero-quote mono lg:absolute max-lg:mt-[8vw]">
          <p>
            I am told that words are good enough,
            <br />
            but what good is that?
          </p>
        </Reveal>
      </section>

      {/* ---------- About ---------- */}
      <section
        id="about"
        className="about relative scroll-mt-[6vw] overflow-hidden max-lg:pb-[12vw]"
      >
        <div className="about-band" aria-hidden />

        <Reveal className="about-img relative lg:absolute">
          <Image
            src={headshot}
            alt="Eleanor Cousins Brown"
            sizes="(max-width: 1023px) 100vw, 37vw"
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal className="about-copy relative text-center text-[var(--base-1)] lg:absolute max-lg:px-[6.15vw] max-lg:pt-[10vw]">
          <p className="about-label">About</p>
          <div className="spacer" aria-hidden />
          <p>
            Eleanor Cousins Brown is a poet from Wiltshire by night and an editor by day.
            She writes about everything from guilt to pigeons, class and family, always
            coming back to the absurd, brilliant and baffling everyday of living.
          </p>
          <div className="spacer" aria-hidden />
          <p>
            Widening access to storytelling, writing and reading is central to her work.
            She spent a year and a half volunteering with Doorstep Library, a London
            reading charity. Over four years in publishing, she has started in
            children&rsquo;s books, and is now lucky enough to edit non-fiction, poetry
            and classics at Penguin Press.
          </p>
        </Reveal>
      </section>

      {/* ---------- Works ---------- */}
      <section
        id="works"
        className="works relative scroll-mt-[6vw] max-lg:px-[6.15vw] max-lg:py-[12vw]"
      >
        <Reveal>
          <h2 className="works-title">Works</h2>
        </Reveal>

        <ul className="works-row grid grid-cols-3 lg:absolute max-lg:mt-[8vw] max-lg:grid-cols-1 max-lg:gap-[8vw]">
          {works.map((work, i) => (
            <li key={work.title}>
              <Reveal delay={i * 150}>
                <figure>
                  <Image
                    src={work.image}
                    alt=""
                    sizes="(max-width: 1023px) 100vw, 32vw"
                    placeholder="blur"
                    className="h-[21.6vw] w-full object-cover max-lg:h-[56vw]"
                  />
                  <figcaption>
                    {work.title} <em>{work.publication}</em>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Showcase ---------- */}
      <section className="showcase relative overflow-hidden max-lg:h-[70vw]">
        <Image
          src={showcase}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
      </section>

      {/* ---------- Contact / footer ---------- */}
      <footer
        id="contact"
        className="site-footer relative scroll-mt-[6vw] overflow-hidden bg-[var(--base-2)] max-lg:px-[6.15vw] max-lg:py-[10vw]"
      >
        {/* Wix tints the white paper scan to the indigo ground; multiply reproduces it. */}
        <Image
          src={paper}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover mix-blend-multiply"
        />

        <Reveal className="wordmark relative text-[var(--footer-fg)] lg:absolute">
          <p>
            <em>Eleanor</em>
            <br /> Cousins
            <br /> Brown
          </p>
        </Reveal>

        <Reveal className="footer-contact mono relative text-[var(--base-1)] lg:absolute max-lg:mt-[6vw]">
          <address className="not-italic">
            <a href="mailto:e.cousinsbrown@gmail.com" className="block hover:opacity-70">
              e.cousinsbrown@gmail.com
            </a>
            <a
              href="https://www.instagram.com/_eleanorcb_/"
              target="_blank"
              rel="noreferrer"
              className="block hover:opacity-70"
            >
              @_eleanorcb_
            </a>
          </address>
        </Reveal>
      </footer>
    </main>
  );
}
