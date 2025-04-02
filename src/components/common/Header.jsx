import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from "../common/Button"
import "../../../src/assets/css/main.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`header shadow-[inset_0px_4px_94px_0px_#565656] h-[91px] flex items-center fixed top-0 right-0 left-0 z-50 px-5 w-full transition-colors duration-300 ${ isScrolled ? 'bg-white/100 shadow-[inset_0px_4px_94px_0px_#fff] border-b border-black/10' : 'bg-white/57'}`}>
      <nav className="container flex justify-between items-center">
        <Link to="/">
          <img src="/images/logo.svg" className="w-20" alt="LEAP Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-sm font-medium font-poppins ${
              isActive 
                ? 'text-[#78A07C]'
                : isScrolled 
                  ? 'text-black'
                  : 'text-white'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `text-sm font-medium font-poppins ${
              isActive 
                ? 'text-[#78A07C]'
                : isScrolled 
                  ? 'text-black'
                  : 'text-white'
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink 
          to="/success-stories" 
          className={({ isActive }) => 
            `text-sm font-medium font-poppins ${
              isActive 
                ? 'text-[#78A07C]'
                : isScrolled 
                  ? 'text-black'
                  : 'text-white'
            }`
          }
        >
          Success Stories
        </NavLink>
          <Button />
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[91px] left-0 right-0 bg-white/95 shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="container flex flex-col gap-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium font-poppins px-4 py-2 ${isActive ? 'text-[#78A07C]' : 'text-black'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium font-poppins px-4 py-2 ${isActive ? 'text-[#78A07C]' : 'text-black'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/success-stories" 
            className={({ isActive }) => 
              `text-sm font-medium font-poppins px-4 py-2 ${isActive ? 'text-[#78A07C]' : 'text-black'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Success Stories
          </NavLink>
          <div className="px-4 py-2">
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;