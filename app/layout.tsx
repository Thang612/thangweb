// src/app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export const metadata = {
  title: "MyBlog",
  description: "Personal blog built with Next.js 13, TypeScript, and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

          <body>
            <Header />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
        );
}
