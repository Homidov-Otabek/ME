import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Otabek Homidov — Full-stack разработчик", template: "%s — Otabek Homidov" },
  description: "Портфолио full-stack и AI-разработчика из Душанбе: веб, мобильные приложения и автоматизация бизнеса.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
