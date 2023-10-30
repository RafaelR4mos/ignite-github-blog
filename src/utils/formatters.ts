import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDateDistanceFromNow(date: string) {
  const dateDistanceFromNow = formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });

  return dateDistanceFromNow;
}
