import AboutMe from "../sections/AboutMe"
import ContactMe from "../sections/ContactMe"
import Hero from "../sections/Hero"
import Skills from "../sections/skills";

const Home = () => {
  return (
    <main>
        <Hero/>
        <AboutMe/>
        <Skills />
        <ContactMe />
    </main>
  );
};

export default Home;
