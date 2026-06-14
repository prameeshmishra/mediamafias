import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Audio Production & Podcasting | Media Mafias Creator Academy",
  description: "Join the Media Mafias Creator Academy. Learn vernacular audio production, mastering, and monetization. Upload your projects and claim your digital certificate.",
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
