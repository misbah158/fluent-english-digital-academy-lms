import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
export const metadata: Metadata = { title: { default: "Fluent English Digital Academy", template: "%s | Fluent English Digital Academy" }, description: "Premium online English academy for spoken English, IELTS preparation, Cambridge English, kids programs, and future AI-powered practice.", openGraph: { title: "Fluent English Digital Academy", description: "Speak English fluently, build confidence, and transform your future.", type: "website" } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body className={geist.variable}><Navbar/>{children}<Footer/></body></html>; }
