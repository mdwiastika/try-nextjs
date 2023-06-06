import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 bg-white/60 backdrop-blur-md">
          <Navbar></Navbar>
        </header>
        {children}
      </body>
    </html>
  );
}
