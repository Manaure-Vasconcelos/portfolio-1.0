"use client";
import { Languages } from "lucide-react";
import {
  Select, SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLocation, useNavigate } from "react-router-dom";

// TODO fix bug
export default function LanguageSelect() {
  const location = useLocation();
  const pathname = location.pathname
  const router = useNavigate();

  const handleLocaleChange = (newLocale: string) => {
    router(`${pathname}?locale=${newLocale}`);
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
