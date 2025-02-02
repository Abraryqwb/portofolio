import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-16 max-w-3xl w-full">
        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Hi, I'm Abrar
        </h1>
        <p className="text-lg md:text-xl text-center mb-6 leading-relaxed">
          I'm a passionate developer who loves creating web applications. I specialize in JavaScript, React, and building modern, scalable web solutions.
        </p>
        <p className="text-lg md:text-xl text-center leading-relaxed">
          Outside of coding, I enjoy outdoor adventures, reading tech articles, and learning new programming languages to expand my skill set.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
