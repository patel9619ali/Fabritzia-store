import type { Metadata } from "next";
import Head from "next/head"; // Import Head
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./site/Header";
import Footer from "./site/Footer";
import Link from "next/link";
import {SessionProvider} from "next-auth/react"



export const metadata: Metadata =  {
  title: {
    default: "Fabritzia: Trendy and Affordable Clothing for Every Occasion | Best Online Shopping Site in India",
    template: "%s | Best Online Shopping Site in India"
  },
  description: 'Learn more about Fabritzia, where we are dedicated to providing stylish and affordable clothing for everyone. Our mission is to offer a diverse range of fashionable pieces that empower you to express your unique style. Discover our story and what drives us to deliver quality and comfort in every piece.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
