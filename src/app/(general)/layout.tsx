import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppIcon } from "@/components/WhatsAppLink";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className=""
      // className="flex flex-col items-center "
      >{children}</main>
      <WhatsAppIcon
        phoneNumber="956096607" // Reemplaza con tu número de teléfono
        message="Hola, estoy interesado en sus servicios!" // Mensaje opcional
      />
      <Footer />
    </>
  );
}
