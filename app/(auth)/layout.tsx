import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {ClerkProvider} from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kladi Collection Auth",
  description: "Look and feel your best! Shop our trendy styles for all occasions. High quality, amazing prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
