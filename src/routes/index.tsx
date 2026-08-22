import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  ExternalLink,
  Trophy,
  BadgeCheck,
  GraduationCap,
  Terminal,
  Database,
  Cpu,
  Wrench,
  Server,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";

const EMAIL = "sahilsonekar@example.com";
const GITHUB = "https://github.com/SahilSonekar";
const LINKEDIN = "https://www.linkedin.com/in/sahil-sonekar-837a7725b/";
const SCORECARD_URL = "https://drive.google.com/file/d/1hu0qES14_hCWrrHcUACSwcUcVUPKP1_4/view?usp=sharing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahil Sonekar — Full-Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sahil Sonekar, full-stack developer and MCA student at VJTI Mumbai, building AI-powered web applications with Django, LLMs, and modern web stacks.",
      },
      { property: "og:title", content: "Sahil Sonekar — Full-Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack developer building AI-powered web applications. Django, REST APIs, LLM agents, and production-style systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12">
      <span className="font-mono text-[11px] tracking-[0.25em] text-primary/80 uppercase">
        {index}
      </span>
      <div className="mt-3 flex items-center gap-5">
        <h2 className="text-gradient text-3xl font-bold sm:text-4xl">{title}</h2>
        <span className="rule-gradient h-px flex-1" />
      </div>
    </div>
  );
}

const SKILLS = [
  { label: "Languages", icon: Terminal, items: ["Python", "JavaScript", "SQL"] },
  { label: "Backend & Web", icon: Server, items: ["Django", "Django REST Framework"] },
  { label: "AI & LLM", icon: Cpu, items: ["Large Language Models", "Agentic Function Calling"] },
  { label: "Databases", icon: Database, items: ["MySQL"] },
  { label: "Tools & Platforms", icon: Wrench, items: ["Git", "GitHub", "Docker", "PyCharm"] },
];

