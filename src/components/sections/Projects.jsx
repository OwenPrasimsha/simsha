import CardProjects from "../common/CardProjects";

export default function Projects() {
  const projects = [
    {
      title: "By Hannah",
      description:
        "A new visual identity on a modern one-page website for By-Hannah. It was designed in Figma and implemented as a customized WordPress site. A clear, emotional presence that perfectly reflects Hannah's coaching style and identity.",
      image: "/files/by-hannah-cover.webp",
      link: "https://by-hannah.de/",
      tags: ["WordPress", "CSS", "JavaScript", "PHP", "Animation"],
    },
    {
      title: "Luz Dental Care",
      description:
        "Developed an online shop for Luz Dental Care, implementing product catalog, checkout with WooCommerce payment, Elementor, and multilingual layout for international customers.",
      image: "/files/luz-dental-care-cover.webp",
      link: "https://luzdentalcare.com/",
      tags: [
        "WordPress",
        "Elementor",
        "ACF",
        "WooCommerce",
        "PayPal",
        "Multi Language",
      ],
    },
    {
      title: "Skincosmedic",
      description:
        "Developed a Shopify e-commerce website, setting up gift card products, customizing related emails, creating new page layouts including About Us, new header, and product cards, and integrating Brevo email marketing for client campaigns.",
      image: "/files/skincosmedic-cover.webp",
      link: "https://skincosmedic.ch/",
      tags: [
        "Shopify",
        "Liquid",
        "E-commerce",
        "Gift Card",
        "CSS",
        "JavaScript",
        "Email Marketing",
        "Brevo",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="pt-0 md:pt-[80px] lg:pt-[120px] px-4 max-w-[1180px] mx-auto"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>

      <div className="overflow-hidden md:overflow-auto lg:overflow-hidden m-0 p-0 md:pl-[30px] md:pb-[30px] md:ml-[-30px] md:mb-[-30px]">
        <div className="grid md:grid-cols-3 w-full md:w-[135%] lg:w-full gap-8">
          {projects.map((project, index) => (
            <CardProjects project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
