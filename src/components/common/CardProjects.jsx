import ButtonLink from "./ButtonLink";

export default function CardProjects({ project, index }) {
  return (
    <div
      key={index}
      className="flex flex-col bg-[#e5ecf6] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6"
    >
      <img
        width={200}
        height={200}
        src={project.image}
        alt={project.title}
        className="w-full !h-[200px] object-cover"
      />
      <div className="pt-4 flex flex-1 flex-col gap-3 md:justify-between md:items-start">
        {/* Left: Title & Description */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {/* Right: Button / Link */}
        <ButtonLink variant="primary" href={project.link} target="_blank">
          View Project
        </ButtonLink>
      </div>
    </div>
  );
}