const PROJECTS = [
  {
    name: "Nexus AI",
    blurb:
      "AI-powered customer support platform built with Django and Google Gemini. Uses agentic function calling to handle live order, refund, and delivery queries via Django ORM, plus direct context injection for company policy and FAQ answers. Supports multi-turn conversations with memory, and a responsive JavaScript chat interface backed by MySQL.",
    tech: ["Python", "Django", "Google Gemini", "MySQL", "JavaScript", "Bootstrap 5"],
    repo: "https://github.com/SahilSonekar/NexusAI",
  },
  {
    name: "Frenzo",
    blurb:
      "Full-stack social media platform with secure JWT authentication, user profiles, friend requests, and role-based authorization. REST APIs for posts, comments, and profile management, plus AI-powered NSFW image moderation to keep content safe. Fully containerized with Docker Compose.",
    tech: ["Django REST Framework", "Vue.js", "Pinia", "PostgreSQL", "Docker"],
    repo: "https://github.com/SahilSonekar/Frenzo",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="aurora relative overflow-hidden px-6 pt-40 pb-28 sm:pt-48 sm:pb-36">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Available for internships &amp; collaboration
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-gradient mt-6 text-5xl leading-[1.02] font-bold tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Sahil Sonekar
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-lg text-foreground/85 sm:text-xl">
              Full-Stack Developer <span className="text-primary">|</span> Building AI-Powered Web
              Applications
            </p>
          </Reveal>
          <Reveal delay={210}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              MCA student at VJTI Mumbai, passionate about backend engineering and integrating LLMs
              into real products.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex gap-3">
              {[
                { href: GITHUB, icon: Github, label: "GitHub" },
                { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-border bg-surface/60 p-3 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-accent-soft hover:text-primary"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="01" title="About" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  I enjoy building full-stack applications that fold AI and LLM capabilities into
                  practical, production-style systems — not demos. Most of my work sits where
                  backend architecture meets model integration: designing data models, writing REST
                  APIs, and wiring language models into flows that actually resolve a user's request.
                </p>
                <p>
                  I have hands-on experience across frontend, backend, and AI integration, and I
                  care about the unglamorous parts: schema design, auth, containerization, and
                  making things reliable.
                </p>
                <p className="text-foreground">
                  Scored{" "}
                  <span className="font-mono text-primary">98.92 percentile in MAH MCA CET 2025</span>
                  , a state-level entrance exam.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-4">
                {[
                  {
                    school: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
                    degree: "Master of Computer Applications (MCA)",
                    when: "Aug 2025 — Present",
                  },
                  {
                    school: "Tirpude Institute of Education Management, Nagpur",
                    degree: "B.Com in Computer Applications (BCCA)",
                    when: "Aug 2022 — May 2025",
                  },
                ].map((e) => (
                  <li
                    key={e.school}
                    className="card-surface p-6"
                  >
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                      <div>
                        <p className="text-sm font-semibold">{e.degree}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                        <p className="mt-2 font-mono text-xs text-primary">{e.when}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="02" title="Skills" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((group, i) => (
              <Reveal key={group.label} delay={i * 70}>
                <div className="card-surface group h-full p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-lg border border-border bg-accent-soft p-1.5 text-primary transition-transform duration-300 group-hover:scale-105">
                      <group.icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {group.label}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="pill px-3 py-1.5 text-xs text-foreground/90">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="03" title="Projects" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} as="article" className="h-full">
                <div className="card-surface group flex h-full flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold sm:text-2xl">{p.name}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-surface-elevated px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:border-primary/60 hover:bg-accent-soft hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" /> View on GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="04" title="Leadership" />
          </Reveal>
          <ol className="relative space-y-8 border-l border-border pl-8">
            {[
              {
                role: "Founder & Captain, Junior FC",
                detail: "Led the team to the semi-finals of the Jhund Football Tournament.",
              },
              {
                role: "Captain, College Football Team",
                detail:
                  "Coordinated team strategy and led the team to victory in an inter-college tournament.",
              },
            ].map((l, i) => (
              <Reveal key={l.role} delay={i * 90} as="li" className="group relative">
                <span className="absolute top-2 -left-[37px] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/15 transition-all duration-300 group-hover:ring-8" />
                <p className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                  {l.role}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {l.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="05" title="Achievements & Certifications" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Achievements",
                icon: Trophy,
                items: [
                  {
                    text: "MAH MCA CET 2025 — 98.92 percentile (state-level entrance exam)",
                    link: {
                      href: SCORECARD_URL,
                      label: "View scorecard",
                    },
                  },
                  "Inter-College Football Tournament Champions (as team captain)",
                ],
              },
              {
                title: "Certifications",
                icon: BadgeCheck,
                items: ["Python Programming", "Django & Django REST Framework (DRF)"],
              },
            ].map((block, i) => (
              <Reveal key={block.title} delay={i * 90}>
                <div className="card-surface h-full p-7">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-lg border border-border bg-accent-soft p-1.5 text-primary">
                      <block.icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {block.items.map((item) => {
                      const { text, link } =
                        typeof item === "string" ? { text: item, link: undefined } : item;
                      return (
                        <li key={text} className="flex gap-3 text-sm text-foreground/90">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span className="flex-1">
                            {text}
                            {link && (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                              >
                                <FileText className="h-3 w-3" />
                                {link.label}
                                <ExternalLink className="h-2.5 w-2.5" />
                              </a>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="aurora border-t border-border/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading index="06" title="Let's Connect" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  Open to internships, freelance work, and collaborating on anything that mixes
                  solid backend engineering with AI. The fastest way to reach me is email.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:max-w-sm">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <Mail className="h-4 w-4" /> {EMAIL}
                  </a>
                  <div className="flex gap-3">
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-3 text-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-3 text-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="card-surface space-y-5 p-7 hover:translate-y-0"
              >
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary/60"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary/60"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full border border-primary/50 bg-accent-soft px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Send message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          <p className="text-sm">
            Built by <span className="font-semibold text-primary">Sahil Sonekar</span>
          </p>
          <div className="flex gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Sahil Sonekar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
