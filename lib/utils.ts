import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: any): string {
  // Crea un oggetto Date a partire dalla stringa
  const date = new Date(dateString);

  // Controlla se la data è valida
  if (isNaN(date.getTime())) {
      throw new Error("La data fornita non è valida. Usa il formato YYYY-MM-DD.");
  }

  // Opzioni di formattazione
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };

  // Formatta la data in italiano
  const formattedDate = new Intl.DateTimeFormat('it-IT', options).format(date);

  // Sostituisci lo spazio tra giorno/mese/anno con " / "
  return formattedDate;
}