import { useTranslation } from "react-i18next";

// TODO Refactor section
function ProjectsSection({
  projectsSectionRef,
}: {
  projectsSectionRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section
      ref={projectsSectionRef}
      className="h-screen scroll-mt-16 flex flex-col justify-around items-center"
    >
      <div className="w-full">
        <h1 className="flex justify-center items-center text-4xl font-regular font-serif text-customPink tracking-wide">
          {t("ProjectsSection.title")}
        </h1>
        <p className="text-center leading-snug [&:not(:first-child)]:mt-6 text-[26px] font-sans font-semibold tracking-wider">
          {t("ProjectsSection.description1")}
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-1/2 md:h-3/4">
        {/* <CarouselPlugin /> */}
      </div>
    </section>
  );
}

export default ProjectsSection;
