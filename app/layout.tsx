import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Next Stripe Integrtation",
  description: "A NextJs app to examination advanced stripe integration ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
