import { useTranslation } from "react-i18next";
import { FormContact } from "./FormContact";
import { Linkedin, Github } from 'lucide-react'
import ContactSocialMedia from "./ContactSocialMedia";

function ContactMeSection({
  contactMeRef,
}: {
  contactMeRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section ref={contactMeRef} className="h-auto scroll-mt-16">
      <h1 className="text-center text-4xl text-customPink font-regular font-serif tracking-wide pt-4">
        {t("ContactmeSection.title")}
      </h1>
      <p className="leading-snug [&:not(:first-child)]:mt-6 text-[26px] font-semibold font-sans tracking-wider text-center">
        {t("ContactmeSection.subtitle")}
      </p>
      <p className="text-xl mt-2 text-muted-foreground text-center">
        {t("ContactmeSection.subtitle2")}
      </p>
      <article className="h-[400px] w-full flex flex-col justify-start items-center mt-48">
        <div className='w-full md:w-1/4 flex flex-col justify-center items-center gap-1'>
          <FormContact />
          <ContactSocialMedia url='https://www.linkedin.com/in/manaure-vasconcelos-63b38218a/'>
            <Linkedin size={6} />
            Linkedin
          </ContactSocialMedia>
          <ContactSocialMedia url='https://github.com/Manaure-Vasconcelos'>
            <Github size={6} />
            GitHub
          </ContactSocialMedia>
        </div>
      </article>
    </section>
  );
}

export default ContactMeSection;
