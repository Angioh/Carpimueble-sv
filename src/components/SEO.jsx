import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Carpimueble SV | Muebles a Medida en El Salvador",
  description = "Diseño y fabricación de muebles a medida en El Salvador. Especialistas en muebles de TV, closets personalizados, cocinas y escritorios para tu hogar.",
  canonical = "https://carpimueble-sv.com",
  ogImage = "https://carpimueble-sv.com/images/logo.webp",
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: "Carpimueble SV",
    url: "https://carpimueble-sv.com",
    logo: ogImage,
    image: ogImage,
    telephone: "+50373933266",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SV",
      addressRegion: "El Salvador",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/carpimueble_sv",
      "https://www.facebook.com/profile.php?id=61551492575910",
      "https://www.tiktok.com/@carpimueblesv503",
    ],
    knowsAbout: [
      "Muebles de TV a medida",
      "Closets personalizados",
      "Muebles de cocina a medida",
      "Escritorios personalizados",
      "Carpintería a medida en El Salvador",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Datos estructurados Schema.org */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
}
