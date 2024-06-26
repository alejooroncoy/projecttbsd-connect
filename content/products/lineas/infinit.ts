import { Product } from "../../types";
import { fileserver } from "../../../config/config";

export const infinit: Product[] = [
  { // AW-T2021
    name: `Torre de Sonido Bluetooth Infinit 9500W`,
    sku: `AW-T2021`,
    link: `/productos/AW-T2021`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2021/img/1.webp`,
      `/products/AW-T2021/img/2.webp`,
      `/products/AW-T2021/img/3.webp`,
      `/products/AW-T2021/img/4.webp`,
      `/products/AW-T2021/img/5.webp`,
      `/products/AW-T2021/img/6.webp`,
      `/products/AW-T2021/img/7.webp`,
      `/products/AW-T2021/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",

    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/doblemic.webp`,
        desc: "¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!",
      },
      {
        title: "Power Bank",
        img: fileserver + "/banners/powerbank.webp",
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
      {
        title: `Ecualizá tu música`,
        img: fileserver + `/banners/panel2021.webp`,
        desc: "¡Personalizá tu música como un verdadero Dj! Con las Bandas Ecualizadoras podés ajustar las frecuencias de sonido como más te guste, o simplemente experimentar tu música de otra manera.",
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/portatil2021.webp`,
        desc: "Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!",
      },
    ],
    shortDesc: `Ecualizador preciso`,
    longDesc:
      "Efectos de luces en forma de anillos Led agregarán un toque fantástico a donde los lleves. Podrás ajustar el sonido a gusto como un verdadero Dj.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/214-parlante-torre-bluetooth-power-bank-aiwa-aw-t2021.html`,

    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1130584547-parlante-bluetooth-portatil-recargable-aux-luces-aiwa-_JM#position=7&search_layout=grid&type=item&tracking_id=690b9158-932f-41cc-b1cf-d714d8f27211`,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `9500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 8" y 1 Tweeter de 2"`,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // Power Bank
        id: 13,
      },
      {
        // Mega Bass
        id: 31,
      },
      {
        // Entrada Aux
        id: 17,
      },
      {
        // Micrófono Inalámbrico
        id: 14,
      },
      {
        // Entrada Guitarra y Mic
        id: 21,
      },
      {
        // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`,
      },
      {
        // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "9500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Duración de batería
        id: 11,
        value: "5 horas (según su uso)",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank, Mega Bass",
      },
      {
        // Reguladores
        id: 5,
        value: "Frecuencias, Graves, Agudos, Eco y Vol. de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono, Guitarra",
      },
      {
        // Efectos
        id: 23,
        value: "De luces",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "30 x 66 x 30 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "37 x 73,3 x 35,5 cm",
      },
      {
        // Peso
        id: 18,
        value: "8,45 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354251",
      },
      {
        // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 40W / Clase II",
      },
    ],
    includes: [
      1, // Mic Inalam
      3, // Cable Aux
      12, // Cable
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-1`,
    downloads: `https://drive.google.com/drive/folders/1FyB2FsIgxRZDRe_pSfftnQzz7lOFPRDg`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2021',
        youtubeId: 'OxQeHEFTu4Q'
      }
    ]
  },
  { // AW-T2022
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2022`,
    link: `/productos/AW-T2022`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2022/img/1.webp`,
      `/products/AW-T2022/img/2.webp`,
      `/products/AW-T2022/img/3.webp`,
      `/products/AW-T2022/img/4.webp`,
      `/products/AW-T2022/img/5.webp`,
      `/products/AW-T2022/img/6.webp`,
      `/products/AW-T2022/img/7.webp`,
      `/products/AW-T2022/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",

    banners: [
      {
        title: `¡Pasate a Horizontal!`,
        img: fileserver + "/banners/horizontal2022.webp",
        desc: "Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.",
      },
      {
        title: `Entrada para Micrófono y Guitarra`,
        img: fileserver + "/banners/panel2022.webp",
        desc: "¡Armá tu Karaoke! Posee entrada para micrófono y guitarra ¡conectá y disfrutá tocando toda la noche con tus amigos!",
      },
      {
        title: `¡Llevalo a todos lados!`,
        img: fileserver + `/banners/portatil2022.webp`,
        desc: `¡Llevá la fiesta a donde sea que vayas! Con la Correa de fácil transporte podés moverte con tu música a la terraza, a la playa o a donde gustes.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + "/banners/fiestas.webp",
        desc: "Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!",
      },
      {
        title: "Power Bank",
        img: fileserver + "/banners/powerbank.webp",
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
    ],
    shortDesc: `Transportá tu música`,
    longDesc:
      "Con la Correa de fácil transporte podés moverte con tu música de la terraza, a la playa o en donde mas gustes. Práctica, liviana y portatil, con un sonido potente.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/215-parlante-torre-bluetooth-power-bank-aiwa-aw-t2022.html`,
    buyLink: `https://www.mercadolibre.com.ar/parlante-aiwa-aw-t2022-portatil-bluetooth-8500w-pmpo-luz-rgb/p/MLA19894180?pdp_filters=category:MLA455686%7Cofficial_store:2739#searchVariation=MLA19894180&position=2&search_layout=grid&type=product&tracking_id=1676d959-feab-4482-9734-3a1551303b5a`,

    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `8500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // Power Bank
        id: 13,
      },
      {
        // Efectos de Luz
        id: 6,
      },
      {
        // Entrada Mic y Guitarra
        id: 21,
      },
      {
        // Tweeter
        id: 35,
        value: `2 de 2"`,
      },
      {
        // Uso Horizontal
        id: 32,
      },
      {
        // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`,
      },
      {
        // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `2 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Duración de batería
        id: 11,
        value: "5 horas (según su uso)",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Agudos y Graves",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono, Guitarra",
      },
      {
        // Efectos
        id: 23,
        value: "De luces",
      },
      {
        // Otras características
        id: 15,
        value: "Correa para Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "59,4 x 28 x 24,5 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "68,7 x 34 x 30 cm",
      },
      {
        // Peso
        id: 18,
        value: "6,6 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354268",
      },
      {
        // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 40W / Clase II",
      },
    ],
    includes: [
      11, // Correa
      3, // Cable Aux
      5, // Fuente
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-1`,
    downloads: `https://drive.google.com/drive/folders/1G-0ZfmHeh3HiECKxeV1--6Zo8ObYh1tc`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2022',
        youtubeId: 'liW0rBW12qg'
      }
    ]
  },
  { // AW-T2018R
    name: `Torre de Sonido Bluetooth Infinit 8000W`,
    sku: `AW-T2018R`,
    link: `/productos/AW-T2018R`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2018R/img/1.webp`,
      `/products/AW-T2018R/img/2.webp`,
      `/products/AW-T2018R/img/3.webp`,
      `/products/AW-T2018R/img/4.webp`,
      `/products/AW-T2018R/img/5.webp`,
      `/products/AW-T2018R/img/6.webp`,
      `/products/AW-T2018R/img/7.webp`,
      `/products/AW-T2018R/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",

    banners: [
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: "Power Bank",
        img: fileserver + "/banners/powerbank.webp",
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + `/banners/bateria2018.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: `Ecualizá tu música`,
        img: fileserver + `/banners/eq2018.webp`,
        desc: `¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.`,
      },
    ],
    shortDesc: `Llevalo con vos`,
    longDesc:
      "Una torre práctica y portátil, con un sonido potente. Con la Empuñadura de Fácil Transporte podés moverte con tu música por donde más gustes.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/213-parlante-torre-bluetooth-power-bank-aiwa-aw-t2018r.html`,
    buyLink: `https://www.mercadolibre.com.ar/aiwa-aw-t2018r-parlante-torre-bluetooth-8000w-pmpo-luz-rgb/p/MLA20012498?pdp_filters=item_id:MLA1378496703`,


    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `8000W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `1 de 8"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // Power Bank
        id: 13,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Eco
        id: 23,
      },
      {
        // Doble Entrada Mic
        id: 27,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`,
      },
      {
        // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `1 de 8"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "8000W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Duración de batería
        id: 11,
        value: "6 horas (según su uso)",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos y Eco de Mic",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2",
      },
      {
        // Efectos de luces
        id: 54,
        value: "Si",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "32 x 56,5 x 32 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "37,5 x 6,08 x 36,5 cm",
      },
      {
        // Peso
        id: 18,
        value: "5,95 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354435",
      },
      {
        // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 25W / Clase II",
      },
    ],
    includes: [
      3, // Aux
      12, // Cable
      9, // Manual de usuario
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1GE6Z6B6kaWc8rHWDrsOloDgEDlfbAYmN`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2018',
        youtubeId: 'Ek5jN1nZ270'
      }
    ]
  },
  { // AW-T2050R
    name: `Torre de Sonido Bluetooth Infinit 8000W`,
    sku: `AW-T2050R`,
    link: `/productos/AW-T2050R`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2050R/img/1.webp`,
      `/products/AW-T2050R/img/2.webp`,
      `/products/AW-T2050R/img/3.webp`,
      `/products/AW-T2050R/img/4.webp`,
      `/products/AW-T2050R/img/5.webp`,
      `/products/AW-T2050R/img/6.webp`,
      `/products/AW-T2050R/img/7.webp`,
      `/products/AW-T2050R/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",

    banners: [
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + "/banners/bateria2050.webp",
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: "Power Bank",
        img: fileserver + "/banners/powerbank.webp",
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
      {
        title: `Ecualizá tu música`,
        img: fileserver + `/banners/eq2050.webp`,
        desc: `¡Personalizá tus temas como mas te guste! El botón de Ecualización te permite controlar a tu antojo los Agudos y Graves para darle un sonido auténtico a tus fiestas.`,
      },
    ],
    shortDesc: `Fiesta donde vayas`,
    longDesc:
      "Una torre liviana, práctica y portatil, con un sonido potente. Sus deslumbrantes efectos de luces en forma de anillos le darán ese toque mágico a todos tus momentos.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/216-parlante-torre-bluetooth-power-bank-aiwa-aw-t2050r.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1130626632-parlante-bluetooth-portatil-recargable-aux-luces-aiwa-_JM#position=9&search_layout=grid&type=item&tracking_id=1676d959-feab-4482-9734-3a1551303b5a`,

    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `7000W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // Power Bank
        id: 13,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Doble Entrada Mic
        id: 27,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Batería Recargable
        id: 7,
        value: `Interna Recargable 7.4V / 3600mAh`,
      },
      {
        // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "7000W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Duración de batería
        id: 11,
        value: "8 horas (según su uso)",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos y Eco de Mic",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2",
      },
      {
        // Efectos
        id: 23,
        value: "De luces",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "26 x 59 x 30 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "37 x 73,3 x 25 cm",
      },
      {
        // Peso
        id: 18,
        value: "5,35 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354428",
      },
      {
        // Características Técnicas
        id: 22,
        value: "100-240V~ / 50-60Hz / 0.6A MAX / Clase II",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual de usuario
    ],
    certNo: `RA 4183955 E`,
    downloads: `https://drive.google.com/drive/folders/1Gzi7xqLXOCRYK42Zz3Jv3C_bDA7E8SBA`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 2050',
        youtubeId: 'WV8XWDCp0gk'
      }
    ]
  },
  { // AW-T506R-PB
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T506R-PB`,
    link: `/productos/AW-T506R-PB`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T506R-PB/img/1.webp`,
      `/products/AW-T506R-PB/img/2.webp`,
      `/products/AW-T506R-PB/img/3.webp`,
      `/products/AW-T506R-PB/img/4.webp`,
      `/products/AW-T506R-PB/img/5.webp`,
      `/products/AW-T506R-PB/img/6.webp`,
      `/products/AW-T506R-PB/img/7.webp`,
      `/products/AW-T506R-PB/img/8.webp`,
      `/products/AW-T506R-PB/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "4º Generación",

    banners: [
      {
        title: `¡Pasate a Horizontal!`,
        img: fileserver + `/banners/horizontal506.webp`,
        desc: "Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.",
      },
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: `Personalizá tus temas`,
        img: fileserver + "/banners/perillas506.webp",
        desc: "Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!",
      },
    ],
    shortDesc: `Más versatilidad`,
    longDesc:
      "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/210-parlante-torre-bluetooth-aiwa-25w-power-bank.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1126515733-parlante-torre-bluetooth-portatil-aiwa-luces-pb-_JM#position=29&search_layout=grid&type=item&tracking_id=b4aecdac-93f1-4e81-afb7-8c125de2f247`,

    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `6500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
        value: '5',
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Doble Entrada Mic
        id: 27,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Uso Horizontal
        id: 32,
      },
      {
        // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Power Bank
        id: 13,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2",
      },
      {
        // Efectos
        id: 23,
        value: "De luces",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      {
        // Peso
        id: 18,
        value: "4,2 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354350",
      },
      {
        // Uso
        id: 21,
        value: "Horizontal y vertical",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/188BCWXjwtJWRqXjNcz4YEuZVjhnEjcsA`,
    variants: [],
    videos: [
      {
        title: 'Presentacion 506',
        youtubeId: 'js2_QWJY7iQ'
      }
    ]
  },
  { // AW-T2202
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2202`,
    link: `/productos/AW-T2202`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2202/img/1.webp`,
      `/products/AW-T2202/img/2.webp`,
      `/products/AW-T2202/img/3.webp`,
      `/products/AW-T2202/img/4.webp`,
      `/products/AW-T2202/img/5.webp`,
      `/products/AW-T2202/img/6.webp`,
      `/products/AW-T2202/img/7.webp`,
      `/products/AW-T2202/img/8.webp`,
      `/products/AW-T2202/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    top: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: '6XV_gGCoxsU' }],
    banners: [
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2202.webp`,
        desc: "Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + `/banners/bateria2202.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: `Conectá y escuchá`,
        img: fileserver + `/banners/panel2x22.webp`,
        desc: `Posee Bluetooth, una entrada para micrófono, y una entrada auxiliar para que traigas tu sonido de donde quieras.`,
      },
    ],
    shortDesc: `Cargá y reproducí`,
    longDesc:
      "Gracias a su función Power Bank, cargá tus dispositivos mientras reproducís tus canciones favoritas. ¡Disfrutalo en interiores o exteriores! Posee batería recargable de larga duración.",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/336-parlante-torre-bluetooth-power-bank-8500w-aiwa-aw-t2202-7798111354664.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1318722040-parlante-torre-bluetooth-power-bank-8500w-aiwa-2202-_JM#position=26&search_layout=grid&type=item&tracking_id=b4aecdac-93f1-4e81-afb7-8c125de2f247`,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `8500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 8"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Entrada Mic
        id: 16,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Mobile Holder
        id: 29,
      },
      {
        // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Power Bank
        id: 13,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ruedas",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 24 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "33 x 62 x 33 cm",
      },
      {
        // EAN
        id: 19,
        value: "7798111354466",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `RA 4184359 E`,
    downloads: `https://drive.google.com/drive/folders/1J-Us5t2Ibxg-XO-EvggbG9Ks6KXUqYia`,
    variants: [],
  },
  { // AW-T2302
    name: `Torre de Sonido Bluetooth Infinit 8500W`,
    sku: `AW-T2302`,
    link: `/productos/AW-T2302`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2302/img/1.webp`,
      `/products/AW-T2302/img/2.webp`,
      `/products/AW-T2302/img/3.webp`,
      `/products/AW-T2302/img/4.webp`,
      `/products/AW-T2302/img/5.webp`,
      `/products/AW-T2302/img/6.webp`,
      `/products/AW-T2302/img/7.webp`,
      `/products/AW-T2302/img/8.webp`,
      `/products/AW-T2302/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    top: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: 'Ozv2rh2vL9M' }],
    banners: [
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2302.webp`,
        desc: "Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + `/banners/bateria2302.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: `Conectá y escuchá`,
        img: fileserver + `/banners/panel2x22.webp`,
        desc: `Posee Bluetooth, una entrada para micrófono, y una entrada auxiliar para que traigas tu sonido de donde quieras.`,
      },
    ],
    shortDesc: `Energía portátil`,
    longDesc: "Carga tus dispositivos mientras disfrutas de tus canciones favoritas en interiores o exteriores gracias a su función Power Bank. Además, su batería recargable de larga duración te permite usarlo por mucho tiempo sin preocupaciones.",
    //buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/340-parlante-torre-bluetooth-power-bank-8500w-aiwa-aw-t2302-7798111354688.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1318715826-parlante-torre-bluetooth-power-bank-8500w-aiwa-2302-_JM`,

    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `8500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 8"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Entrada Mic
        id: 16,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Mobile Holder
        id: 29,
      },
      {
        // Duracion Batería
        id: 8,
        value: `6 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Power Bank
        id: 13,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 8"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "8500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte y Ruedas",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 24 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "33 x 62 x 33 cm",
      },
      {
        // EAN
        id: 19,
        value: "7798111354664",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `RA 4184359 E`,
    downloads: `https://drive.google.com/drive/folders/1_RGkWGhk25SpmSqFyJgq56kcWI4O06EL`,
    variants: [],
  },
  { // AW-T2203
    name: `Torre de Sonido Bluetooth Infinit 12.500W`,
    sku: `AW-T2203`,
    link: `/productos/AW-T2203`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2203/img/1.webp`,
      `/products/AW-T2203/img/2.webp`,
      `/products/AW-T2203/img/3.webp`,
      `/products/AW-T2203/img/4.webp`,
      `/products/AW-T2203/img/5.webp`,
      `/products/AW-T2203/img/6.webp`,
      `/products/AW-T2203/img/7.webp`,
      `/products/AW-T2203/img/8.webp`,
      `/products/AW-T2203/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    top: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: '9R3RKfKgdro' }],
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `Conectá y escuchá`,
        img: fileserver + `/banners/panel2x23.webp`,
        desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2203.webp`,
        desc: "Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + `/banners/bateria2203.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
    ],
    shortDesc: `Potencia portátil`,
    longDesc: "Posee 12.500W PMPO de puro poder ¡Cuidado con las vibraciones! Es completamente portátil e incluye un micrófono inalámbrico para que lleves la fiesta con vos sin necesidad de cables.",
    //buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/339-parlante-torre-bluetooth-carry-on-12500w-aiwa-aw-t2203-7798111354671.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1318632103-parlante-torre-bluetooth-carry-on-12500w-aiwa-2203-_JM#position=20&search_layout=grid&type=item&tracking_id=b4aecdac-93f1-4e81-afb7-8c125de2f247`,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `12.500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 10"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Todos
        id: 40,
      },
      {
        // Entrada Guitarra
        id: 15,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Carry-on
        id: 9,
      },
      {
        // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`,
      },
      {
        // Doble Entrada Mic
        id: 16,
        value: 'placeholder',
      },
      {
        // Power Bank
        id: 13,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 10"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "12500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value:
          "Graves, Agudos, Eco y Volumen de Micrófono, Volumen de Guitarra",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono, Guitarra",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Otras características
        id: 15,
        value: "Manija extensible y Ruedas",
      },
      {
        // Medidas del producto
        id: 16,
        value: "34 x 73 x 32 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "38 x 78 x 38 cm",
      },
      {
        // EAN
        id: 19,
        value: "7798111354671",
      },
    ],
    includes: [
      1, // Mic Inalam
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1LWDgrClDIxr8AivGY2HqydFlypgeM-Qs`,
    variants: [],
  },
  { // AW-T2303
    name: `Torre de Sonido Bluetooth Infinit 12.500W`,
    sku: `AW-T2303`,
    link: `/productos/AW-T2303`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T2303/img/1.webp`,
      `/products/AW-T2303/img/2.webp`,
      `/products/AW-T2303/img/3.webp`,
      `/products/AW-T2303/img/4.webp`,
      `/products/AW-T2303/img/5.webp`,
      `/products/AW-T2303/img/6.webp`,
      `/products/AW-T2303/img/7.webp`,
      `/products/AW-T2303/img/8.webp`,
      `/products/AW-T2303/img/9.webp`,
    ].map((e) => fileserver + e),
    360: true,
    top: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: 'EvOkvW7QHQs' }],
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/microfono.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `Conectá y escuchá`,
        img: fileserver + `/banners/panel2x23.webp`,
        desc: `Posee una entrada para micrófono, una para guitarra, y una entrada auxiliar para que traigas tu sonido de donde quieras.`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2303.webp`,
        desc: "Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!.",
      },
      {
        title: `Batería de larga duración`,
        img: fileserver + `/banners/bateria2303.webp`,
        desc: `Increíble batería de larga duración para que nunca te quedes sin escuchar la música que más te gusta.`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/powerbank.webp`,
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
    ],
    shortDesc: `Poder portátil`,
    longDesc: "12.500W PMPO de pura potencia ¡Cuidado con las vibraciones! Además es 100% portátil e incluye micrófono inalámbrico ¡Armá la fiesta donde quieras sin necesidad de cables!",
    // buyLink: `https://tienda.aiwaelectronics.com.ar/torres-de-sonido/341-parlante-torre-bluetooth-carry-on-12500w-aiwa-2303-7798111354695.html`,
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1318472922-parlante-torre-bluetooth-carry-on-12500w-aiwa-2303-_JM#position=25&search_layout=grid&type=item&tracking_id=b4aecdac-93f1-4e81-afb7-8c125de2f247`,

    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `12.500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 10"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg Todos
        id: 40,
      },
      {
        // Entrada Guitarra
        id: 15,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Carry-on
        id: 9,
      },
      {
        // Duracion Batería
        id: 8,
        value: `5 horas (según su uso)`,
      },
      {
        // Doble Entrada Mic
        id: 16,
        value: 'placeholder',
      },
      {
        // Power Bank
        id: 13,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 10"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "12500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 12V / 7.5Ah",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Power Bank",
      },
      {
        // Reguladores
        id: 5,
        value:
          "Graves, Agudos, Eco y Volumen de Micrófono, Volumen de Guitarra",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono, Guitarra",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Otras características
        id: 15,
        value: "Manija extensible y Ruedas",
      },
      {
        // Medidas del producto
        id: 16,
        value: "34 x 73 x 32 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "38 x 78 x 38 cm",
      },
      {
        // EAN
        id: 19,
        value: "7798111354688",
      },
    ],
    includes: [
      1, // Micrófono inalámbrico
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `Q-AR-01590-T-2`,
    downloads: `https://drive.google.com/drive/folders/1uj7TxKU1pmHBsFiA1wndqz_H62iZA-6o`,
    variants: [],
  },
  { // AW-P2016A
    name: `Parlante portátil 5000W`,
    sku: `AW-P2016A`,
    link: `/productos/AW-P2016A`,
    line: `infinit`,
    categories: [101],
    imgs: [
      `/products/AW-P2016A/img/1.webp`,
      `/products/AW-P2016A/img/2.webp`,
      `/products/AW-P2016A/img/3.webp`,
      `/products/AW-P2016A/img/4.webp`,
      `/products/AW-P2016A/img/5.webp`,
      `/products/AW-P2016A/img/6.webp`,
      `/products/AW-P2016A/img/7.webp`,
      `/products/AW-P2016A/img/8.webp`,
      `/products/AW-P2016A/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: '8EzwWm7IzJI' }],
    banners: [
      {
        title: `Efectos de Luces`,
        img: fileserver + `/banners/luces2016.webp`,
        desc: `Elegí si queres acompañar tu música con sus brillantes luces rgb, posee varios modos para que seleccionés el que va más con vos.`,
      },
      {
        title: `Entrada para Micrófono`,
        img: fileserver + `/banners/mic2016a.webp`,
        desc: `Sumá un micrófono y disfrutá con tus amigos bailando y cantando toda la noche.`,
      },
      {
        title: `Controlá todo`,
        img: fileserver + `/banners/reg2016a.webp`,
        desc: `Posee una gran cantidad de reguladores para que tu música suene exactamente como esperás.`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2016.webp`,
        desc: `Con esta herramienta vas a poder conectar dos parlantes a través del bluetooth para conseguir un sonido estéreo verdadero. Apto para conectar dos parlantes P2016.`,
      },
      {
        title: `¡Llevalo a todos lados!`,
        img: fileserver + `/banners/portatil2016a.webp`,
        desc: `Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.`,
      },
    ],
    shortDesc: `Sonido compacto`,
    longDesc:
      "Imprescindible para tus salidas al aire libre. Altamente portátil, y ofrece un sonido fuerte e impecable. Sus luces RGB son la mejor compañía para cualquier canción.",
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1408446378-parlante-bluetooth-portatil-infinit-aiwa-5000w-a-_JM`,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `5000W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `1 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg G/A
        id: 22,
      },
      {
        // Reg Eco/Vol Mic
        id: 28,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 1,5"`,
      },
      {
        // Emp Transp
        id: 30,
      },
      {
        // Duracion Batería
        id: 7,
        value: `de 7.4v / 2400 mAh`,
      },
      {
        // Doble Entrada Mic
        id: 16,
      },
      {
        // Mobile Holder
        id: 29,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `1 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 1,5"`,
      },
      {
        // Potencia
        id: 2,
        value: "5000W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4v / 2400mAh",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Mic",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Medidas del producto
        id: 16,
        value: "24 x 29.5 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "28.6 x 37.6 x 27.6 cm",
      },
      { id: 18, value: "3 kg" }, // Peso
      { id: 9, value: "Bluetooth 5.0" }, // Bluetooth
      { id: 13, value: "TWS" }, // Funcion
      { id: 55, value: "Si" }, // Peso
      { id: 56, value: "Si" }, // Emp de Transp
      { id: 6, value: "Si, LED" }, // Mobile Holder
      {
        // EAN
        id: 19,
        value: "7798111354701",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `A-AR-01984-T0`,
    downloads: `https://drive.google.com/drive/folders/1fqvhM9smX2drb6kmQJZUYXmjO3KzzSgB`,
    variants: [],
  },
  { // AW-P2016B
    name: `Parlante portátil 5000W`,
    sku: `AW-P2016B`,
    link: `/productos/AW-P2016B`,
    line: `infinit`,
    categories: [101],
    imgs: [
      `/products/AW-P2016B/img/1.webp`,
      `/products/AW-P2016B/img/2.webp`,
      `/products/AW-P2016B/img/3.webp`,
      `/products/AW-P2016B/img/4.webp`,
      `/products/AW-P2016B/img/5.webp`,
      `/products/AW-P2016B/img/6.webp`,
      `/products/AW-P2016B/img/7.webp`,
      `/products/AW-P2016B/img/8.webp`,
      `/products/AW-P2016B/img/9.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",
    videos: [{ title: 'Presentación', youtubeId: 'UGvUocMmsMQ' }],
    banners: [
      {
        title: `Efectos de Luces`,
        img: fileserver + `/banners/luces2016.webp`,
        desc: `Elegí si queres acompañar tu música con sus brillantes luces rgb, posee varios modos para que seleccionés el que va más con vos.`,
      },
      {
        title: `Entrada para Micrófono`,
        img: fileserver + `/banners/mic2016b.webp`,
        desc: `Sumá un micrófono y disfrutá con tus amigos bailando y cantando toda la noche.`,
      },
      {
        title: `Controlá todo`,
        img: fileserver + `/banners/reg2016b.webp`,
        desc: `Posee una gran cantidad de reguladores para que tu música suene exactamente como esperás.`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/tws2016.webp`,
        desc: `Con esta herramienta vas a poder conectar dos parlantes a través del bluetooth para conseguir un sonido estéreo verdadero. Apto para conectar dos parlantes P2016.`,
      },
      {
        title: `¡Llevalo a todos lados!`,
        img: fileserver + `/banners/portatil2016b.webp`,
        desc: `Es ligero y posee batería interna, por lo que podrás escuchar música donde quiera que vayas.`,
      },
    ],
    shortDesc: `Sonido compacto`,
    longDesc: "Perfecto para tus aventuras al aire libre, este altavoz es altamente portátil y produce un sonido potente y de alta calidad. Además, sus luces RGB te ofrecen la mejor experiencia visual para acompañar cualquier canción.",
    buyLink: `https://www.mercadolibre.com.ar/parlante-bluetooth-portatil-infinit-aiwa-5000w-b-color-negro/p/MLA24776443?pdp_filters=official_store:2739%7Ccategory:MLA431428#searchVariation=MLA24776443&position=6&search_layout=grid&type=product&tracking_id=b4aecdac-93f1-4e81-afb7-8c125de2f247`,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `5000W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `1 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
      },
      {
        // Reg G/A
        id: 22,
      },
      {
        // Reg Eco/Vol Mic
        id: 28,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 1,5"`,
      },
      {
        // Emp Transp
        id: 30,
      },
      {
        // Duracion Batería
        id: 7,
        value: `de 7.4v / 2400 mAh`,
      },
      {
        // Doble Entrada Mic
        id: 16,
      },
      {
        // Mobile Holder
        id: 29,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `1 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 1,5"`,
      },
      {
        // Potencia
        id: 2,
        value: "5000W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4v / 2400mAh",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Volumen y Eco de Mic",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono",
      },
      {
        // Efectos
        id: 23,
        value: "De luces RGB",
      },
      {
        // Medidas del producto
        id: 16,
        value: "24 x 29.5 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "28.6 x 37.6 x 27.6 cm",
      },
      { id: 18, value: "3 kg" }, // Peso
      { id: 9, value: "Bluetooth 5.0" }, // Bluetooth
      { id: 13, value: "TWS" }, // Funcion
      { id: 55, value: "Si" }, // Peso
      { id: 56, value: "Si" }, // Emp de Transp
      { id: 6, value: "Si, LED" }, // Mobile Holder
      {
        // EAN
        id: 19,
        value: "7798111354718",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `A-AR-01984-T0`,
    downloads: `https://drive.google.com/drive/folders/1fqvhM9smX2drb6kmQJZUYXmjO3KzzSgB`,
    variants: [],
  },
  { // AW-T3010
    name: `Torre de Sonido Bluetooth Ring 14500W`,
    sku: `AW-T3010`,
    link: `/productos/AW-T3010`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T3010/img/1.webp`,
      `/products/AW-T3010/img/2.webp`,
      `/products/AW-T3010/img/3.webp`,
      `/products/AW-T3010/img/4.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: false,
    gen: "2º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/AW-T3010/1.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/AW-T3010/2.webp`,
        desc: `Conecta dos altavoces idénticos y descubre la potente sinergia del sonido estéreo real. ¡Te garantizamos que no querrás volver a disfrutar de tu música con un solo altavoz!`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/AW-T3010/5.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/AW-T3010/3.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/AW-T3010/4.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una Guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
    ],
    shortDesc: `Potente Sonido en Movimiento`,
    longDesc:
      "Disfruta de un sonido potente y envolvente que elevará tus fiestas al máximo nivel. Su diseño portátil con ruedas te permite llevarlo donde quieras.",
    buyLink: `https://www.mercadolibre.com.ar/torre-de-sonido-aiwa-14500w-portatil-con-bluetooth-color-negro/p/MLA28200518?pdp_filters=official_store:2739#wid=MLA1570101550&sid=search&searchVariation=MLA28200518&position=1&search_layout=grid&type=product&tracking_id=4b3bb98d-df38-4f85-aa89-892e84e6f641`,
    featuredFeatures: [
      { id: 2, value: `14500W PMPO` }, // Potencia
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 13 }, // Power Bank
      { id: 14 }, // Micrófono Inalámbrico
      { id: 21 }, // Entrada Guitarra y mic
      { id: 38 }, // Entrada Micrófono
      { id: 31 }, // Meganbass
      { id: 6 }, // Efectos de Luz
      { id: 7, value: `Interna Recargable 12V / 7.5Ah` },
      { id: 8, value: `6 horas` }, // Duracion Batería
      { id: 36 }, // Caja de Madera + ruedas
    ],
    features: [
      { id: 3, value: `2 de 10"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "14500W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 7.5Ah" },
      { id: 11, value: "Hasta 6 horas" },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      { id: 9, value: "Bluetooth 5.0" },
      { id: 13, value: "TWS, Power Bank, Mega Bass, Estilos EQ" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 8, value: "Auxiliar, Micrófono, Guitarra" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 23, value: "De luces" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "34 x 95 x 29,5 cm" },
      { id: 17, value: "40,3 x 104,3 x 35,3 cm" },
      { id: 18, value: "13,5 Kg" },
      { id: 19, value: "7798111354909" },
    ],
    includes: [
      1, // Mic inalambrico,
      3, // Cable aux
      12, // Cable de alimentacion
      9, // Manual
    ],
    // certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1CS-wU27f8iYqNqYkQE5JHVpgTyn0_-f7`,
    // variants: [],
    // videos: [
    //   {
    //     title: 'Presentacion 2008',
    //     youtubeId: 'l7nJWb8pC9o'
    //   }
    // ]
  },
  { // AW-T3012
    name: `Torre de Sonido Bluetooth Ring 14500W`,
    sku: `AW-T3012`,
    link: `/productos/AW-T3012`,
    line: `infinit`,
    categories: [102],
    imgs: [
      `/products/AW-T3012/img/1.webp`,
      `/products/AW-T3012/img/2.webp`,
      `/products/AW-T3012/img/3.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: false,
    gen: "2º Generación",
    banners: [
      {
        title: `Micrófono inalámbrico incluido`,
        img: fileserver + `/banners/AW-T3012/1.webp`,
        desc: `¿Karaoke? ¡de una! Con el micrófono incluido podrás tener increíbles sesiones de Karaoke con tus amigos. ¡Que la fiesta no pare!`,
      },
      {
        title: `True Wireless Stereo`,
        img: fileserver + `/banners/AW-T3012/2.webp`,
        desc: `Conectá dos parlantes iguales y experimentá la combinación de potencia y sonido estéreo real, ¡no querrás volver a usar sólo uno!`,
      },
      {
        title: `Power Bank`,
        img: fileserver + `/banners/AW-T3012/5.webp`,
        desc: `¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.`,
      },
      {
        title: `Ideal para fiestas y reuniones`,
        img: fileserver + `/banners/AW-T3012/3.webp`,
        desc: `Posee la potencia y autonomía suficiente para animar cualquier celebración, ¡además podés usarlo conectado y disfrutar por más tiempo!`,
      },
      {
        title: `Preparate para tocar`,
        img: fileserver + `/banners/AW-T3012/4.webp`,
        desc: "Ya que es portátil y pudiendo usar hasta 2 micrófonos y una Guitarra, permite realizar presentaciones en vivo en bares, celebraciones, espacios públicos, vía streaming... ¡donde quieras!",
      },
    ],
    shortDesc: `Potente Sonido en Movimiento`,
    longDesc:
      "Disfruta de un sonido potente y envolvente que elevará tus fiestas al máximo nivel. Su diseño portátil con ruedas te permite llevarlo donde quieras.",
    buyLink: `https://articulo.mercadolibre.com.ar/MLA-1606381026-torre-de-sonido-aiwa-16000w-portatil-con-bluetooth-color-neg-_JM#position=1&search_layout=grid&type=item&tracking_id=2719761a-719a-46f8-bf06-6a3bee84bd33`,
    featuredFeatures: [
      { id: 2, value: `16000W PMPO` }, // Potencia
      { id: 11 }, // TWS
      { id: 12 }, // Bluetooth
      { id: 13 }, // Power Bank
      { id: 14 }, // Micrófono Inalámbrico
      { id: 21 }, // Entrada Guitarra y mic
      { id: 38 }, // Entrada Micrófono
      { id: 31 }, // Megabass
      { id: 6 }, // Efectos de Luz
      { id: 7, value: `Interna Recargable 12V / 7.5Ah` },
      { id: 8, value: `Hasta 6 horas` }, // Duracion Batería
      { id: 36 }, // Caja de Madera + ruedas
    ],
    features: [
      { id: 3, value: `3 de 10"` },
      { id: 4, value: `1 de 2"` },
      { id: 2, value: "16000W PMPO" },
      { id: 10, value: "Interna Recargable 12V / 7.5Ah" },
      { id: 11, value: "Hasta 6 horas" },
      {
        id: 12,
        value: "En panel frontal alrededor del Woofer y en panel superior",
      },
      { id: 9, value: "Bluetooth 5.0" },
      { id: 13, value: "TWS, Power Bank, Mega Bass, Estilos EQ" },
      { id: 5, value: "Graves, Agudos y Eco de Micrófono" },
      { id: 8, value: "Auxiliar, Micrófono, Guitarra" },
      { id: 1, value: "Si, inalámbrico" },
      { id: 23, value: "De luces" },
      { id: 14, value: "Madera" },
      { id: 15, value: "Ruedas / Empuñaduras de Transporte" },
      { id: 16, value: "34 x 133 x 30,5 cm" },
      { id: 17, value: "40 x 104,3 x 35 cm" },
      { id: 18, value: "20,7 Kg" },
      { id: 19, value: "7798111354916" },
    ],
    includes: [
      1, // Mic inalambrico,
      3, // Cable aux
      12, // Cable de alimentacion
      9, // Manual
    ],
    // certNo: `Q-AR-01590-T-0`,
    downloads: `https://drive.google.com/drive/folders/1tNkaVGuA8XZVPiPwlIPsQYMxLzPjSNNv`,
    // variants: [],
    // videos: [
    //   {
    //     title: 'Presentacion 2008',
    //     youtubeId: 'l7nJWb8pC9o'
    //   }
    // ]
  },

  //DISCONTINUOS
  { // AW-T506R
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T506R`,
    link: `/productos/AW-T506R`,
    line: `infinit`,
    categories: [102, 110],
    imgs: [
      `/products/AW-T506R/img/1.webp`,
      `/products/AW-T506R/img/2.webp`,
      `/products/AW-T506R/img/3.webp`,
      `/products/AW-T506R/img/4.webp`,
      `/products/AW-T506R/img/5.webp`,
      `/products/AW-T506R/img/6.webp`,
      `/products/AW-T506R/img/7.webp`,
      `/products/AW-T506R/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "1º Generación",

    banners: [
      {
        title: `¡Pasate a Horizontal!`,
        img: fileserver + `/banners/horizontal506.webp`,
        desc: "Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.",
      },
      {
        title: `Conectividad sin límites`,
        img: fileserver + `/banners/panel506.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, Radio, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.`,
      },
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: `Personalizá tus temas`,
        img: fileserver + `/banners/perillas506nopb.webp`,
        desc: "Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!",
      },
      {
        title: `Accesorios incluidos`,
        img: fileserver + "/banners/micycontrol.webp",
        desc: "¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.",
      },
    ],
    shortDesc: `Más versatilidad`,
    longDesc:
      "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `6500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
        value: '5', // Cantidad de efectos
      },
      {
        // TF
        id: 26,
      },
      {
        // USB
        id: 33,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Uso Horizontal
        id: 32,
      },
      {
        // Duracion Batería
        id: 8,
        value: `8 horas (según su uso)`,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Radio
        id: 25,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS, Radio FM",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2, USB, MicroSD",
      },
      {
        // Efectos
        id: 23,
        value: "De luces",
      },
      {
        // Otras características
        id: 15,
        value: "Empuñadura de Transporte",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      {
        // Peso
        id: 18,
        value: "4,2 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111353988",
      },
      {
        // USO
        id: 21,
        value: "Horizontal y vertical",
      },
    ],
    includes: [
      2, // Mic cable
      7, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/18tQIPtI8gXQqVhDkp2vT8Lxb00Cqz9t9`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`],
  },
  { // AW-T265SF
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T265SF`,
    link: `/productos/AW-T265SF`,
    line: `infinit`,
    categories: [102, 110],
    imgs: [
      `/products/AW-T265SF/img/1.webp`,
      `/products/AW-T265SF/img/2.webp`,
      `/products/AW-T265SF/img/3.webp`,
      `/products/AW-T265SF/img/4.webp`,
      `/products/AW-T265SF/img/5.webp`,
      `/products/AW-T265SF/img/6.webp`,
      `/products/AW-T265SF/img/7.webp`,
      `/products/AW-T265SF/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "2º Generación",

    banners: [
      {
        title: `¡Pasate a Horizontal!`,
        img: fileserver + `/banners/horizontal506.webp`,
        desc: "Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.",
      },
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: `Conectividad sin límites`,
        img: fileserver + `/banners/panel265.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.`,
      },
      {
        title: `Personalizá tus temas`,
        img: fileserver + `/banners/perillas506nopb.webp`,
        desc: "Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!",
      },
      {
        title: `Accesorios incluidos`,
        img: fileserver + "/banners/micycontrol.webp",
        desc: "¡Armá tu Karaoke! Incluye micrófono con cable, y control remoto para que puedas gestionar tu música a distancia.",
      },
    ],
    shortDesc: `Más versatilidad`,
    longDesc:
      "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `6500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
        value: '5',
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Doble Entrada Mic
        id: 27,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Uso Horizontal
        id: 32,
      },
      {
        // Memoria
        id: 26,
      },
      {
        // USB
        id: 33,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Uso
        id: 21,
        value: "Horizontal y vertical",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2, USB, MicroSD",
      },
      {
        // Radio
        id: 20,
        value: "No",
      },
      {
        // Efectos
        id: 23,
        value: "De luces x5",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      {
        // Peso
        id: 18,
        value: "4,2 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354039",
      },
    ],
    includes: [
      2, // Mic cable
      7, // Control
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/19TuPLjfUNqNVzcWsP9bttgJ3SEH1lXEr`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`],
  },
  { // AW-T265SF-SA
    name: `Torre de Sonido Bluetooth Infinit 6500W`,
    sku: `AW-T265SF-SA`,
    link: `/productos/AW-T265SF-SA`,
    line: `infinit`,
    categories: [102, 110],
    imgs: [
      `/products/AW-T265SF-SA/img/1.webp`,
      `/products/AW-T265SF-SA/img/2.webp`,
      `/products/AW-T265SF-SA/img/3.webp`,
      `/products/AW-T265SF-SA/img/4.webp`,
      `/products/AW-T265SF-SA/img/5.webp`,
      `/products/AW-T265SF-SA/img/6.webp`,
      `/products/AW-T265SF-SA/img/7.webp`,
      `/products/AW-T265SF-SA/img/8.webp`,
    ].map((e) => fileserver + e),
    top: true,
    360: true,
    gen: "3º Generación",

    banners: [
      {
        title: `¡Pasate a Horizontal!`,
        img: fileserver + `/banners/horizontal506.webp`,
        desc: "Este parlante tiene la posibilidad de utilizarse como barra. Es decir que si tenés espacios reducidos o con otro tipo de disposición, podés siempre encontrar el lugar óptimo para tu parlante.",
      },
      {
        title: `Cantá en pareja`,
        img: fileserver + `/banners/doblemic2.webp`,
        desc: "Se pueden usar hasta 2 micrófonos al mismo tiempo y regulas el volumen independientemente de la música para hacer karaoke y divertirte con amigos.",
      },
      {
        title: `Conectividad sin límites`,
        img: fileserver + `/banners/panel265.webp`,
        desc: `¡Cuántas formas de reproducir música! Posee Bluetooth, puerto USB, entrada Auxiliar y puerto para tarjetas TF/MicroSD.`,
      },
      {
        title: `Personalizá tus temas`,
        img: fileserver + `/banners/perillas506nopb.webp`,
        desc: "Podés regular los graves y agudos, o bien modificar el eco del micrófono tan solo presionando y girarando las perillas en el panel de control. ¡Animate a probarlo, es súper fácil!",
      },
      {
        title: "Power Bank",
        img: fileserver + "/banners/powerbank.webp",
        desc: "¡Cargá tu celular o tu dispositivo mientras escuchás música! Ahora podés escuchar tu música favorita, sin que se le agote la batería a tu celular en medio de la fiesta.",
      },
    ],
    shortDesc: `Más versatilidad`,
    longDesc:
      "Práctico. Ideal para escuchar música en cualquier formato. Potente y altamente portable. Se puede utilizar tanto en vertical como en horizontal.",
    buyLink: ``,
    featuredFeatures: [
      {
        // Potencia
        id: 2,
        value: `6500W PMPO`,
      },
      {
        // Woofer
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Bluetooth
        id: 12,
      },
      {
        // TWS
        id: 11,
      },
      {
        // Efectos luz
        id: 6,
        value: '5',
      },
      {
        // Reg Eco y Vol Mic
        id: 28,
      },
      {
        // Reg Graves y Agudos
        id: 22,
      },
      {
        // Doble Entrada Mic
        id: 27,
      },
      {
        // Tweeter
        id: 35,
        value: `1 de 2"`,
      },
      {
        // Uso Horizontal
        id: 32,
      },
      {
        // Memoria
        id: 26,
      },
      {
        // USB
        id: 33,
      },
    ],
    features: [
      {
        // Woofers
        id: 3,
        value: `2 de 6,5"`,
      },
      {
        // Tweeters
        id: 4,
        value: `1 de 2"`,
      },
      {
        // Potencia
        id: 2,
        value: "6500W PMPO",
      },
      {
        // Batería
        id: 10,
        value: "Interna Recargable 7.4V / 3600mAh",
      },
      {
        // Luces
        id: 12,
        value: "En Panel Superior y alrededor del Woofer",
      },
      {
        // Uso
        id: 21,
        value: "Horizontal y vertical",
      },
      {
        // Conectividad
        id: 9,
        value: "Bluetooth 5.0",
      },
      {
        // Funciones
        id: 13,
        value: "TWS",
      },
      {
        // Reguladores
        id: 5,
        value: "Graves, Agudos, Eco y Volumen de Micrófono",
      },
      {
        // Entradas
        id: 8,
        value: "Auxiliar, Micrófono x2, USB, MicroSD",
      },
      {
        // Radio
        id: 20,
        value: "No",
      },
      {
        // Efectos
        id: 23,
        value: "De luces x5",
      },
      {
        // Medidas del producto
        id: 16,
        value: "25 x 59 x 23 cm",
      },
      {
        // Medidas de la caja
        id: 17,
        value: "30 x 64 x 28 cm",
      },
      {
        // Peso
        id: 18,
        value: "4,2 Kg",
      },
      {
        // EAN
        id: 19,
        value: "7798111354121",
      },
    ],
    includes: [
      3, // Aux
      5, // Fuente
      9, // Manual
    ],
    certNo: `00Q-AR-01223-T-1`,
    downloads: `https://drive.google.com/drive/folders/1aaXePdKCLlh-Qr1eLbemZO1lAyDNoG50`,
    variants: [`AW-T506R`, `AW-T265SF`, `AW-T265SF-SA`, `AW-T506R-PB`],
  },
];
