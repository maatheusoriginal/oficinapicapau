import type { Metadata } from "next";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");
const siteUrl = configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://") ? configuredUrl : `https://${configuredUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pica Pau Motos — Gestão da Oficina",
  description: "Gestão simples de ordens de serviço, estoque e atendimento para a Pica Pau Motos.",
  openGraph: {
    title: "Pica Pau Motos — Gestão da Oficina",
    description: "Ordens de serviço, estoque e atendimento em um painel simples e objetivo.",
    url: "/",
    siteName: "Pica Pau Motos",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Pica Pau Motos — Gestão da Oficina" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pica Pau Motos — Gestão da Oficina",
    description: "Ordens de serviço, estoque e atendimento em um painel simples e objetivo.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
