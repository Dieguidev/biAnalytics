import FormContact from "@/components/FormContact";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className=" mx-auto -4 py-8">
      <section className="relative w-full min-h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed h-full "
          style={{ backgroundImage: "url('/contact-bg.jpeg')" }}
        ></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4 py-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Contacto
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row items-start min-h-full">
          {/* Formulario */}
          <FormContact />
          {/* Texto */}
          <div className="md:w-1/2 w-full md:pl-8  min-h-full py-4 flex-1">
            <h2 className="text-2xl font-bold mb-4 uppercase">Contáctanos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">ADDRESS</h3>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  <p>1,Mi Dirección</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">PHONE</h3>
                <div className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  <p>+1234567890</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">EMAIL</h3>
                <div className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  <p>contact@domain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
