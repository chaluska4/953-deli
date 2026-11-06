import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ACCESSIBILITY_URL,
  ORDER_URL,
  PRIVACY_URL,
  REWARDS_URL,
  TERMS_URL,
} from "../data/site.js";

const orderClass =
  "inline-flex items-center justify-center rounded-md bg-gold px-3 py-2.5 text-center text-base font-bold whitespace-nowrap text-ink no-underline hover:bg-[#efc75d]";

function External({ href, className, children, onClick }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}

const primary = [
  { label: "Menu", to: "/menu" },
  { label: "Catering", to: "/catering" },
  { label: "Our Story", to: "/story" },
  { label: "Gift Cards", to: "/gift-cards" },
  { label: "We’re Hiring", to: "/careers" },
];

function NavAnchor({ item, className, onClick }) {
  if (item.href) {
    return (
      <External href={item.href} className={className} onClick={onClick}>
        {item.label}
      </External>
    );
  }
  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

export function SiteLayout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const closeRef = useRef(null);
  const menuButtonRef = useRef(null);
  const moreId = useId();

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    if (!header) return undefined;
    const apply = () => {
      document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  const menuWasOpen = useRef(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    menuWasOpen.current = true;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || !menuWasOpen.current) return;
    menuWasOpen.current = false;
    menuButtonRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const onPointer = (event) => {
      if (!moreRef.current?.contains(event.target)) setMoreOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkClass = "font-bold whitespace-nowrap text-ink no-underline";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header data-header className="sticky top-0 z-40 border-b border-line bg-cream">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 min-[840px]:gap-5 min-[840px]:px-6">
          <Link to="/" className="shrink-0" aria-label="953 Deli">
            <img src="/images/logo-a.png" alt="" className="h-11 w-auto min-[840px]:h-12" />
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-4 min-[840px]:flex xl:gap-5">
            {primary.map((item) => (
              <NavAnchor key={item.label} item={item} className={linkClass} />
            ))}
            <div
              ref={moreRef}
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => {
                if (!moreRef.current?.contains(document.activeElement)) setMoreOpen(false);
              }}
            >
              <button
                type="button"
                className={`${linkClass} bg-transparent`}
                aria-expanded={moreOpen}
                aria-controls={moreId}
                onClick={(event) => {
                  // A pointer click follows mouseenter, which already opened the menu.
                  // Toggling would close it. Keyboard activation has detail 0 and still toggles.
                  if (event.detail === 0) setMoreOpen((open) => !open);
                  else setMoreOpen(true);
                }}
              >
                More
              </button>
              <div
                id={moreId}
                role="menu"
                hidden={!moreOpen}
                className="absolute top-full left-0 z-50 mt-2 min-w-52 border border-line bg-paper p-2 shadow-sm"
              >
                <Link role="menuitem" to="/press" className="block px-3 py-2 font-bold text-ink no-underline hover:bg-cream">
                  Press & Accolades
                </Link>
              </div>
            </div>
          </nav>
          <External href={ORDER_URL} className={`${orderClass} ml-auto px-3 py-2 min-[840px]:px-4`}>
            Order Online
          </External>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-transparent font-bold min-[840px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true" className="text-xl leading-none">
              ☰
            </span>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-50 overflow-y-auto bg-cream">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <p className="font-display text-2xl font-semibold">953 Deli</p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink bg-transparent text-xl"
              onClick={() => setMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
            {primary.map((item) => (
              <NavAnchor
                key={item.label}
                item={item}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-4 text-2xl font-bold text-ink no-underline"
              />
            ))}
            <Link to="/press" onClick={() => setMenuOpen(false)} className="border-b border-line py-4 text-2xl font-bold text-ink no-underline">
              Press & Accolades
            </Link>
            <Link to="/#visit" onClick={() => setMenuOpen(false)} className="border-b border-line py-4 text-2xl font-bold text-ink no-underline">
              Visit Us
            </Link>
            <External href={REWARDS_URL} className="border-b border-line py-4 text-2xl font-bold text-ink no-underline">
              Rewards
            </External>
            <External href={ORDER_URL} className={`${orderClass} mt-6 justify-center py-4 text-xl`}>
              Order Online
            </External>
          </nav>
        </div>
      ) : null}

      <main id="main">{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="font-display text-2xl font-semibold">953 Deli</p>
          <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 font-bold sm:grid-cols-3">
            <Link to="/menu" className="text-ink no-underline">Menu</Link>
            <Link to="/catering" className="text-ink no-underline">Catering</Link>
            <Link to="/story" className="text-ink no-underline">Our Story</Link>
            <Link to="/gift-cards" className="text-ink no-underline">Gift Cards</Link>
            <Link to="/gift-cards#balance" className="text-ink no-underline">Check balance</Link>
            <Link to="/careers" className="text-ink no-underline">We’re Hiring</Link>
            <Link to="/press" className="text-ink no-underline">Press & Accolades</Link>
            <External href={REWARDS_URL} className="text-ink no-underline">Rewards</External>
            <External href={ORDER_URL} className="text-ink no-underline">Order Online</External>
            <Link to="/#visit" className="text-ink no-underline">Visit Us</Link>
            <External href={PRIVACY_URL} className="text-ink no-underline">Privacy</External>
            <External href={TERMS_URL} className="text-ink no-underline">Terms</External>
            <External href={ACCESSIBILITY_URL} className="text-ink no-underline">Accessibility</External>
          </nav>
          <p className="mt-6 text-sm">© 2026 953 Deli. Pickup and payment use the existing checkout.</p>
        </div>
      </footer>
    </>
  );
}
