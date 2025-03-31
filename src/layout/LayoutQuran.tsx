import QuranBoxedLeft from "../components/fragments/QuranBoxedLeft";
import SurahHeader from "../components/fragments/SurahHeader";

const LayoutQuran = () => {
  return (
    <section className="grid grid-flow-col grid-cols-1 lg:grid-cols-4 gap-4 p-8 bg-[#F8FFF6]">
      <div className="col-span-1">
        <QuranBoxedLeft />
      </div>
      <div className="col-span-3">
        <SurahHeader
          latinName="Al-fatihah"
          arabicName="الفاتحة"
          description="Pembukaan"
          ayatCount={7}
          revelationPlace="Mekah"
          progress={20}
        />
      </div>
    </section>
  );
};

export default LayoutQuran;
