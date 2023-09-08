import { Chat } from "@/components/Chat";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Central Jarvis | Home",
};

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col min-h-screen bg-slate-700 items-center justify-center">
        <Chat />
      </div>

      <Footer />
    </>
  );
}
