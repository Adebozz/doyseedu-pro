export const WHATSAPP_NUMBER = "2348033321603";

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
