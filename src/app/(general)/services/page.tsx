
import Image from "next/image";

export const metadata = {
  title: "BiAnalytics | Servicios",
  description:
    "Conoce los servicios de BI Analytics y cómo podemos ayudarte a mejorar tu rendimiento empresarial.",
};

export default function ServicesPage() {
  return (
    <div className=" mx-auto -4 py-8">
      <section className="relative w-full min-h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed h-full "
          style={{ backgroundImage: "url('/services3.jpg')" }}
        ></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4 py-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-lg mb-4">
              Servicios
            </h1>
          </div>
        </div>
      </section>

      <section className=" py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios de Análisis de Datos
          </h2>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* Primera fila: Imagen a la izquierda, texto a la derecha */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 w-full mb-4 md:mb-0 ">
            <Image
              src="/offer01-2.jpg"
              alt="servicio1"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Análisis de Datos</h2>
            <p className="text-lg text-black font-semibold drop-shadow-lg">
              En BI Analytics, transformamos datos brutos en insights
              accionables. Ofrecemos análisis descriptivo, predictivo y
              prescriptivo para ayudarte a tomar decisiones basadas en datos y
              mejorar tu rendimiento empresarial. Utilizamos herramientas
              avanzadas como Power BI, SQL, y Python para crear visualizaciones
              impactantes y fáciles de entender.
            </p>
          </div>
        </div>
        {/* Segunda fila: Texto a la izquierda, imagen a la derecha */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 w-full md:order-2 mb-4 md:mb-0">
            <Image
              src="/offer02-2.jpg"
              alt="Servicio 2"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 w-full md:pr-8 md:order-1">
            <h2 className="text-2xl font-bold mb-4">
              Automatización de Procesos
            </h2>
            <p className="text-lg text-black font-semibold drop-shadow-lg">
              Reducimos el tiempo y los costos operativos mediante la
              automatización de procesos empresariales clave. Utilizamos
              herramientas como Power Automate, PowerApps y Python para integrar
              y optimizar tus flujos de trabajo, desde la gestión de documentos
              hasta la automatización de tareas repetitivas y complejas. Ya sea
              a través de scripts personalizados en Python o aplicaciones
              automatizadas, te ayudamos a mejorar la eficiencia y productividad
              de tu equipo.
            </p>
          </div>
        </div>
        {/* Tercera fila: Imagen a la izquierda, texto a la derecha */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <Image
              src="/offer03-2.jpg"
              alt="Servicio 3"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-8">
            <h2 className="text-2xl font-bold mb-4">
              Capacitación Profesional
            </h2>
            <p className="text-lg text-black font-semibold drop-shadow-lg">
              Ofrecemos cursos y talleres personalizados en análisis de datos,
              visualización y automatización. Capacita a tu equipo para que
              domine las herramientas como Power BI, SQL, Python y más, de
              manera que puedan utilizar los datos de manera estratégica para
              alcanzar los objetivos de la empresa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
