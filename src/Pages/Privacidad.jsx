import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <SEO
        title="Política de Privacidad | Carpimueble SV"
        description="Consulta las políticas de privacidad y tratamiento de datos de Carpimueble SV."
        canonical="https://carpimueble-sv.com/privacidad"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 grow">
        <h1 className="text-3xl font-display mb-2 text-[#112A3A]">
          Aviso de Privacidad
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-xl  mb-2 text-[#112A3A]">
              1. Identidad del Responsable
            </h2>
            <p className="font-sans">
              Carpimueble SV, es responsable del resguardo y uso adecuado de la
              información proporcionada por los usuarios en este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl  mb-2 text-[#112A3A]">
              2. Información Recabada
            </h2>
            <p className="font-sans">
              Recopilamos únicamente los datos que nos comparte voluntariamente
              al solicitar cotizaciones sobre proyectos de carpintería (nombre,
              teléfono o detalles del mueble).
            </p>
          </section>

          <section>
            <h2 className="text-xl  mb-2 text-[#112A3A]">
              3. Finalidad del Tratamiento
            </h2>
            <p className="font-sans">
              Sus datos se utilizan exclusivamente para ponernos en contacto con
              usted, coordinar detalles de diseño y enviar presupuestos
              personalizados. No compartimos su información con terceros.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
