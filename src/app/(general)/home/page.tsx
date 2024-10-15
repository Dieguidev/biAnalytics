import Image from "next/image";
import {
  Database,
  Code,
  Users,
  // Monitor,
  // MessageSquare,
  // PieChart,
  // Settings,
  // Lightbulb,
  // BarChart,
} from "lucide-react";
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

      {/* Additional Services Section */}
      {/* <section className=" py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios de Análisis de Datos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
              {
                icon: <MessageSquare size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
              {
                icon: <PieChart size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
              {
                icon: <Settings size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
              {
                icon: <Lightbulb size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
              {
                icon: <BarChart size={30} />,
                title: "Análisis de Datos",
                description:
                  "Aenaen massa. Cum sociis natoque penatibus montes nascetur ridiculus mus.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative w-full ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed before:absolute before:inset-0 before:bg-black before:opacity-50"
          style={{ backgroundImage: "url('/home.jpg')" }}
        ></div>
        <div className="relative container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 py-16">

          <div className="md:w-1/2 w-full text-slate-200 text-left p-4">
            <p className="text-4xl font-semibold mb-4">
              Nuestro Análisis es su resultado{" "}
              <span className="font-bold text-sky-400">FINANCIERO.</span>
            </p>
            <p className="mb-4 ">
              <span className="font-bold text-xl">Análisis de Documentos</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquip ex ea
              commodo consequat.
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-4">Análisis de Datos</p>
            <p className="mb-4">Análisis de Datos</p>
            <p className="mb-4">Análisis de Datos</p>
            <p className="mb-4">Análisis de Datos</p>
            <Link
              className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
              href="/services "
            >
              Conoce nuestros servicios
            </Link>
          </div>

          <div className="md:w-1/2 w-full flex justify-center md:justify-center mt-8 md:mt-0 items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <Image
                src="/personaCirculo.jpg"
                alt="Persona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            CHOOSE A staff
          </h2>
          <p className="text-center text-gray-600 mb-12">Análisis de Datos</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Mark Wagh",
                role: "Founder",
                image: "/path-to-mark-image.jpg",
              },
              {
                name: "Ruby Wilson",
                role: "HR Manager",
                image: "/path-to-ruby-image.jpg",
              },
              {
                name: "Michael Vaughn",
                role: "Web Developer",
                image: "/path-to-michael-image.jpg",
              },
              {
                name: "John Smith",
                role: "Web Developer",
                image: "/path-to-john-image.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Financial Results Section */}
      {/* <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">
                Nuestro Análisis es s resultado FINANCIERO.
              </h2>
              <h3 className="text-xl mb-4">Análisis de Documentos:</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Análisis de Datos</li>
                <li>Análisis de Datos</li>
                <li>Análisis de Datos</li>
                <li>Análisis de Datos</li>
              </ul>
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Conoce nuestros servicios
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/path-to-team-image.jpg"
                alt="Equipo de trabajo"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
