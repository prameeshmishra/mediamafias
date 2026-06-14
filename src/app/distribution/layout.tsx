import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Music Distribution | Publish Vernacular Audio via Media Mafias",
  description: "One-click distribution to global platforms. We take your regional and indie audio content to Spotify, YouTube, Apple Music, and localized vernacular streaming apps seamlessly.",
};

export default function DistributionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
