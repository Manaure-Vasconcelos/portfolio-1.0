import { useTranslation } from "react-i18next";
import { MonitorSmartphone, Settings, Server } from 'lucide-react';
import CardSkills from './CardSkills';

// TODO refactor skill section
function SkillsSection({
  skillsSectionRef,
}: {
  skillsSectionRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section ref={skillsSectionRef} className="h-screen scroll-mt-16 relative">
      <h1 className="flex justify-center items-center text-4xl text-customPink font-regular font-serif tracking-wide pt-4 truncate w-full">
        {t("SkillsSection.title")}
      </h1>
      <article className="w-full h-5/6 flex justify-center items-center">
        <div className="w-4/5 flex justify-center items-center space-x-8">
          <CardSkills title='WebSites e Aplicativos' description="Desenvolvimento de interfaces">
            <MonitorSmartphone size={30} />
          </CardSkills>
          <CardSkills title='API e Banco de dados' description="Criação de serviços de sistemas">
            <Server size={30} />
          </CardSkills>
          <CardSkills title='Suporte' description="Correção de problemas e melhorias">
            <Settings size={30} />
          </CardSkills>
        </div>
      </article>
    </section>
  );
}

export default SkillsSection;