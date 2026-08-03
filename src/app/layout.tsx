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
    default: "Magazine Gerrayd | Landing page oficial",
    template: "%s | Magazine Gerrayd",
  },
  description:
    "Landing page oficial do Magazine Gerrayd com foco em ofertas selecionadas, parceiros conhecidos e acesso rapido ao grupo oficial.",
  openGraph: {
    title: "Magazine Gerrayd",
    description:
      "Landing page oficial com parceiros conhecidos, proposta clara e CTA direto para o grupo.",
    siteName: "Magazine Gerrayd",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Gerrayd",
    description:
      "Landing page com foco em conversao, confianca e apresentacao clara do Magazine Gerrayd.",
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
