import { Button } from "./ui/button";
import Logo from "./Logo";
import SheetSideBar from "./SheetSideBar";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
  onScrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  sectionRefs: {
    section1: React.RefObject<HTMLElement>;
    section2: React.RefObject<HTMLElement>;
    section3: React.RefObject<HTMLElement>;
    section4: React.RefObject<HTMLElement>;
  };
}

function NavBar({ onScrollToSection, sectionRefs }: NavbarProps) {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-10 flex flex-row h-16 justify-between md:justify-evenly items-center gap-4 border-b bg-background px-4 md:px-6">
      <SheetSideBar
        onScrollToSection={onScrollToSection}
        sectionRefs={sectionRefs}
      />

      <Button
        variant={"link"}
        className="flex flex-row justify-center items-center gap-2 text-lg font-semibold md:text-base"
        onClick={() => onScrollToSection(sectionRefs.section1)}
      >
        <Logo />
        <span className="sr-only">manaure.dev</span>
      </Button>

      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-[19px] lg:gap-6">
        <Button
          variant={"link"}
          className="text-muted-foreground text-lg transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
          onClick={() => onScrollToSection(sectionRefs.section1)}
        >
          {t("NavBar.home")}
        </Button>
        <Button
          variant={"link"}
          className="text-muted-foreground text-lg transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
          onClick={() => onScrollToSection(sectionRefs.section2)}
        >
          {t("NavBar.projects")}
        </Button>
        <Button
          variant={"link"}
          className="text-muted-foreground text-lg transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
          onClick={() => onScrollToSection(sectionRefs.section3)}
        >
          {t("NavBar.skills")}
        </Button>
        <Button
          variant="default"
          onClick={() => onScrollToSection(sectionRefs.section4)}
        >
          {t("NavBar.contact-me")}
        </Button>
      </nav>
      <div className="flex gap-3">
        <LanguageToggle />
        <Button
          className='md:hidden'
          variant="default"
          onClick={() => onScrollToSection(sectionRefs.section4)}
        >
          {t("NavBar.contact-me")}
        </Button>
      </div>
    </header>
  );
}

export default NavBar;
