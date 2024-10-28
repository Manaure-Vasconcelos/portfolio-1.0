import { useTranslation } from "react-i18next";
import { MonitorSmartphone, Server } from 'lucide-react';
import CardSkills from './CardSkills';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

// TODO refactor skill section
function SkillsSection({
  skillsSectionRef,
}: {
  skillsSectionRef: React.RefObject<HTMLElement>;
}) {
  const { t } = useTranslation();
  return (
    <section ref={skillsSectionRef} className="h-screen scroll-mt-16">
      <h1 className="flex justify-center items-center text-4xl text-customPink font-regular font-serif tracking-wide pt-4 truncate w-full">
        {t("SkillsSection.title")}
      </h1>
      <article className="w-full h-5/6 flex justify-center items-center">
        <Accordion type="single" collapsible orientation="horizontal" className='w-4/5 h-full flex justify-center items-center space-x-8'>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <CardSkills title='WebSites e Aplicativos' description="Desenvolvimento de interfaces">
                <MonitorSmartphone size={30} />
              </CardSkills>
            </AccordionTrigger>
            <AccordionContent>
              Desenvolvimento de websites, landing pages e aplicativos com <u>React</u>, <u>TypeScript</u> e <u>JavaScript</u> para criar interfaces modernas e responsivas
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <CardSkills title='API e Banco de dados' description="Criação de serviços de sistemas">
                <Server size={30} />
              </CardSkills>
            </AccordionTrigger>
            <AccordionContent>
              Desenvolvimento de APIs e sistemas com <u>Node.js</u>, <u>NestJS</u> e <u>Fastify</u>, utilizando <u>TypeScript</u> e <u>SQL</u> para criar serviços robustos e escaláveis
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-3">
            <AccordionTrigger>
              <CardSkills title='Suporte' description="Correção de problemas e melhorias">
                <Settings size={30} />
              </CardSkills>
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ut asperiores libero pariatur laudantium ipsam necessitatibus soluta
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </article>
    </section>
  );
}

export default SkillsSection;
{/* <div className="relative group">

            <div className="absolute top-[-0%] left-0 w-[270px] h-full bg-white p-4 border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">algo</div>
        </div> */}