import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface SideBarProps {
  onScrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  sectionRefs: {
    section1: React.RefObject<HTMLElement>;
    section2: React.RefObject<HTMLElement>;
    section3: React.RefObject<HTMLElement>;
    section4: React.RefObject<HTMLElement>;
  };
}

function SheetSideBar({ onScrollToSection, sectionRefs }: SideBarProps) {
  const [open, setOpen] = useState(false);

  const handleNavigation = (sectionRef: React.RefObject<HTMLElement>) => {
    onScrollToSection(sectionRef);
    setOpen(false);
  };

  const {t} = useTranslation();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid grid-cols-1 gap-6 text-lg font-medium">
          <h4 className="flex justify-center items-center gap-2 text-lg font-semibold leading-7">
            Menu
          </h4>
          <span className="sr-only">menu</span>

          <Button
            variant={"link"}
            className="justify-start text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
            onClick={() => handleNavigation(sectionRefs.section1)}
          >
            {t("NavBar.home")}
          </Button>
          <Button
            variant={"link"}
            className="justify-start text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
            onClick={() => handleNavigation(sectionRefs.section2)}
          >
            {t("NavBar.projects")}
          </Button>
          <Button
            variant={"link"}
            className="justify-start text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4 hover:scale-105"
            onClick={() => handleNavigation(sectionRefs.section3)}
          >
            {t("NavBar.skills")}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default SheetSideBar;
