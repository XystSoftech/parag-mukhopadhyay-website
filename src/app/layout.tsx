import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Adv. Parag Mukhopadhyay",
  description:
    "Advocate Parag Mukhopadhyay: Renowned criminal lawyer with vast academic qualifications.Senior Public Prosecutor, Govt. of West Bengal, active in Calcutta High Court.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-merriweather">
        <ChakraProvider>{children} </ChakraProvider>
      </body>
    </html>
  );
}
