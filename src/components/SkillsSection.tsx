import { useTranslation } from "react-i18next";
import LogoTools from "./LogoTools";


// TODO refactor skill section
function SkillsSection({
  skillsSectionRef,
}: {
  skillsSectionRef: React.RefObject<HTMLElement>;
}) {
  const {t} = useTranslation();
  return (
    <section ref={skillsSectionRef} className="h-screen scroll-mt-16 relative">
      <div className="background3" />
      <h1 className="flex justify-center items-center text-4xl font-extrabold font-serif tracking-wide pt-4 truncate w-full">
        {t("SkillsSection.title")}
      </h1>
      <article className="w-full h-5/6 flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-5 p-5 place-items-center w-[45em] h-[20em]">
          <div className="row-start-1 col-start-1">
            <LogoTools
              url="/interface.svg"
              alt="React"
              open={true}
              side="top"
              description={t.rich("SkillsSection.descriptionReact", {
                ul: (chunks) => <ul className='list-disc pl-5'>{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>,
              })}
              />
          </div>
          <div className="row-start-2 col-start-2">
            <LogoTools
              url="/api.svg"
              alt="Node.js"
              open={false}
              side="bottom"
              description={t.rich("SkillsSection.descriptionReact", {
                ul: (chunks) => <ul>{chunks}</ul>,
                li: (chunks) => <li>{chunks}</li>,
              })}
              />
          </div>
          <div className="row-start-1 col-start-3">
            <LogoTools
              url="/responsive.svg"
              alt={t("SkillsSection.altLogo")}
              open={false}
              side="top"
              description={t.rich("SkillsSection.descriptionReact")}
              />
          </div>
          <div className="row-start-2 col-start-4">
            <LogoTools
              url="/seo.svg"
              alt="SEO"
              open={false}
              side="bottom"
              description={t.rich("SkillsSection.descriptionReact")}
              />
          </div>
        </div>
      </article>
    </section>
  );
}

export default SkillsSection;
