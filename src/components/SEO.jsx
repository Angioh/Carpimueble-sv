import { Helmet } from "react-helmet-async";

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",

    name: "Carpimueble SV",

    url: "https://www.carpimueble-sv.com",

    logo: "https://www.carpimueble-sv.com/images/Logo.webp",

    image:
      "https://www.carpimueble-sv.com/images/Grap_carpimueble.jpg",

    telephone: "+50373933266",

    priceRange: "$200 - $3000",

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
      <title>
        Carpimueble SV | Carpintería y Muebles a Medida en El Salvador
      </title>

      <meta
        name="description"
       content="Muebles a medida en El Salvador: cocinas, closets, muebles de TV y escritorios personalizados. Diseño, fabricación e instalación."
      />

      <link
        rel="canonical"
        href="https://www.carpimueble-sv.com"
      />

      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}