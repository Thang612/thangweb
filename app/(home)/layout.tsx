// src/app/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Goldman } from 'next/font/google';

export const goldman = Goldman({subsets:['latin'], weight:["400","700"]});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

          <body className={goldman.className}>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
        );
}
