import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXT AI PACK — Ferramentas de IA para sua produtividade",
  description: "Um pack de ferramentas de Inteligência Artificial selecionadas para você descobrir novas possibilidades, economizar tempo e tornar sua rotina muito mais produtiva.",
  openGraph: {
    title: "NXT AI PACK — Ferramentas de IA para sua produtividade",
    description: "Um pack de ferramentas de Inteligência Artificial selecionadas para você descobrir novas possibilidades, economizar tempo e tornar sua rotina muito mais produtiva.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>{children}</body>
    </html>
  );
}