import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magazinegerrayd.com.br"),
  title: {
    default: "Magazine Gerrayd | As melhores ofertas em um so lugar",
    template: "%s | Magazine Gerrayd",
  },
  description:
    "Plataforma de ofertas afiliadas do Magazine Gerrayd com achadinhos, cupons e produtos selecionados da Amazon, Shopee, Mercado Livre e Magalu.",
  openGraph: {
    title: "Magazine Gerrayd",
    description:
      "As melhores ofertas em um so lugar, com curadoria e atualizacao frequente.",
    siteName: "Magazine Gerrayd",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Gerrayd",
    description:
      "Achadinhos, cupons e ofertas selecionadas com foco em economia e confianca.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-brand-blue-dark">
        {children}
      </body>
    </html>
  );
}
