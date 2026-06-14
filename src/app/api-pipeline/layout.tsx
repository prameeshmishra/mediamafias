import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vernacular Audio API | License Local Indie Music & Podcasts",
  description: "Integrate our decentralized Content API. Instantly access and license thousands of high-quality vernacular tracks, regional podcasts, and indie music directly into your platform.",
};

export default function ApiPipelineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
