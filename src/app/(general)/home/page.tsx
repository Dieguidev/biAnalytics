import Image from "next/image";
import { Database, Code, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "BiAnalytics | Inicio",
  description:
    "Descubre cómo BI Analytics puede ayudarte a transformar tu negocio.",
};

const iconServices = [
  {
    icon: <Database className="w-16 h-16 text-blue-700" />,
    title: "Análisis de Datos",
    description:
      "Descubre el valor oculto en tus datos<br />En BI Analytics, transformamos datos brutos en insights accionables.",
  },
  {
    icon: <Code className="w-16 h-16 text-blue-700" />,
    title: "Automatización de Procesos",
    description:
      "Automatiza y simplifica tus operaciones<br />Reducimos el tiempo y los costos operativos mediante la automatización de procesos empresariales clave.",
  },
  {
    icon: <Users className="w-16 h-16 text-blue-700" />,
    title: "Capacitación Profesional",
    description:
      "Capacita a tu equipo para el éxito<br />Ofrecemos cursos y talleres personalizados en análisis de datos, visualización y automatización.",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-10 my-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sky-700 drop-shadow-lg fade-in-up">
              ¿Listo para transformar tu negocio?
            </h1>
            <p className="text-xl mb-8 text-gray-900 fade-in-up font-bold">
              Explora nuestros servicios o contáctanos para descubrir cómo
              podemos ayudarte a optimizar tus procesos y capacitar a tu equipo.
            </p>
            <Link
              href={"/services"}
              className="bg-sky-600 text-white font-bold py-3 px-6 rounded-full hover:bg-sky-700 transition duration-300"
            >
              Comienza ahora
            </Link>
          </div>
          <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0 relative">
            <Image
              src="/imgHeader.jpg"
              alt="Descripción de la imagen"
              width={500}
              height={500}
              // className="rounded-lg shadow-md"
              className="rounded-lg shadow-2xl relative z-10 border-4 border-white"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {iconServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {service.icon}
                <h3 className="mt-4 mb-2 text-xl font-bold text-gray-900 drop-shadow-lg">
                  {service.title}
                </h3>
                <p
                  className="text-black font-semibold drop-shadow-lg"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center md:items-center">
            <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0 flex justify-center">
              <h2 className="text-3xl font-bold text-blue-700 drop-shadow-lg">
                Bienvenido a BI Analytics!
              </h2>
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
              <p className="text-black max-w-3xl mx-auto md:mx-0 font-semibold drop-shadow-lg">
                Transformamos datos en decisiones inteligentes. Ofrecemos
                soluciones personalizadas en análisis de datos, automatización
                de procesos y capacitaciones profesionales para que tu empresa
                alcance su máximo potencial. Confía en nosotros para optimizar
                tus operaciones y llevar tu negocio al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
