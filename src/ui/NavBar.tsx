import { useEffect, useState } from "react";
import { IoMenu, IoMoon, IoPizza, IoSunny } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("pizza-theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("pizza-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
  const ulVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="site-nav fixed top-0 start-0 end-0 z-50 font-bold">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2 sm:py-3">
        <ul
          className="hidden items-center gap-5 sm:flex lg:gap-7"
        >
          <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/AboutUs" className={navLinkClass}>About Us</NavLink></li>
          <li><NavLink to="/Menu" className={navLinkClass}>Menu</NavLink></li>
          <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>
        <Link to="/" className="brand-mark flex items-center gap-2 text-center uppercase">
          <img src={Logo} alt="" className="w-11 sm:w-14" />
          <span className="text-sm sm:text-xl lg:text-2xl">La Pizza Alforno</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setIsDarkMode((dark) => !dark)}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
          >
            {isDarkMode ? <IoSunny /> : <IoMoon />}
          </button>
          <NavLink to="/cart" className="nav-link hidden items-center gap-2 sm:flex">
            <IoPizza className="text-xl" />
            <span>Cart</span>
          </NavLink>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="nav-link text-3xl focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <IoMenu />
        </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu px-4 py-4 sm:hidden">
          <motion.ul
            initial="hidden"
            animate="visible"
            className="space-y-1 text-center"
            variants={ulVariants}
          >
            {[
              ["Home", "/"],
              ["About Us", "/AboutUs"],
              ["Menu", "/Menu"],
              ["Contact", "/Contact"],
              ["Cart", "/cart"],
            ].map(([label, path]) => (
              <motion.li
                key={path}
                variants={ulVariants}
                className="mobile-menu-item"
              >
                <Link to={path} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </nav>
  );
}
