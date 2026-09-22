import { useEffect, useState } from "react";
import ButtonLink from "../common/ButtonLink";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => { const onScroll = () => setOffset(window.scrollY * 0.16); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <section className="hero" style={{ "--parallax": `${offset}px` }}><div className="hero-glow" /><div className="hero-inner"><p className="eyebrow">Web developer · Independent creative</p><h1>Hi, I&apos;m <span>Owen.</span><br />I make the web<br />feel more <em>human.</em></h1><p className="hero-intro">I build thoughtful, responsive experiences with a sharp eye for detail and a curiosity for what&apos;s next.</p><div className="hero-actions"><ButtonLink variant="primary" href="mailto:owenprasimsha84@gmail.com">Get in Touch <span>↗</span></ButtonLink><ButtonLink variant="secondary" href="/files/owen-prasimsha.pdf" download="Owen-Prasimsha-CV.pdf">Download CV <span>↓</span></ButtonLink></div></div></section>;
}
