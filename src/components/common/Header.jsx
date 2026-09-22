import { useEffect, useState } from "react";
import { Menu, X } from "./icons";

const links = [["About", "#about"], ["Projects", "#projects"], ["Exploring", "#exploring"], ["Contact", "#contact"]];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  return <header className={`header ${isScrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <a className="logo" href="#top" onClick={closeMenu}><span className="logo-mark">S</span>Simsha.</a>
      <nav className="nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="mobile-controls">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={isMenuOpen}><Menu /></button>
      </div>
    </div>
    <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
      <div className="mobile-menu-panel">
        <div className="mobile-menu-top"><span>Menu</span><button className="menu-toggle" onClick={closeMenu} aria-label="Close navigation menu"><X /></button></div>
        <nav aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}<span>↗</span></a>)}</nav>
      </div>
    </div>
  </header>;
}
