/**
 * Real data and verified facts for LoLimpiaMama
 * Strict adherence to client facts: NO invented statistics, prices, or schedules.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  chips: string[];
  imageUrl: string;
  imageAlt: string;
  fallbackIcon: 'mattress' | 'sofa' | 'rug' | 'babySeat';
  whatsappText: string;
  approxDuration: string;
  whatToPrepare: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: string;
  alt: string;
}

export const PHONE_NUMBER = '+56 9 3411 2742';
export const PHONE_TEL = '+56934112742';
export const WHATSAPP_BASE = 'https://wa.me/56934112742?text=';

export const getWhatsAppUrl = (text: string) => {
  return `${WHATSAPP_BASE}${encodeURIComponent(text)}`;
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/lolimpiamama',
  tiktok: 'https://www.tiktok.com/@lolimpiamama',
  googleMaps: 'https://maps.google.com/?cid=17614917631317436733',
};

export const BRAND_ASSETS = {
  logo: 'https://www.lolimpiamama.cl/wp-content/uploads/2024/12/LOGOS-03-1-e1733265575410-804x1024.png',
  favicon: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/01/cropped-512pixel-270x270.png',
  karolPhoto: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-09-at-11.25.21-768x1024.jpeg',
  mattressHero: 'https://www.lolimpiamama.cl/wp-content/uploads/2026/03/1.png',
  mattressService: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/10/5.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'colchones',
    title: 'Limpieza de colchones',
    shortDesc: 'Eliminamos ácaros, alérgenos, grasa corporal y sudor para un descanso más sano.',
    fullDesc: 'Dos modalidades: En seco (20-40 min, no moja, cama lista de inmediato, ambas caras y costados) o Desmanchado complementario (agua + shampoo biodegradable para manchas y olores). Ayuda a disminuir la congestión nocturna, picazón y tos.',
    chips: ['En seco: 20–40 min', 'Desmanchado opcional', 'Ambas caras y costados'],
    imageUrl: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/10/5.jpg',
    imageAlt: 'Colchón en proceso de limpieza profunda',
    fallbackIcon: 'mattress',
    whatsappText: 'Hola Karol, quiero cotizar limpieza de colchón. Es de [__] plazas y me interesa: en seco / desmanchado.',
    approxDuration: '30 min a 1 h',
    whatToPrepare: 'Cama despejada, sin sábanas ni cubrecolchón.',
  },
  {
    id: 'muebles',
    title: 'Muebles y tapices',
    shortDesc: 'Limpieza en seco pliegue por pliegue y, luego, shampoo biodegradable para manchas y olores.',
    fullDesc: 'Paso 1: aspiración profunda en seco pliegue por pliegue para sacar grasa corporal, polvo y ácaros. Paso 2: humectación mínima con shampoo biodegradable para emparejar tono, remover residuos y eliminar olores.',
    chips: ['2 pasos profundos', 'Shampoo biodegradable', 'Protege tus pisos'],
    imageUrl: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.15.jpeg',
    imageAlt: 'Sillón tapizado durante limpieza profunda',
    fallbackIcon: 'sofa',
    whatsappText: 'Hola Karol, quiero cotizar limpieza de un mueble/sillón. Te envío una foto.',
    approxDuration: '30 min a 3 h',
    whatToPrepare: 'Espacio para moverlos, o se limpian con total prolijidad donde están.',
  },
  {
    id: 'alfombras',
    title: 'Limpieza de alfombras',
    shortDesc: 'Aspirado profundo por ambas caras y limpieza húmeda mínima por la cara superior.',
    fullDesc: 'Paso 1: aspiración meticulosa por ambas caras (base y fibra superior). Paso 2: humectación mínima con shampoo biodegradable exclusivamente en la cara superior.',
    chips: ['Aspirado ambas caras', 'Mínima humedad', 'Decorativas y muro a muro'],
    imageUrl: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.20.jpeg',
    imageAlt: 'Alfombra con contraste antes y después de limpieza',
    fallbackIcon: 'rug',
    whatsappText: 'Hola Karol, quiero cotizar limpieza de alfombra. Mide aprox. [__] y te envío una foto.',
    approxDuration: '1 h a 2 h',
    whatToPrepare: 'Sin muebles encima y con al menos 1/3 de espacio libre alrededor (o habitación despejada si es muro a muro).',
  },
  {
    id: 'sillas-ninos',
    title: 'Sillas de niños y coches',
    shortDesc: 'Migas, manchas, polvo y ácaros fuera, con productos seguros para la piel de tus hijos.',
    fullDesc: 'Mismo cuidado y prolijidad que los tapices familiares. Eliminamos residuos de comida, polvo y ácaros en sillas de retención infantil (SRI) y coches de paseo, con productos europeos inocuos y no tóxicos.',
    chips: ['Inocuo para bebés', 'Seguro para la piel', 'Sillas SRI y coches'],
    imageUrl: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.22-1.jpeg',
    imageAlt: 'Silla de retención infantil y coche de bebé higienizado',
    fallbackIcon: 'babySeat',
    whatsappText: 'Hola Karol, quiero cotizar limpieza de silla de auto/coche. El modelo es [__].',
    approxDuration: '45 min a 1 h 30 min',
    whatToPrepare: 'Silla o coche retirado del vehículo y listo en un espacio con enchufe disponible.',
  },
];

export const OTHER_SERVICES = [
  { name: 'Tapizado de vehículos', query: 'tapiz de vehículo' },
  { name: 'Cortinas roller', query: 'cortinas roller' },
  { name: 'Hongos y fragüe', query: 'remoción de hongos y fragüe' },
  { name: 'Limpieza de plantas', query: 'limpieza de plantas' },
  { name: 'Playmat infantil', query: 'playmat' },
];

export const REAL_REVIEWS = [
  {
    quote: 'Todo quedó súper, me encantó tu trabajo, con quien pueda te recomendaré.',
    author: 'Reseña de cliente',
    service: 'Limpieza de tapices',
  },
  {
    quote: 'Recién pude ver mi alfombra y quedó impecable, te pasaste.',
    author: 'Reseña de cliente',
    service: 'Limpieza de alfombra',
  },
  {
    quote: 'Dormimos como bebés esta noche, ¡qué maravilla!',
    author: 'Reseña de cliente',
    service: 'Limpieza de colchón en seco',
  },
  {
    quote: 'Muchas gracias. Quedé muy conforme y por supuesto muy recomendada.',
    author: 'Reseña de cliente',
    service: 'Servicio a domicilio',
  },
  {
    quote: 'Los sillones quedaron muy muy limpios, como nuevos. Excelente tu servicio. 100% recomendable.',
    author: 'Reseña de cliente',
    service: 'Limpieza de sillones',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.09.jpeg',
    title: 'Colchón — antes y después',
    category: 'Colchones',
    alt: 'Colchón con resultado visible antes y después de limpieza profunda',
  },
  {
    id: 'g-2',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.15.jpeg',
    title: 'Sillón tapizado — remoción de suciedad',
    category: 'Muebles',
    alt: 'Sillón tapizado durante tratamiento de limpieza en seco y shampoo',
  },
  {
    id: 'g-3',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.15-1.jpeg',
    title: 'Detalle de tela y pliegues en sillón',
    category: 'Muebles',
    alt: 'Detalle de limpieza profunda pliegue por pliegue en tapiz',
  },
  {
    id: 'g-4',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.20.jpeg',
    title: 'Alfombra — aspirado y desmanchado',
    category: 'Alfombras',
    alt: 'Alfombra decorativa con fibra restaurada tras aspirado bilateral',
  },
  {
    id: 'g-5',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.20-1.jpeg',
    title: 'Alfombra — detalle de fibra',
    category: 'Alfombras',
    alt: 'Primer plano de fibra de alfombra limpia y libre de polvo',
  },
  {
    id: 'g-6',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.21.jpeg',
    title: 'Colchón familiar — higienización integral',
    category: 'Colchones',
    alt: 'Colchón de dos plazas higienizado en seco',
  },
  {
    id: 'g-7',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.22.jpeg',
    title: 'Tapiz y cojinería',
    category: 'Muebles',
    alt: 'Cojines y respaldos tratados con prolijidad',
  },
  {
    id: 'g-8',
    url: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.22-1.jpeg',
    title: 'Silla de niños (SRI) impecable',
    category: 'Sillas de niños',
    alt: 'Silla de retención infantil higienizada sin residuos ni migas',
  },
];

export const QUOTE_CHANNELS = [
  {
    id: 'colchones',
    title: 'Colchones',
    subtitle: 'Plazas y modalidad',
    instructions: 'Envía: cantidad de plazas (1, 1.5, 2, King o Super King) y si prefieres modalidad en seco o desmanchado.',
    message: 'Hola Karol, quiero cotizar limpieza de colchón. Es de [__] plazas y me interesa: en seco / desmanchado.',
    icon: 'mattress',
  },
  {
    id: 'muebles',
    title: 'Muebles y tapices',
    subtitle: 'Foto o link de referencia',
    instructions: 'Envía: una foto del mueble completo (sillón, sitial, comedor) o el link del modelo si lo tienes.',
    message: 'Hola Karol, quiero cotizar limpieza de un mueble/sillón. Te envío una foto.',
    icon: 'sofa',
  },
  {
    id: 'alfombras',
    title: 'Alfombras',
    subtitle: 'Foto y medidas aprox.',
    instructions: 'Envía: foto de la alfombra y sus medidas aproximadas (largo × ancho en metros).',
    message: 'Hola Karol, quiero cotizar limpieza de alfombra. Mide aprox. [__] y te envío una foto.',
    icon: 'rug',
  },
  {
    id: 'sillas',
    title: 'Sillas y coches de niños',
    subtitle: 'Modelo o foto',
    instructions: 'Envía: foto o modelo de la silla de auto (SRI) o coche de paseo.',
    message: 'Hola Karol, quiero cotizar limpieza de silla de auto/coche. El modelo es [__].',
    icon: 'babySeat',
  },
  {
    id: 'vehiculos',
    title: 'Tapizado de vehículos',
    subtitle: 'Modelo del auto',
    instructions: 'Envía: marca, modelo y año del vehículo para estimar el trabajo.',
    message: 'Hola Karol, quiero cotizar limpieza de tapiz de vehículo. El modelo es [__].',
    icon: 'car',
  },
  {
    id: 'cortinas',
    title: 'Cortinas roller',
    subtitle: 'Medidas aprox.',
    instructions: 'Envía: cantidad y medidas estimadas (alto × ancho) de cada cortina roller.',
    message: 'Hola Karol, quiero cotizar limpieza de cortinas roller. Miden aprox. [__].',
    icon: 'curtain',
  },
];

export const FAQS = [
  {
    question: '¿Qué es la limpieza profunda?',
    answer: 'Es un proceso que va más allá de la aspiración superficial habitual: extrae ácaros, alérgenos, polvo acumulado, células muertas y residuos orgánicos en el interior de tapices, colchones y alfombras con maquinaria profesional especializada y shampoo biodegradable formulado para textiles.',
  },
  {
    question: '¿Qué productos usan en mi casa?',
    answer: 'Utilizamos detergentes y complementos biodegradables de origen español con rigurosa certificación europea. Son libres de químicos agresivos, no tóxicos y completamente seguros para bebés, niños, adultos mayores y mascotas.',
  },
  {
    question: '¿Queda sucio o con agua el lugar de trabajo?',
    answer: 'Para nada. Cada máquina utiliza como máximo 7 litros de agua de grifo en condiciones normales. Cuidamos cada rincón: es apto para pisos delicados (flotantes, madera o porcelanato) y si cae alguna gota, se seca de inmediato con microfibra. Trabajamos dentro de la casa o en patio/terraza, solo necesitamos un enchufe.',
  },
  {
    question: '¿Qué pasa con las manchas?',
    answer: 'Todas las manchas se trabajan una a una con paciencia y técnica. En la modalidad de desmanchado, eliminamos las manchas por completo en el 90% de los casos y los olores en el 100%. Sin embargo, es importante ser transparentes: manchas muy antiguas, con tinte, aceite, slime o plumón permanente pueden atenuarse sin desaparecer completamente porque ya tiñeron la fibra.',
  },
  {
    question: '¿Cuánto demora el servicio?',
    answer: 'Colchones: de 30 minutos a 1 hora (20 a 40 minutos en seco). Muebles y tapices: desde 30 minutos hasta 3 horas según tamaño y plazas. Alfombras: entre 1 y 2 horas según metraje.',
  },
  {
    question: '¿Cuántas personas van a mi domicilio?',
    answer: 'Karol realiza el trabajo personalmente en tu domicilio con el máximo compromiso y prolijidad. Si el domicilio es muy extenso o contempla múltiples áreas, suma a una persona de apoyo de su entera confianza.',
  },
  {
    question: '¿Puedo limpiar algo que no está en la lista principal?',
    answer: '¡Por supuesto! En LoLimpiaMama decimos con orgullo que "el límite no existe": hemos limpiado tapicería automotriz, cortinas roller, playmats infantiles, remoción de hongos en fragües e incluso plantas ornamentales de interior. Escríbeme por WhatsApp y lo revisamos.',
  },
];
