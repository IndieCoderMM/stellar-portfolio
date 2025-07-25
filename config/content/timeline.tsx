/**
 * Timeline data for showcasing professional journey and achievements.
 * @page about
 *
 * TODO: Add your experience, projects, and contributions to the timeline.
 */
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

export const timelineData: TimelineEntry[] = [
  {
    title: "2023",
    content: (
      <div className="text-md text-fg/90 leading-tight tracking-tight md:col-span-6 md:text-lg lg:col-span-8 lg:text-2xl">
        <div className="text-fg mb-4 text-lg font-semibold md:text-xl lg:text-4xl">
          Full-Stack Developer{" "}
          <LinkPreview
            url="https://heinthantoo.vercel.app"
            isStatic={false}
            className="text-primary underline"
          >
            @IndieCoder
          </LinkPreview>
        </div>
        <p className="mb-8">
          Focused on expanding my skills through diverse projects, open-source
          contributions and sharing knowledge with the community.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Built a personal blog website to share my journey and knowledge with
            the community. Wrote articles on web development, programming, and
            productivity tips.
          </li>
          <li className="mb-2">
            Contributed to open-source projects, worked extensively with Next.js
            and explored large-scale system design.
          </li>
          <li className="mb-2">
            Designed and developed responsive, user-friendly websites using
            modern frameworks and tools.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/screenshots/blog-full.webp"
            alt="IndieCoder's Blog"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/convoz-full.webp"
            alt="Convoz Chat App"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/iptracker-full.webp"
            alt="IP Address Tracker"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/billio-full.webp"
            alt="Modern landing page"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="text-md text-fg/90 leading-tight tracking-tight md:col-span-6 md:text-lg lg:col-span-8 lg:text-2xl">
        <div className="text-fg mb-4 text-lg font-semibold md:text-xl lg:text-4xl">
          Full-Stack Developer{" "}
          <LinkPreview
            url="https://github.com/IndieCoderMM"
            isStatic={false}
            className="text-primary underline"
          >
            @Github
          </LinkPreview>
        </div>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Collaborated with developers from across the world to build
            full-stack applications using React and Ruby on Rails.
          </li>
          <li className="mb-2">
            Developed a strong understanding of industry standards, including
            best practices for clean code, version control, and scalable
            architecture.
          </li>
          <li className="mb-2">
            Worked in a professional remote environment, utilizing tools like
            Kanban boards, daily stand-ups, and time-blocking techniques to stay
            organized and productive.
          </li>
          <li className="mb-2">
            Improved problem-solving skills through pair programming, code
            reviews, and collaborative problem solving.
          </li>
          <li className="mb-2">
            Gained experience in balancing technical tasks with effective
            communication, laying a solid foundation for working in diverse,
            distributed teams.
          </li>
        </ul>
        <div className="grid grid-cols-3 place-items-center gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border-accent/20 bg-secondary/20 flex aspect-square w-20 items-center justify-center rounded-full border-[10px] object-contain shadow-sm md:w-40"
            >
              <p className="text-fg/20 text-center sm:text-xl">Badge</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="text-md text-fg/90 leading-tight tracking-tight md:col-span-6 md:text-lg lg:col-span-8 lg:text-2xl">
        <p className="mb-4">
          I discovered my passion for coding while building games, which turned
          into a fun way to learn. Along the way, I explored various algorithms
          and improved my skills through hands-on projects from YouTube and
          Coursera.
        </p>
        <ul className="mb-8 list-disc">
          <li className="mb-2">
            Built 10+ games using <em>Pygame</em> and <em>Raylib (C)</em>.
          </li>
          <li className="mb-2">
            Learned Django frameworkd, and core data sciene concepts and tools
            like Numpy and Pandas <strong>Coursera</strong>.
          </li>
          <li className="mb-2">
            Developed an AI assistant with Python and OpenAI's Davinci engine.
          </li>
          <li className="mb-2">
            Wrote tutorials about Python and game development.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/screenshots/smartone.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/screenshots/zombieland.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <div className="col-span-2 grid grid-cols-3 place-items-center gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square w-full items-center justify-center rounded-lg bg-indigo-400/20"
              >
                <p className="text-center font-bold text-white/80 sm:text-xl">
                  Project
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];
