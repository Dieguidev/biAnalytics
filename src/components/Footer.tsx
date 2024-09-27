import {
  Facebook,
  Twitter,
  Instagram,
  Map,
  Phone,
  Mail,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-sky-500 text-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="mb-4">
              Proin diam justo, scelerisque non felis porta, placerat vestibulum
              nisi. Vestibulum ac elementum massa. In rutrum quis risus quis
              sollicitudin. Pellentesque non eros ante.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-sky-200">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-sky-200">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-sky-200">
                <Mail size={24} />
              </Link>
              <Link href="#" className="hover:text-sky-200">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link href="#" className="hover:text-sky-200">
                  Home
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
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="flex items-center mb-2">
                <Map size={20} className="mr-2" />
                <span>1,Mi Dirección</span>
              </li>
              <li className="flex items-center mb-2">
                <Phone size={20} className="mr-2" />
                <span>+1234567890</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail size={20} className="mr-2" />
                <Link href="mailto:contacto@bianalytics.com.pe"> contact@domain.com</Link>
              </li>
              <li className="flex items-center">
                <Lock size={20} className="mr-2" />
                <span>1234567890</span>
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
