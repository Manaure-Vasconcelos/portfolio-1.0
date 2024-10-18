"use client";
import { Languages } from "lucide-react";
import { Select,SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from "./ui/select";

// TODO fix bug
export default function LanguageSelect() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <Select onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-16">
        <Languages />
      </SelectTrigger>
      <SelectContent className="w-16">
        <SelectItem value="es" className="hover:cursor-pointer">ES</SelectItem>
        <SelectItem value="pt-BR" className="hover:cursor-pointer">PT</SelectItem>
      </SelectContent>
    </Select>
  );
}
