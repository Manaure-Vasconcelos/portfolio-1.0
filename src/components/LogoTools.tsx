import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ReactNode } from "react";

type sideOptions = "top" | "right" | "bottom" | "left" | undefined

function LogoTools({
  url,
  description,
  open,
  side
}: {
  url: string;
  alt: string;
  description: ReactNode;
  open: boolean
  side: sideOptions
}) {
  return (
    <HoverCard defaultOpen={open}>
      <HoverCardTrigger
        asChild
        className="size-27 p-5 gap-0 flex flex-col justify-center items-center text-center cursor-pointer hover:scale-110 transform"
        style={{
          backgroundImage: `url('/hexagon.svg')`,
          backgroundSize: "cover", // Ajusta o tamanho do fundo
          backgroundRepeat: "no-repeat", // Evita que o fundo se repita
          backgroundPosition: "center",
        }}
      >
        <image href={url} width={100} height={100} />
      </HoverCardTrigger>
      <HoverCardContent side={side} className='w-80 h-auto p-4'>

        {description}</HoverCardContent>
    </HoverCard>
  );
}

export default LogoTools;
