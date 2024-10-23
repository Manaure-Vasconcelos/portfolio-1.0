import { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

function CardSkills({ children, title, description }: { children: ReactNode, title: string, description: string }) {
  return (
    <Card className='w-[270px] cursor-pointer'>
      <CardHeader className='flex flex-col justify-center items-start'>
        <span className='mb-4'>
          {children}
        </span>
        <CardTitle className='text-xl'>{title}</CardTitle>
        <CardDescription className='text-sm'>{description}</CardDescription>

      </CardHeader>
    </Card>
  );
}

export default CardSkills;