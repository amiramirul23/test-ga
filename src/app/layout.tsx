import type { Metadata } from "next";
import { Courier_Prime, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const courier_Prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courier_Prime.className}>{children}</body>
    </html>
  );
}
