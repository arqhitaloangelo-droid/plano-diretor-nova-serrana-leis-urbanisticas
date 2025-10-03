import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plano Diretor Nova Serrana - Chat AI",
  description: "Assistente de IA para consulta de legislação urbanística de Nova Serrana/MG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}