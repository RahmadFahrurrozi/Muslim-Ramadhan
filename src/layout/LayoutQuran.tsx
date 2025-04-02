import { ReactNode } from "react";
import HeaderQuran from "../components/fragments/Header";

interface LayoutQuranProps {
  children: ReactNode;
}

const LayoutQuran = ({ children }: LayoutQuranProps) => {
  return (
    <>
      <HeaderQuran />

      {/* Desktop layout */}
      <div className="hidden lg:block bg-[#F8FFF6] min-h-screen">
        <section className="p-8 grid grid-cols-4 gap-6">{children}</section>
      </div>
    </>
  );
};

export default LayoutQuran;
