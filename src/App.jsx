import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Footer from "./components/common/Footer";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("simsha-theme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("simsha-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Header theme={theme} onThemeChange={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main>
        <Hero />
        <section className="about-section reveal" id="about">
          <div className="section-heading"><p className="eyebrow">A little about me</p><h2>Building with curiosity.</h2></div>
          <div className="about-grid"><p>I&apos;m Owen, a web developer who enjoys turning thoughtful ideas into fast, friendly digital experiences. I care about clean interfaces, useful details, and making the web feel a little more human.</p><div className="skill-list"><span>React</span><span>JavaScript</span><span>SCSS</span><span>Tailwind CSS</span><span>WordPress</span><span>Shopify</span></div></div>
        </section>
        <Projects />
        <section className="exploring-section reveal" id="exploring"><div className="section-heading"><p className="eyebrow">What&apos;s next</p><h2>Currently Exploring</h2><p>Always learning, always shipping. These are the things on my desk right now.</p></div><div className="exploring-grid"><article><span>01</span><h3>Deepening React</h3><p>Composing more thoughtful, resilient interfaces with React.</p></article><article><span>02</span><h3>Learning TypeScript</h3><p>Adding confidence and clarity to the code behind the UI.</p></article><article><span>03</span><h3>Exploring AI tools</h3><p>Finding practical ways for AI to make creative work better.</p></article></div></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

