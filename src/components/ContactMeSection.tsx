import { useTranslation } from "react-i18next";
import { FormContact } from "./FormContact";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
      <article className="h-full w-full flex flex-col justify-center items-center gap-2">
        <FormContact />
        <Link to={'https://wa.me/543757338769'} target="_blank">
          <Button>WhatsApp</Button>
        </Link>
        <Link to={'https://www.linkedin.com/in/manaure-vasconcelos-63b38218a/'} target="_blank">
          <Button>Linkedin</Button>
        </Link>
        <Link to={'https://github.com/Manaure-Vasconcelos'} target="_blank">
          <Button>GitHub</Button>
        </Link>
      </article>
    </section>
  );
}

export default ContactMeSection;
