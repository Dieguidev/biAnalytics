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
      >{children}</main>
      <WhatsAppIcon
        phoneNumber="942986742"
        message="Hola, estoy interesado en sus servicios!"
      />
      <Footer />
    </>
  );
}
