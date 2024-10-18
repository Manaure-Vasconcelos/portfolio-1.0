import { useTranslation } from "react-i18next";
import { CarouselPlugin } from "./carouselProjects";

function ProjectsSection({
  projectsSectionRef,
}: {
  projectsSectionRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section
      ref={projectsSectionRef}
      className="h-screen scroll-mt-16 flex flex-col justify-between items-center relative"
    >
      <div className="h-1/3 w-full md:w-full pt-3">
        <h1 className="flex justify-center items-center text-4xl font-extrabold font-serif tracking-wide">
          {t("ProjectsSection.title")}
        </h1>
        <p className="leading-snug [&:not(:first-child)]:mt-6 text-[23px] font-sans tracking-wider">
          {t("ProjectsSection.description1")}
        </p>
        <p className="leading-snug [&:not(:first-child)]:mt-5 text-[23px] font-sans tracking-wider">
          {t("ProjectsSection.description2")}
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-1/2 md:h-3/4">
        <CarouselPlugin />
      </div>
    </section>
  );
}

export default ProjectsSection;
