import {
  Facebook,
  Map,
  Phone,
  Mail,

  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-sky-500 text-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Nosotros</h2>
            <p className="mb-4">
            En BI Analytics, nuestra misión es empoderar a las empresas mediante el uso efectivo de sus datos. Creemos en la innovación, la eficiencia y el aprendizaje continuo como pilares para enfrentar los retos del futuro. Con nuestro enfoque centrado en el cliente, trabajamos para ofrecer soluciones de alto impacto que mejoren la toma de decisiones.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/ContactoBIAnalytics/about"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-sky-200"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@bianalytics.com.pe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-200"
              >
                <Mail size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/@bianalytics285"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-sky-200"
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bianalyticsperu/about/?viewAsMember=true"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-sky-200"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Enlaces</h2>
            <ul>
              <li>
                <Link href="#" className="hover:text-sky-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sky-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
            <ul>
              <li className="flex items-center mb-2">
                <Map size={20} className="mr-2" />
                <span>Av. las Gaviotas 2100, Santiago de Surco</span>
              </li>
              <li className="flex items-center mb-2">
                <Phone size={20} className="mr-2" />
                <span>+51 942 986 742</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail size={20} className="mr-2" />
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@bianalytics.com.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  contacto@bianalytics.com.pe
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="bg-sky-600 py-4 text-slate-300">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} BI Analytics. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
