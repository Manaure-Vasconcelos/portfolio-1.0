import { useRef } from "react"
import ContactMeSection from "./components/ContactMeSection"
import HomeSection from "./components/HomeSection"
import NavBar from "./components/navBar"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"

function App() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar
        onScrollToSection={scrollToSection}
        sectionRefs={{
          section1: section1Ref,
          section2: section2Ref,
          section3: section3Ref,
          section4: section4Ref,
        }}
      />
      <div className="mx-8 md:mx-24">
        <HomeSection homeSectionRef={section1Ref} />
        <ProjectsSection projectsSectionRef={section2Ref} />
        <SkillsSection skillsSectionRef={section3Ref} />
        <ContactMeSection contactMeRef={section4Ref} />
      </div>
    </>
  )
}

export default App
