import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = SECTIONS[0]!.id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= marker) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          sahil<span className="text-primary">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                active === s.id
                  ? "bg-accent-soft text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-3 backdrop-blur-xl md:hidden">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-2 py-2 text-sm",
                active === s.id ? "text-primary" : "text-muted-foreground",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
