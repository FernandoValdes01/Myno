import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Myno | Tienda Mayorista",
    template: "%s | Myno Tienda Mayorista",
  },
  icons: {
    icon: "/logo.png",
  },
  description:
    "Plataforma especializada en ventas mayoristas para minimarkets, almacenes y tiendas.",
  keywords: [
    "mayorista",
    "minimarket",
    "ventas al por mayor",
    "almacenes",
    "distribuidor",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://mynomarket.vercel.app",
    title: "Myno Tienda Mayorista",
    description: "Compra al por mayor fácilmente con Myno.",
    images: ["/logo.png"],
    siteName: "Myno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myno Tienda Mayorista",
    description: "Compra al por mayor fácilmente con Myno.",
    images: [
      {
        alt: "Myno Logo",
        url: "/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]
          
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container px-4 py-8 mx-auto max-w-7xl">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
