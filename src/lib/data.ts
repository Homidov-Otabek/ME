export type Project = {
  title: string;
  url?: string;
  description: string;
  category: "Web" | "Mobile" | "Business";
  tags: string[];
};

export const projects: Project[] = [
  { title: "Apps.tj", url: "https://apps.tj/", description: "Маркетплейс приложений и цифровых сервисов с полноценной продуктовой архитектурой.", category: "Web", tags: ["Marketplace", "Next.js", "Full-stack"] },
  { title: "Paykar Dist", url: "https://paykardist.tj/", description: "ERP-система для управления дистрибуцией, складом и логистическими потоками.", category: "Business", tags: ["ERP", "SQL", "Enterprise"] },
  { title: "Paribeauty", url: "https://gift.paribeauty.tj/", description: "Экосистема для индустрии красоты: веб-портал, backend и Android-приложение.", category: "Mobile", tags: ["Kotlin", "React", "Mobile"] },
  { title: "Seller TessMarket", description: "Платформа для управления продажами, товарами и операциями продавцов.", category: "Business", tags: ["E-commerce", "Platform", "Web"] },
  { title: "Dex.tj", description: "Образовательная платформа для системного изучения немецкого языка.", category: "Web", tags: ["Education", "LMS", "Web"] },
  { title: "Russian Baths", url: "https://russianbaths.pro/", description: "Сервис бронирования и управления услугами отдыха.", category: "Web", tags: ["Booking", "Frontend", "Web"] },
  { title: "Paykar 2026", url: "https://2026.paykar.tj/", description: "Корпоративный портал для долгосрочного планирования в ритейле.", category: "Business", tags: ["Next.js", "Corporate", "Strategy"] },
  { title: "Flip Park", description: "Система управления операциями развлекательного комплекса.", category: "Business", tags: ["Management", "Backend", "Commercial"] },
  { title: "Grand Babyshop", description: "Интегрированная система управления розничной торговлей и остатками.", category: "Business", tags: ["Retail", "Inventory", "Full-stack"] },
  { title: "Pari Laundry", description: "Автоматизация бизнес-процессов для сети сервисных точек.", category: "Business", tags: ["Service", "Backend", "Automation"] },
  { title: "StockFlow", description: "Android-приложение для складской логистики и сканирования товаров.", category: "Mobile", tags: ["Android", "Kotlin", "Logistics"] },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"] },
  { group: "Backend", items: ["Python", "PHP", "REST API", "SQL", "Firebase"] },
  { group: "Mobile", items: ["Android", "Kotlin", "Mobile architecture", "Device APIs"] },
  { group: "AI & automation", items: ["LLM APIs", "RAG", "Computer Vision", "DAHUA SDK", "ML analytics"] },
];

export const experience = [
  { period: "2023 — сейчас", company: "Ieram · Logistics", role: "Full-stack Developer & AI Engineer", description: "Автоматизация логистики, интеграция AI-моделей и разработка систем мониторинга с использованием DAHUA.", stack: ["Next.js", "Python", "Computer Vision", "LLM API"] },
  { period: "2021 — 2023", company: "Freelance · Product teams", role: "Web & Mobile Developer", description: "Разработка веб-продуктов, backend-систем и Android-приложений для ритейла, сервисов и e-commerce.", stack: ["React", "Kotlin", "PHP", "Firebase"] },
];
