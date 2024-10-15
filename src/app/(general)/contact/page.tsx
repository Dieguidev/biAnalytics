import FormContact from "@/components/FormContact";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "BiAnalytics | Contacto",
  description: "Contacta a BI Analytics para más información sobre nuestros servicios.",
};

export default function ContactPage() {
  return (
    <div className=" mx-auto -4 py-8">
      <section className="relative w-full min-h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed h-full "
          style={{ backgroundImage: "url('/contact-bg2.jpg')" }}
        ></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4 py-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-lg mb-4">
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
                  <Link
                    href={
                      "https://www.google.com/maps/place/Av.+las+Gaviotas+2100,+Santiago+de+Surco+15054/@-12.1594077,-76.9960968,17.25z/data=!4m5!3m4!1s0x9105b83bd2e0d5bb:0x57e1f2fbc1ecda53!8m2!3d-12.1594972!4d-76.9935407?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-gray-800 font-semibold">Av. las Gaviotas 2100, Santiago de Surco</p>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">PHONE</h3>
                <div className="flex items-center">
                  {/* Mostrar solo en dispositivos móviles */}
                  <Link href="tel:+51 942 986 742" className="block md:hidden">
                    <Phone className="mr-2" size={20} />
                    <p className="text-gray-800 font-semibold">+51 942 986 742</p>
                  </Link>
                  {/* Mostrar solo en dispositivos de escritorio */}
                  <div className="hidden md:flex items-center">
                    <Phone className="mr-2" size={20} />
                    <p className="text-gray-800 font-semibold">+51 942 986 742</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">EMAIL</h3>
                <div className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@bianalytics.com.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 font-semibold"
                  >
                    {" "}
                    contacto@bianalytics.com.pe

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección para Google Maps */}
      <section className="w-full py-8 ">
        <h3 className="text-5xl font-semibold mb-4 text-center">
          Nuestra Ubicación
        </h3>
        <div className="flex justify-center w-full">
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15601.227577093854!2d-77.0038404!3d-12.1594972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b83bd2e0d5bb%3A0x57e1f2fbc1ecda53!2sAv.%20las%20Gaviotas%202100%2C%20Santiago%20de%20Surco%2015054!5e0!3m2!1ses-419!2spe!4v1728582493717!5m2!1ses-419!2spe"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
