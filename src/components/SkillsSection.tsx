import { useTranslation } from "react-i18next";


// TODO refactor skill section
function SkillsSection({
  skillsSectionRef,
}: {
  skillsSectionRef: React.RefObject<HTMLElement>;
}) {
  const {t} = useTranslation();
  return (
    <section ref={skillsSectionRef} className="h-screen scroll-mt-16 relative">
      <h1 className="flex justify-center items-center text-4xl text-customPink font-regular font-serif tracking-wide pt-4 truncate w-full">
        {t("SkillsSection.title")}
      </h1>
      <article className="w-full h-5/6 flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-5 p-5 place-items-center w-[45em] h-[20em]">
        </div>
      </article>
    </section>
  );
}

export default SkillsSection;
