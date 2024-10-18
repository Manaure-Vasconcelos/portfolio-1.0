import { useTranslation } from "react-i18next";

function HomeSection({
  homeSectionRef,
}: {
  homeSectionRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation()
  return (
    <section
      ref={homeSectionRef}
      className="flex flex-col justify-center items-center h-screen scroll-mt-16 relative"
    >
      <div className="w-full justify-start">
        <p className="text-[1.5rem] font-semibold font-sans text-customPink inline-block ">
          {t("HomeSection.p1")}
        </p>
        <h1 className="scroll-m-15 text-[5.5rem] font-extrabold font-serif tracking-wide lg:text-[6rem] mt-[-0.5rem] leading-snug">
          {t("HomeSection.h1")}
        </h1>
        <p className="leading-snug text-[2.5em] [&:not(:first-child)]:mt-6 font-sans ">
          {t("HomeSection.p2")}
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
