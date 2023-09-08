import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Central Jarvis | Login",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
