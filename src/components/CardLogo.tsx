import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

function CardLogo({
  children,
  description,
}: {
  children: React.ReactNode;
  description: string;
  open: boolean;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent>{description}</HoverCardContent>
    </HoverCard>
  );
}

export default CardLogo;
