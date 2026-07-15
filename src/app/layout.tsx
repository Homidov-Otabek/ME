import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Homidov Otabek — Инженер-разработчик", template: "%s — Homidov Otabek" },
  description: "Портфолио инженера-разработчика из Душанбе: мобильные приложения, веб-продукты, backend и AI-автоматизация.",
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
