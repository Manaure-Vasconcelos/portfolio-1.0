import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "../hooks/use-toast";
import {
  Sheet, SheetContent, SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet";

interface FormProps {
  name: string;
  email: string;
  phone: number;
  service: string;
  resume: string;
}

export function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ defaultValues: { service: "" } });
  const { toast } = useToast()

  const onSubmit = ({ name, phone, email, service, resume }: FormProps) => {
    try {
      emailjs.send(
        "service_contact_us",
        "template_contact_us",
        {
          user_name: name,
          user_phone: phone,
          user_mail: email,
          user_service: service,
          user_resume: resume,
        },
        "iPtcWWgaZcvVJFrWK"
      );

      toast({
        title: 'Email enviado com sucesso!',
      });

      reset();
    } catch (error: any) {
      alert(`Server Error`);
      console.log(error.message);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Enviar Email.</Button>
      </SheetTrigger>
      <SheetContent side={'right'}>
        <SheetHeader>
          <SheetTitle>Entre em contato</SheetTitle>
        </SheetHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-2/3 w-full flex flex-col justify-evenly gap-3 p-2 rounded-l-xl"
        >
          <div className="flex flex-col justify-center gap-2 w-full">
            <span className="w-full">
              <Label htmlFor="name">Nome: *</Label>
              <Input
                type="text"
                alt="name"
                placeholder="Your Name"
                {...register("name", { required: "Campo obrigatório." })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </span>
            <span className="w-full">
              <Label htmlFor="phone">WhatsApp:</Label>
              <Input
                type="number"
                alt="phone"
                placeholder="(+99) 99999-9999"
                {...register("phone", { required: false })}
              />
            </span>
            <span className="w-full">
              <Label htmlFor="email">Email: *</Label>
              <Input
                type="email"
                alt="email"
                placeholder="yourEmail@hotmail.com"
                {...register("email", { required: "Campo obrigatório." })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </span>
          </div>
          <span>
            <Label htmlFor="resume">Resumo: *</Label>
            <Textarea
              placeholder="Escreva algo."
              {...register("resume", { required: "Campo obrigatório." })}
            />
            {errors.resume && (
              <p className="text-red-500">{errors.resume.message}</p>
            )}
          </span>
          <SheetFooter>
            <Button type="submit" className="w-[100px]">
              Enviar
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
