import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radio Streaming Software | Future Radio Technology | Media Mafias",
  description: "Leverage our Radio as SaaS infrastructure. We are the streaming software technology provider empowering creators to build the digital audio network of the future.",
  keywords: ["radio streaming software provider", "cloud radio technology", "streaming software technology provider", "decentralized audio", "radio as saas"]
};

export default function CreateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
