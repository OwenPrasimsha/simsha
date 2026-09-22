import { useEffect, useRef } from "react";
import Matter from "matter-js";

const tools = ["React", "JavaScript", "CSS", "WordPress", "Shopify", "Figma", "Tailwind", "AI", "Git", "Node"];

function spriteFor(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" rx="24" fill="#0E2A5E"/><circle cx="48" cy="48" r="34" fill="none" stroke="#F0B429" stroke-width="3"/><text x="48" y="56" fill="#F7F7F2" font-family="Arial,sans-serif" font-size="22" font-weight="700" text-anchor="middle">${label.slice(0, 2).toUpperCase()}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function Playground() {
  const sectionRef = useRef(null);
  const canvasWrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = canvasWrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    let engine;
    let render;
    let runner;
    let mouseConstraint;
    let walls = [];
    let resizeObserver;

    const syncBounds = () => {
      if (!engine || !render) return;
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      const wall = 28;
      Matter.Composite.remove(engine.world, walls);
      walls = [
        Matter.Bodies.rectangle(width / 2, height + wall / 2, width, wall, { isStatic: true, render: { visible: false } }),
        Matter.Bodies.rectangle(-wall / 2, height / 2, wall, height, { isStatic: true, render: { visible: false } }),
        Matter.Bodies.rectangle(width + wall / 2, height / 2, wall, height, { isStatic: true, render: { visible: false } }),
      ];
      Matter.Composite.add(engine.world, walls);
      Matter.Render.setSize(render, width, height);
    };

    const start = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      engine = Matter.Engine.create({ gravity: { x: 0, y: 0.9 } });
      engine.positionIterations = 6;
      engine.velocityIterations = 4;
      render = Matter.Render.create({ element: wrap, canvas, engine, options: { width, height, wireframes: false, background: "transparent", pixelRatio: Math.min(window.devicePixelRatio || 1, 2) } });
      syncBounds();
      const columns = Math.min(5, tools.length);
      const horizontalGap = Math.max(18, (width - columns * 82) / (columns + 1));
      const bodies = tools.map((label, index) => Matter.Bodies.rectangle(horizontalGap + 41 + (index % columns) * (82 + horizontalGap), 66 + Math.floor(index / columns) * 104, 82, 82, { chamfer: { radius: 18 }, restitution: 0.35, friction: 0.7, density: 0.002, render: { sprite: { texture: spriteFor(label), xScale: 0.86, yScale: 0.86 } } }));
      Matter.Composite.add(engine.world, bodies);
      mouseConstraint = Matter.MouseConstraint.create(engine, { mouse: Matter.Mouse.create(canvas), constraint: { stiffness: 0.18, render: { visible: false } } });
      Matter.Composite.add(engine.world, mouseConstraint);
      render.canvas.setAttribute("aria-label", "Interactive physics playground with draggable technology icons");
      Matter.Render.run(render);
      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      resizeObserver = new ResizeObserver(syncBounds);
      resizeObserver.observe(wrap);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    }, { threshold: 0.22 });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      if (render) Matter.Render.stop(render);
      if (runner) Matter.Runner.stop(runner);
      if (mouseConstraint) Matter.Composite.remove(engine.world, mouseConstraint);
      if (engine) Matter.Engine.clear(engine);
      if (render?.canvas) render.canvas.remove();
    };
  }, []);

  return <section className="playground-section reveal" id="playground" ref={sectionRef}>
    <div className="section-heading"><p className="eyebrow">A little chaos</p><h2>Playground</h2><p>Drag them around and see what happens.</p></div>
    <div className="playground-canvas-wrap" ref={canvasWrapRef}><canvas ref={canvasRef} /></div>
  </section>;
}

Playground.displayName = "Playground";
