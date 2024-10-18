import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormProps {
  name: string;
  email: string;
  phone: number;
  service: string;
  resume: string;
}

function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormProps>({ defaultValues: { service: "" } });

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

      toast("Seu pedido foi enviado!", {
        description: `Obrigado(a), ${name}! Agradecemos por escolher nossos serviços.`,
        action: {
          label: "Ok",
          onClick: () => console.log("ok"),
        },
      });
      reset();
    } catch (error: any) {
      alert(`Server Error`);
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-2/3 w-full md:w-4/5 flex flex-col justify-evenly gap-3 p-4 border rounded-l-xl backdrop-blur-md"
    >
      <div className="flex flex-col md:flex-row gap-2">
        <span className="w-full md:w-1/2">
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            alt="name"
            placeholder="Your Name"
            {...register("name", { required: "Campo obrigatório." })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </span>
        <span className="w-full md:w-1/2">
          <Label htmlFor="phone">Celular:</Label>
          <Input
            type="tel"
            alt="phone"
            placeholder="(+99) 99999-9999"
            {...register("phone", { required: "Campo obrigatório." })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <span className="w-1/2">
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            alt="email"
            placeholder="yourEmail@hotmail.com"
            {...register("email", { required: "Campo obrigatório." })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </span>
        <span className="w-1/2">
          <Label htmlFor="service">Qual serviço está buscando?</Label>
          <Controller
            name="service"
            control={control}
            rules={{ required: "Campo obrigatório." }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="landingPage" className="cursor-pointer">
                      Landing Page
                    </SelectItem>
                    <SelectItem value="appWeb" className="cursor-pointer">
                      Aplicativo web
                    </SelectItem>
                    <SelectItem value="crm" className="cursor-pointer">
                      CRM
                    </SelectItem>
                    <SelectItem value="sistemas" className="cursor-pointer">
                      Sistemas de Gestão
                    </SelectItem>
                    <SelectItem value="ecommerce" className="cursor-pointer">
                      E-commerce
                    </SelectItem>
                    <SelectItem value="automation" className="cursor-pointer">
                      Automação de processos
                    </SelectItem>
                    <SelectItem value="other" className="cursor-pointer">
                      Outro
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-red-500">{errors.service.message}</p>
          )}
        </span>
      </div>
      <span>
        <Label htmlFor="resume">Resumo:</Label>
        <Textarea
          placeholder="Faça um breve resumo do que você está buscando."
          {...register("resume", { required: "Campo obrigatório." })}
        />
        {errors.resume && (
          <p className="text-red-500">{errors.resume.message}</p>
        )}
      </span>
      <div className="flex justify-center items-center">
        <Button type="submit" className="w-[100px]">
          Enviar
        </Button>
      </div>
    </form>
  );
}

export default FormContact;
