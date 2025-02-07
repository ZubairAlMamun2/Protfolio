import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md p-4 sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl text-white font-bold">ZUBAIR AL MAMUN</h1>
        <div className="md:hidden">
          <button  onClick={toggleMenu} className="focus:outline-none text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden text-white md:flex  space-x-6 ">
          <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skils" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#pro" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gray-900  text-white shadow-md absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-4"
          >
            <li><a href="#hero" className="hover:text-gray-400" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a></li>
            <li><a href="#skils" className="hover:text-gray-400" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#pro" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default NavBar