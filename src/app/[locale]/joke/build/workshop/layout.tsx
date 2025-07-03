import { ReactNode } from "react";

type WorkshopLayoutProps = {
  children: ReactNode;
  preview: ReactNode;
  feedback: ReactNode;
};
export default function WorkshopLayout({
  children,
  preview,
  feedback,
}: WorkshopLayoutProps) {
  return (
    <main className="grid grid-cols-2 gap-2 justify-items-stretchz  ">
      <section className="row-span-2 border-2 border-dashed ">
        {children}
      </section>
      <section className="border-2 border-dashed">{preview}</section>
      <section className="border-2 border-dashed">{feedback}</section>
    </main>
  );
}
