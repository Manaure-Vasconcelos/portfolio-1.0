"use client";
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
} from "./ui/select";
import i18next from '../i18n'

export default function LanguageSelect() {
  const handleLocaleChange = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <Select onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-16">
      </SelectTrigger>
      <SelectContent className="w-16">
        <SelectItem value="es" className="hover:cursor-pointer">ES</SelectItem>
        <SelectItem value="pt-BR" className="hover:cursor-pointer">PT</SelectItem>
      </SelectContent>
    </Select>
  );
}
