const Skills = () => {
    const skillsList = [
      'JavaScript',
      'Node.js',
      'React',
      'MongoDB',
      'Git',
      'Figma',
      'HTML',
      'CSS',
      'TailwindCSS'
    ];
  
    return (
      <div id="skills" className="max-w-4xl mx-auto p-6 h-[100vh] bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center text-gray-700 font-medium hover:bg-blue-100 transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Skills;
  