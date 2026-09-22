import { useEffect, useRef } from "react";
import Matter from "matter-js";

const tools = ["React", "JavaScript", "CSS", "WordPress", "Shopify", "Figma", "Tailwind", "AI"];

function spriteFor(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" rx="24" fill="#0E2A5E"/><circle cx="48" cy="48" r="34" fill="none" stroke="#F0B429" stroke-width="3"/><text x="48" y="56" fill="#F7F7F2" font-family="Arial,sans-serif" font-size="22" font-weight="700" text-anchor="middle">${label.slice(0, 2).toUpperCase()}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function Playground() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;
    let started = false;
    let engine;
    let render;
    let runner;
    let mouseConstraint;

    const start = () => {
      if (started) return;
      started = true;
      const width = container.clientWidth;
      const height = container.clientHeight;
      engine = Matter.Engine.create({ gravity: { x: 0, y: 0.9 } });
      engine.positionIterations = 6;
      engine.velocityIterations = 4;
      render = Matter.Render.create({ element: container, canvas, engine, options: { width, height, wireframes: false, background: "transparent", pixelRatio: Math.min(window.devicePixelRatio || 1, 2) } });
      const wall = 28;
      const walls = [
        Matter.Bodies.rectangle(width / 2, height + wall / 2, width, wall, { isStatic: true, render: { visible: false } }),
        Matter.Bodies.rectangle(-wall / 2, height / 2, wall, height, { isStatic: true, render: { visible: false } }),
        Matter.Bodies.rectangle(width + wall / 2, height / 2, wall, height, { isStatic: true, render: { visible: false } }),
      ];
      const bodies = tools.map((label, index) => Matter.Bodies.rectangle(75 + (index % 4) * ((width - 110) / 3), -70 - Math.floor(index / 4) * 120, 82, 82, { chamfer: { radius: 18 }, restitution: 0.35, friction: 0.7, density: 0.002, render: { sprite: { texture: spriteFor(label), xScale: 0.86, yScale: 0.86 } } }));
      Matter.Composite.add(engine.world, [...walls, ...bodies]);
      mouseConstraint = Matter.MouseConstraint.create(engine, { mouse: Matter.Mouse.create(canvas), constraint: { stiffness: 0.18, render: { visible: false } } });
      Matter.Composite.add(engine.world, mouseConstraint);
      render.canvas.setAttribute("aria-label", "Interactive physics playground with draggable technology icons");
      Matter.Render.run(render);
      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
    };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { start(); observer.disconnect(); } }, { threshold: 0.22 });
    observer.observe(container);
    return () => {
      observer.disconnect();
      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (engine) Matter.Engine.clear(engine);
      if (mouseConstraint) Matter.Composite.remove(engine.world, mouseConstraint);
      if (render?.canvas) render.canvas.remove();
    };
  }, []);

  return <section className="playground-section reveal" id="playground" ref={containerRef}>
    <div className="section-heading"><p className="eyebrow">A little chaos</p><h2>Playground</h2><p>Drag them around — go ahead, I dare you.</p></div>
    <div className="playground-canvas-wrap"><canvas ref={canvasRef} /></div>
  </section>;
}

Playground.displayName = "Playground";
