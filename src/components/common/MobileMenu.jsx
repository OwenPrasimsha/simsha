import Menu from "./Menu";

export default function MobileMenu({ items, isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-[#295e90] text-white flex flex-col items-center justify-start pt-[120px] text-center z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Menu items={items} variant="mobile" onClick={() => setIsOpen(false)} />
    </div>
  );
}
