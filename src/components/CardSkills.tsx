import { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import ShineBorder from "./ui/shine-border";

function CardSkills({ children, title, description }: { children: ReactNode, title: string, description: string }) {
  return (
    <Card className='w-[300px] cursor-pointer'>
      <ShineBorder
        color={"white"}
      >
        <CardHeader className='flex flex-col justify-center items-start'>
          <span className='mb-4'>
            {children}
          </span>
          <CardTitle className='text-xl'>{title}</CardTitle>
          <CardDescription className='text-sm'>{description}</CardDescription>

        </CardHeader>
      </ShineBorder>
    </Card>
  );
}

export default CardSkills;