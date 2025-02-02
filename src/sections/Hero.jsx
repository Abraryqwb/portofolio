import code from "../assets/code.webp";

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center text-center text-white"
    >
      
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <img 
        src={code} 
        alt="Code Image"
        className="rounded-full border-8 border-green-600 shadow-lg h-[300px] w-[300px] object-cover transform hover:scale-110 transition duration-500 ease-in-out" 
      />

      <div className="relative z-10 mt-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Abrar's Website
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          A place where innovation meets creativity.
        </p>
        <a
          href="#about"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;

