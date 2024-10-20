import { useTranslation } from "react-i18next";
import { FormContact } from "./FormContact";

function ContactMeSection({
  contactMeRef,
}: {
  contactMeRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section ref={contactMeRef} className="h-screen scroll-mt-16 relative">
      <h1 className="flex justify-center items-center text-4xl text-customPink font-regular font-serif tracking-wide pt-4">
        {t("ContactmeSection.title")}
      </h1>
      <p className="leading-snug [&:not(:first-child)]:mt-6 text-[26px] font-semibold font-sans tracking-wider text-center">
        {t("ContactmeSection.subtitle")}
      </p>
      <article className="h-full w-full flex justify-center items-center">
        <FormContact />
      </article>
    </section>
  );
}

export default ContactMeSection;
