import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function AvisoCookies() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <SEO
        title="Política de Cookies | Carpimueble SV"
        description="Información sobre el uso de cookies y tecnologías de almacenamiento en la web de Carpimueble SV."
        canonical="https://carpimueble-sv.com/politica-cookies"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 grow">
        <h1 className="text-3xl font-display mb-2 text-[#112A3A]">
          Política de Cookies
        </h1>
        <p className="text-sm text-gray-500 mb-8 font-sans">
          Última actualización: agosto de 2026
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#112A3A]">
              1. ¿Qué son las cookies?
            </h2>
            <p className="font-sans">
              Son pequeños archivos de texto que los sitios web almacenan en su
              navegador para optimizar la velocidad y funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-[#112A3A]">
              2. Cookies que utilizamos
            </h2>
            <p className="font-sans">
              En Carpimueble SV utilizamos cookies básicas para medir métricas
              anónimas de visita que nos permitan optimizar la experiencia de
              navegación de nuestros clientes.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
