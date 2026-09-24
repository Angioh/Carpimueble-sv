
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Carpimueble SV | Carpintería y Muebles a Medida en El Salvador",

  description = "Diseño y fabricación de muebles modernos a medida en El Salvador. Especialistas en muebles de TV flotantes, closets, cocinas de melamina RH y escritorios personalizados.",

  canonical = "https://carpimueble-sv.com",

  ogImage = "https://carpimueble-sv.com/images/Grap_carpimueble.jpg",
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",

    name: "Carpimueble SV",

    url: "https://carpimueble-sv.com",

    logo: ogImage,

    image: ogImage,

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


      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />



      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={ogImage} />

      <meta
        property="og:image:alt"
        content="Carpimueble SV - Carpintería y muebles a medida"
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:type" content="image/jpeg" />

      <meta property="og:site_name" content="Carpimueble SV" />

      <meta property="og:locale" content="es_SV" />


      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta name="twitter:image" content={ogImage} />

      <meta
        name="twitter:image:alt"
        content="Carpimueble SV - Carpintería y muebles a medida"
      />


      <meta
        name="tiktok:title"
        content={title}
      />

      <meta
        name="tiktok:description"
        content={description}
      />

      <meta
        name="tiktok:image"
        content={ogImage}
      />


      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}

