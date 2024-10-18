import { useTranslation } from "react-i18next";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from 'react-router-dom';
import FormContact from "./FormContact";

function ContactMeSection({
  contactMeRef,
}: {
  contactMeRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section ref={contactMeRef} className="h-screen scroll-mt-16 relative">
      <div className="background4" />
      <h1 className="flex justify-center items-center text-4xl font-extrabold font-serif tracking-wide pt-4">
        {t("ContactmeSection.title")}
      </h1>
      <p className="leading-snug [&:not(:first-child)]:mt-6 text-[26px] font-sans tracking-wider flex justify-center items-center">
        {t("ContactmeSection.subtitle")}
      </p>
      <article className="h-full w-full flex items-center">
        <div className="w-1/2 h-full flex justify-end items-center">
          <FormContact />
        </div>
        <div className="w-1/2 h-full flex justify-start items-center">
          <div className="h-2/3 w-full md:w-3/4 bg-offWhite bg-opacity-20 rounded-r-xl p-5 pt-7">
            <h3 className="scroll-m-20 text-2xl font-serif font-medium tracking-wide">
              {t("ContactmeSection.title2")}
            </h3>
            <p className="leading-snug [&:not(:first-child)]:mt-5 text-[20px] font-sans tracking-wider">
              {t("ContactmeSection.description1")}
            </p>
            <div className='flex flex-col justify-center items-start gap-6 mt-8'>

              <span className="flex items-center font-sans tracking-wider gap-2">
                <Phone size={20} />
                +54 3757-338769
              </span>
              <span className="flex items-center font-sans tracking-wider gap-2">
                <Mail size={20} />
                manaurevasc97@gmail.com
              </span>
              <span className="flex font-sans tracking-wider gap-2">
                <Linkedin size={20} />
                <Link to='https://www.linkedin.com/in/manaure-vasconcelos-63b38218a/' target='blank' className='underline'>
                  linkedin/manaure-vasconcelos
                </Link>
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContactMeSection;
