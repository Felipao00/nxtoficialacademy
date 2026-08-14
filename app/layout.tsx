import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXT AI Pack — 20 IAs Poderosas",
  description: "Descubra 20 IAs poderosas para produtividade, criação de conteúdo, programação e muito mais. Acesso pela NXT Academy.",
  icons: {
    icon: "/logo/nxt-academy.png",
  },
  openGraph: {
    title: "NXT AI Pack — 20 IAs Poderosas",
    description: "Descubra 20 IAs poderosas para produtividade, criação de conteúdo, programação e muito mais.",
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