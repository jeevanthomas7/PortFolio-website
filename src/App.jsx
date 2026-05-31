import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import ProjectDetail from "./components/sections/ProjectDetail";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const handleSelectProject = (project) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToProjects = () => {
    setActiveProject(null);
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onHomeLink={() => setActiveProject(null)} activeProject={activeProject} />
      <main>
        {activeProject ? (
          <>
            <ProjectDetail project={activeProject} onBack={handleBackToProjects} />
            <Skills />
            <Experience />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={handleSelectProject} />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer onHomeLink={() => setActiveProject(null)} />
    </div>
  );
}

export default App;
