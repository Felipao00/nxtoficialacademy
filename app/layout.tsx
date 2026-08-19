import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NXT AI Pack — 20 IAs Poderosas",
  description: "Descubra 20 IAs poderosas para produtividade, criação de conteúdo, programação e muito mais. Acesso pela NXT Academy.",
  icons: {
    icon: "/logo/favicon.svg",
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
      <head>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y50ubvknj3");
          `}
        </Script>
      </head>
      <body className={sora.className}>{children}</body>
    </html>
  );
}