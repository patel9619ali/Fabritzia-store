import type { Metadata } from "next";
import Head from "next/head"; // Import Head
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./site/Header";
import Footer from "./site/Footer";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Fabritzia App",
  description: "Fabritzia App | Clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head> 
      <link rel="icon" href="/favicon.png" />
      </Head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
