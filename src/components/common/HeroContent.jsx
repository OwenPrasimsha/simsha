import ButtonLink from "./ButtonLink";

export default function HeroContent() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Hello
      </h1>
      <h2 className="text-xl text-gray-900 mb-6">Here' who I am & what I do</h2>
      <div className="flex felx-wrap gap-4 mb-6">
        <ButtonLink
          variant="primary"
          href="https://wa.me/1234567890"
          target="_blank"
        >
          Get in Touch
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          href="/files/owen-prasimsha.pdf"
          download="Owen-Prasimsha-CV.pdf"
          target="_blank"
        >
          Download CV
        </ButtonLink>
      </div>
      <p className="text-gray-700">
        I specialize in creating responsive, interactive, and clean web
        applications using modern tools like React JS, JavaScript, SCSS,
        Tailwind CSS, CMS WordPress, Shopify. Let's build something amazing
        together!
      </p>
    </div>
  );
}
