export default function ExperienceList() {
  const experiences = [
    {
      role: "FrontEnd Developer",
      company: "PT PMA MADEINDONESIA",
      description:
        "Create and maintain responsive websites using WordPress custom or builders like Elementor, Divi, WP-Bakery. Familiar with popular plugins such as ACF, WPML, WooCommerce, B2B King, and payment integrations. Collaborated with Project Managers, UI/UX, QA, and Backend teams to ensure smooth delivery. Optimized web performance, load speed, and SEO following best practices. Assisted team in standardization and mentoring new frontend developers.",
    },
    {
      role: "Junior Web Developer",
      company: "PT Javan Cipta Solusi",
      description:
        "Worked on developing the CPL (Capaian Pembelajaran Lulusan) system for Universitas Islam Indonesia using Laravel 5. Assisted in fixing bugs and improving features on several client projects. Supported QA processes by applying basic testing methods, including positive and negative testing scenarios.",
    },
  ];

  return (
    <div className="flex flex-col space-y-12 border-t border-gray-900 pt-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-black pb-8"
        >
          {/* Left: Role & Company */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-gray-500">{exp.company}</p>
          </div>

          {/* Right: Description */}
          <div className="md:w-2/3 text-gray-700">{exp.description}</div>
        </div>
      ))}
    </div>
  );
}
