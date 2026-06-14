import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Audio Studio | Master & Enhance Vernacular Music Online",
  description: "Access our browser-based AI audio studio. Remaster existing audio, isolate vocals, auto-master to industry standards, or produce full podcasts and songs from scratch.",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
