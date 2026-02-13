import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.problem": "The Problem",
    "nav.solution": "Solution",
    "nav.outcomes": "Outcomes",
    "nav.integration": "Integration",
    "nav.demo": "Book a Demo",

    // Hero
    "hero.badge": "Sales Execution Infrastructure",
    "hero.title1": "Bring Control to",
    "hero.title2": "Your Sales.",
    "hero.sub": "Massify digitizes field sales and customer orders, centralizing all your sales channels into one structured system — reducing errors, eliminating manual work, and giving you real-time visibility in under 3 weeks.",
    "hero.cta1": "Book a Private Demo",
    "hero.cta2": "See How It Works",
    "hero.stat1.value": "<3",
    "hero.stat1.label": "Weeks to Deploy",
    "hero.stat2.value": "85%",
    "hero.stat2.label": "Fewer Order Errors",
    "hero.stat3.value": "0",
    "hero.stat3.label": "Systems Replaced",

    // Pain
    "pain.title1": "Your Sales Process Is",
    "pain.title2": "Slowing You Down.",
    "pain.sub": "Every day, revenue leaks through informal processes you've normalized. Here's what it actually looks like.",
    "pain.1.title": "Orders via WhatsApp",
    "pain.1.desc": "Critical revenue captured in chat threads that nobody can track, verify, or audit.",
    "pain.2.title": "Handwritten Notes",
    "pain.2.desc": "Reps writing orders on paper during visits. Re-entered later — if at all.",
    "pain.3.title": "Manual Re-Entry",
    "pain.3.desc": "Admin staff retyping every order into your system. Every keystroke, a risk.",
    "pain.4.title": "Errors Found Too Late",
    "pain.4.desc": "Wrong SKU, wrong quantity, wrong price. Discovered only after delivery.",
    "pain.5.title": "Constant Clarifications",
    "pain.5.desc": "Back-and-forth calls and messages to confirm what should have been clear from the start.",
    "pain.6.title": "Growing Complexity",
    "pain.6.desc": "More reps, more clients, more channels. Same broken process.",

    // Consequence
    "consequence.title1": "Fragmentation",
    "consequence.title2": "Costs You Money.",
    "consequence.sub": "Every manual step is an opportunity for error. Every error has a cost. The cost compounds silently.",
    "consequence.1.metric": "3–5%",
    "consequence.1.label": "Revenue lost to order errors annually",
    "consequence.1.detail": "Manual entry introduces wrong SKUs, quantities, and pricing that go unnoticed until credit notes pile up.",
    "consequence.2.metric": "12+ hrs",
    "consequence.2.label": "Admin rework per week",
    "consequence.2.detail": "Your back office spends more time fixing orders than processing them.",
    "consequence.3.metric": "Zero",
    "consequence.3.label": "Real-time visibility",
    "consequence.3.detail": "You can't protect margins you can't see. By the time reports arrive, the damage is done.",

    // Structural Weakness
    "structural.title1": "As You Grow,",
    "structural.title2": "Chaos Grows With You.",
    "structural.sub": "The issue isn't your team. It's the absence of structure. Growth without infrastructure compounds chaos.",
    "structural.1.title": "More Reps",
    "structural.1.subtitle": "More coordination overhead",
    "structural.1.desc": "Each new rep adds another layer of manual processes, phone calls, and WhatsApp threads to manage.",
    "structural.2.title": "More Clients",
    "structural.2.subtitle": "More fragmentation",
    "structural.2.desc": "Every new client relationship introduces another set of custom workflows and informal agreements.",
    "structural.3.title": "More Orders",
    "structural.3.subtitle": "More rework",
    "structural.3.desc": "A growing order volume exponentially increases the chance of wrong items, wrong prices, wrong quantities.",

    // Solution
    "solution.badge": "The Massify Platform",
    "solution.title1": "One Structured System for",
    "solution.title2": "All Your Sales.",
    "solution.sub": "Massify replaces fragmented order capture with a single, structured execution layer.",
    "solution.flow.1": "Field Rep",
    "solution.flow.2": "Customer",
    "solution.flow.3": "Inbound Orders",
    "solution.flow.4": "Structured Execution",
    "solution.1.title": "Digitized Rep Orders",
    "solution.1.desc": "Reps capture orders on-device during client visits. Structured, validated, instant.",
    "solution.2.title": "Customer Self-Service",
    "solution.2.desc": "Clients place orders anytime through a branded portal. No calls, no waiting.",
    "solution.3.title": "All Channels, One Flow",
    "solution.3.desc": "Every order — field, self-service, inbound — enters through a single structured pipeline.",
    "solution.4.title": "Real-Time Visibility",
    "solution.4.desc": "See every order the moment it happens. Track, approve, and act in real-time.",
    "solution.5.title": "Zero Manual Duplication",
    "solution.5.desc": "No more retyping. No more reconciliation. What enters is what executes.",

    // Upside
    "upside.title1": "What Changes When Sales Are",
    "upside.title2": "Structured.",
    "upside.sub": "Not growth promises. Operational stability and leverage you can measure from day one.",
    "upside.1.title": "Fewer Order Errors",
    "upside.1.desc": "Structured input eliminates the mistakes that create credit notes and returns.",
    "upside.2.title": "Less Admin Workload",
    "upside.2.desc": "No more retyping, cross-referencing, or chasing reps for clarification.",
    "upside.3.title": "Higher Rep Productivity",
    "upside.3.desc": "Reps spend time selling, not managing paperwork and phone tag.",
    "upside.4.title": "Clear Daily Visibility",
    "upside.4.desc": "Real-time dashboards show exactly what's happening across every channel.",
    "upside.5.title": "Grow Without Hiring Admin",
    "upside.5.desc": "Handle 2x the volume with the same administrative team.",
    "upside.6.title": "Protected Margins",
    "upside.6.desc": "When every order is validated at capture, margin leakage stops at the source.",

    // Data
    "data.title1": "Better Data.",
    "data.title2": "Better Decisions.",
    "data.sub": "When all orders are digitized and all channels are centralized, you see sales in real time, track performance clearly, plan inventory more accurately, and make decisions with confidence.",
    "data.badge": "From Structured Execution",
    "data.1.title": "Real-Time Sales View",
    "data.1.desc": "See sales as they happen across all channels and reps.",
    "data.2.title": "Performance Tracking",
    "data.2.desc": "Track rep, channel, and client performance with reliable data.",
    "data.3.title": "Inventory Accuracy",
    "data.3.desc": "Align stock levels with real-time demand signals.",
    "data.4.title": "Confident Planning",
    "data.4.desc": "Make decisions backed by actual execution data, not gut feeling.",
    "data.stat1": "Order Accuracy",
    "data.stat2": "Forecast Reliability",
    "data.stat3": "Admin Time Saved",
    "data.stat4": "Revenue Visibility",

    // Integration
    "integration.title1": "Fully Operational in",
    "integration.title2": "Under 3 Weeks.",
    "integration.sub": "No disruption to your current operations. No replacement of core systems. Fast implementation, immediate improvement.",
    "integration.w1": "Week 1",
    "integration.w1.title": "Configuration & Setup",
    "integration.w1.1": "System configuration",
    "integration.w1.2": "Product catalog import",
    "integration.w1.3": "User account creation",
    "integration.w2": "Week 2",
    "integration.w2.title": "Integration & Training",
    "integration.w2.1": "ERP/system connection",
    "integration.w2.2": "Team onboarding",
    "integration.w2.3": "Process alignment",
    "integration.w3": "Week 3",
    "integration.w3.title": "Go-Live & Optimization",
    "integration.w3.1": "Live order processing",
    "integration.w3.2": "Performance monitoring",
    "integration.w3.3": "Process fine-tuning",

    // Credibility
    "credibility.title1": "Why Distributors",
    "credibility.title2": "Trust Massify.",
    "credibility.1.title": "Built for Distributors",
    "credibility.1.desc": "Every feature is designed for distributors, wholesalers, importers, and manufacturers under 200 employees. Not repurposed enterprise software.",
    "credibility.2.title": "Proven Results",
    "credibility.2.desc": "85% fewer order errors. 90% less manual admin processing. Measurable impact within the first month of operation.",
    "credibility.3.title": "Infrastructure-Grade",
    "credibility.3.desc": "Massify is not a sales tool. It's execution infrastructure. Designed to carry the weight of your sales operations as you scale.",

    // Final CTA
    "cta.title1": "Build a Sales Operation That",
    "cta.title2": "Scales Without Chaos.",
    "cta.sub": "See how Massify structures your sales execution in under 3 weeks — with zero disruption to your current operations.",
    "cta.button": "Schedule Your Private Demo",

    // Footer
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
  },
  es: {
    // Navbar
    "nav.problem": "El Problema",
    "nav.solution": "Solución",
    "nav.outcomes": "Resultados",
    "nav.integration": "Implementación",
    "nav.demo": "Agendar Demo",

    // Hero
    "hero.badge": "Infraestructura de Ejecución Comercial",
    "hero.title1": "Toma el Control de",
    "hero.title2": "Tus Ventas.",
    "hero.sub": "Massify digitaliza la toma de pedidos en campo y los pedidos de tus clientes, centralizando todos tus canales de venta en un solo sistema estructurado — reduciendo errores, eliminando trabajo manual y dándote visibilidad en tiempo real en menos de 3 semanas.",
    "hero.cta1": "Agenda Tu Demo Privada",
    "hero.cta2": "Mira Cómo Funciona",
    "hero.stat1.value": "<3",
    "hero.stat1.label": "Semanas de Implementación",
    "hero.stat2.value": "85%",
    "hero.stat2.label": "Menos Errores en Pedidos",
    "hero.stat3.value": "0",
    "hero.stat3.label": "Sistemas Reemplazados",

    // Pain
    "pain.title1": "Tu Proceso de Ventas Te Está",
    "pain.title2": "Frenando.",
    "pain.sub": "Todos los días se te escapan ingresos por procesos informales que ya normalizaste. Así se ve en la realidad.",
    "pain.1.title": "Pedidos por WhatsApp",
    "pain.1.desc": "Ingresos críticos capturados en conversaciones que nadie puede rastrear, verificar ni auditar.",
    "pain.2.title": "Notas a Mano",
    "pain.2.desc": "Vendedores que anotan pedidos en papel durante las visitas. Se capturan después — si es que se capturan.",
    "pain.3.title": "Recaptura Manual",
    "pain.3.desc": "Tu equipo administrativo reescribiendo cada pedido en el sistema. Cada teclazo, un riesgo.",
    "pain.4.title": "Errores que se Descubren Tarde",
    "pain.4.desc": "SKU equivocado, cantidad equivocada, precio equivocado. Se descubre hasta después de la entrega.",
    "pain.5.title": "Aclaraciones Constantes",
    "pain.5.desc": "Llamadas y mensajes de ida y vuelta para confirmar lo que debió quedar claro desde el inicio.",
    "pain.6.title": "Complejidad Creciente",
    "pain.6.desc": "Más vendedores, más clientes, más canales. El mismo proceso roto.",

    // Consequence
    "consequence.title1": "La Fragmentación",
    "consequence.title2": "Te Cuesta Dinero.",
    "consequence.sub": "Cada paso manual es una oportunidad de error. Cada error tiene un costo. Y ese costo crece en silencio.",
    "consequence.1.metric": "3–5%",
    "consequence.1.label": "Ingreso perdido por errores en pedidos al año",
    "consequence.1.detail": "La captura manual mete SKUs, cantidades y precios equivocados que nadie nota hasta que se acumulan las notas de crédito.",
    "consequence.2.metric": "12+ hrs",
    "consequence.2.label": "Retrabajo administrativo por semana",
    "consequence.2.detail": "Tu back office dedica más tiempo a corregir pedidos que a procesarlos.",
    "consequence.3.metric": "Cero",
    "consequence.3.label": "Visibilidad en tiempo real",
    "consequence.3.detail": "No puedes proteger márgenes que no puedes ver. Cuando llegan los reportes, el daño ya está hecho.",

    // Structural Weakness
    "structural.title1": "Conforme Creces,",
    "structural.title2": "El Caos Crece Contigo.",
    "structural.sub": "El problema no es tu equipo. Es la falta de estructura. Crecer sin infraestructura multiplica el desorden.",
    "structural.1.title": "Más Vendedores",
    "structural.1.subtitle": "Más coordinación",
    "structural.1.desc": "Cada vendedor nuevo agrega otra capa de procesos manuales, llamadas y grupos de WhatsApp que gestionar.",
    "structural.2.title": "Más Clientes",
    "structural.2.subtitle": "Más fragmentación",
    "structural.2.desc": "Cada cliente nuevo trae consigo acuerdos informales y flujos de trabajo a la medida que nadie documenta.",
    "structural.3.title": "Más Pedidos",
    "structural.3.subtitle": "Más retrabajo",
    "structural.3.desc": "Un volumen creciente de pedidos multiplica exponencialmente los errores en productos, precios y cantidades.",

    // Solution
    "solution.badge": "La Plataforma Massify",
    "solution.title1": "Un Solo Sistema Estructurado para",
    "solution.title2": "Todas Tus Ventas.",
    "solution.sub": "Massify reemplaza la captura fragmentada de pedidos con una sola capa de ejecución estructurada.",
    "solution.flow.1": "Vendedor en Campo",
    "solution.flow.2": "Cliente",
    "solution.flow.3": "Pedidos Entrantes",
    "solution.flow.4": "Ejecución Estructurada",
    "solution.1.title": "Pedidos Digitalizados",
    "solution.1.desc": "Tus vendedores capturan pedidos en su dispositivo durante la visita. Estructurados, validados, al instante.",
    "solution.2.title": "Autoservicio para Clientes",
    "solution.2.desc": "Tus clientes hacen pedidos cuando quieran desde un portal con tu marca. Sin llamadas, sin esperas.",
    "solution.3.title": "Todos los Canales, Un Solo Flujo",
    "solution.3.desc": "Cada pedido — de campo, autoservicio o entrante — entra por un solo pipeline estructurado.",
    "solution.4.title": "Visibilidad en Tiempo Real",
    "solution.4.desc": "Ve cada pedido en el momento que sucede. Rastrea, aprueba y actúa en tiempo real.",
    "solution.5.title": "Cero Duplicación Manual",
    "solution.5.desc": "No más recaptura. No más conciliación. Lo que entra es lo que se ejecuta.",

    // Upside
    "upside.title1": "Qué Cambia Cuando las Ventas Son",
    "upside.title2": "Estructuradas.",
    "upside.sub": "No son promesas de crecimiento. Es estabilidad operativa y apalancamiento que puedes medir desde el día uno.",
    "upside.1.title": "Menos Errores en Pedidos",
    "upside.1.desc": "La captura estructurada elimina los errores que generan notas de crédito y devoluciones.",
    "upside.2.title": "Menos Carga Administrativa",
    "upside.2.desc": "Se acabó recapturar, cruzar información y perseguir vendedores para aclaraciones.",
    "upside.3.title": "Mayor Productividad del Vendedor",
    "upside.3.desc": "Tus vendedores dedican su tiempo a vender, no a manejar papeleo y llamadas.",
    "upside.4.title": "Visibilidad Diaria Clara",
    "upside.4.desc": "Dashboards en tiempo real que muestran exactamente qué pasa en cada canal.",
    "upside.5.title": "Crece Sin Contratar Más Admin",
    "upside.5.desc": "Maneja el doble de volumen con el mismo equipo administrativo.",
    "upside.6.title": "Márgenes Protegidos",
    "upside.6.desc": "Cuando cada pedido se valida al momento de la captura, la fuga de margen se detiene en el origen.",

    // Data
    "data.title1": "Mejores Datos.",
    "data.title2": "Mejores Decisiones.",
    "data.sub": "Cuando todos los pedidos están digitalizados y todos los canales centralizados, ves tus ventas en tiempo real, das seguimiento al desempeño, planeas inventario con precisión y tomas decisiones con confianza.",
    "data.badge": "De la Ejecución Estructurada",
    "data.1.title": "Vista de Ventas en Tiempo Real",
    "data.1.desc": "Ve las ventas conforme suceden en todos los canales y vendedores.",
    "data.2.title": "Seguimiento de Desempeño",
    "data.2.desc": "Mide el rendimiento por vendedor, canal y cliente con datos confiables.",
    "data.3.title": "Precisión de Inventario",
    "data.3.desc": "Alinea tus niveles de stock con señales de demanda en tiempo real.",
    "data.4.title": "Planeación con Confianza",
    "data.4.desc": "Toma decisiones respaldadas por datos reales de ejecución, no por intuición.",
    "data.stat1": "Precisión de Pedidos",
    "data.stat2": "Confiabilidad del Pronóstico",
    "data.stat3": "Tiempo Admin. Ahorrado",
    "data.stat4": "Visibilidad de Ingresos",

    // Integration
    "integration.title1": "Totalmente Operativo en",
    "integration.title2": "Menos de 3 Semanas.",
    "integration.sub": "Sin interrumpir tus operaciones actuales. Sin reemplazar tus sistemas. Implementación rápida, mejora inmediata.",
    "integration.w1": "Semana 1",
    "integration.w1.title": "Configuración e Instalación",
    "integration.w1.1": "Configuración del sistema",
    "integration.w1.2": "Importación de catálogo de productos",
    "integration.w1.3": "Creación de cuentas de usuario",
    "integration.w2": "Semana 2",
    "integration.w2.title": "Integración y Capacitación",
    "integration.w2.1": "Conexión con tu ERP/sistemas",
    "integration.w2.2": "Capacitación del equipo",
    "integration.w2.3": "Alineación de procesos",
    "integration.w3": "Semana 3",
    "integration.w3.title": "Arranque y Optimización",
    "integration.w3.1": "Procesamiento de pedidos en vivo",
    "integration.w3.2": "Monitoreo de desempeño",
    "integration.w3.3": "Ajustes finos al proceso",

    // Credibility
    "credibility.title1": "Por Qué los Distribuidores",
    "credibility.title2": "Confían en Massify.",
    "credibility.1.title": "Hecho para Distribuidores",
    "credibility.1.desc": "Cada funcionalidad está diseñada para distribuidores, mayoristas, importadores y fabricantes de menos de 200 empleados. No es software empresarial reciclado.",
    "credibility.2.title": "Resultados Comprobados",
    "credibility.2.desc": "85% menos errores en pedidos. 90% menos procesamiento manual. Impacto medible desde el primer mes de operación.",
    "credibility.3.title": "Nivel Infraestructura",
    "credibility.3.desc": "Massify no es una herramienta de ventas. Es infraestructura de ejecución. Diseñada para soportar el peso de tu operación comercial conforme creces.",

    // Final CTA
    "cta.title1": "Construye una Operación Comercial que",
    "cta.title2": "Escale Sin Caos.",
    "cta.sub": "Descubre cómo Massify estructura tu ejecución comercial en menos de 3 semanas — sin interrumpir tu operación actual.",
    "cta.button": "Agenda Tu Demo Privada",

    // Footer
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.contact": "Contacto",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const t = (key: string) => translations[lang]?.[key] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
