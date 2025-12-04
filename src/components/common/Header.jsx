// Header.jsx
import { useState } from "react";
import menuItems from "../../data/menu.json";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ToggleButton from "./ToggleButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-[#e5ecf6]">
      <div className="container max-w-[1180px] mx-auto flex items-center justify-between py-[8px] px-[16px]">
        <a
          href="/"
          className="text-xl font-bold text-black flex items-center gap-2"
        >
          <span class="inline-block w-3 h-3 bg-[#295e90] rounded-sm"></span>
          Simsha.
        </a>

        <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

        {/* Desktop Menu */}
        <Menu items={menuItems} />

        {/* popup mobile menu */}
        <MobileMenu items={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
