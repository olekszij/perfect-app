import MenuLogo from "./MenuLogo";
import HamburgerButton from "./HamburgerButton";
import MenuItems from "./MenuItems";
import LanguageSelector from "./LanguageSelector";
import { useState, useEffect } from "react";
import MenuForm from "./MenuForm";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".menu-container");
      const button = document.querySelector(".hamburger-button");

      if (!menu || !button) {
        return;
      }

      if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-30 h-[72px]">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between h-full gap-2">
        <MenuLogo />

        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <MenuForm />
          <LanguageSelector />
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && (
        <div className="menu-container absolute w-full bg-white shadow-lg py-6">
          <MenuItems onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Menu;
