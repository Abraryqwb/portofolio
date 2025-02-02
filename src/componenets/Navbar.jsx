
import Logo from "../assets/Logo.svg"

const Navbar = () => {
  return (
    <header className="bg-gray-300">
      
   <nav className="bg-black text-white  flex items-center justify-between h-[60px]">
   <img src={Logo} alt="Logo" />
    <ul className="space-x-10">
        <a href="#home">Home</a>
        <a href="#about">AboutMe</a>
        <a href="#skills">Skills</a>
        <a href="#contact">ContactMe</a>
    </ul>
   </nav>
   </header>
  );
};

export default Navbar;