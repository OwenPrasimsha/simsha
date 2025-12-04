// Menu.jsx
export default function Menu({ items, variant = "desktop", onClick }) {
  if (variant === "mobile") {
    return (
      <nav className="flex flex-col gap-6 text-2xl">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={onClick}
            className="hover:text-gray-200 transition-colors duration-300 ease-in-out"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  // default: desktop
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-8">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="hover:text-[#295E90] transition-colors duration-300 ease-in-out"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
