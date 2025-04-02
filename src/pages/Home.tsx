import ChoseQori from "../components/fragments/ChoseQori";
import SurahHeader from "../components/fragments/SurahHeader";
import SurahNumber from "../components/ui/SurahNumber";
import AyahCard from "../components/fragments/AyahCard";
import SurahCard from "../components/fragments/SurahCardLeft";
import LayoutQuran from "../layout/LayoutQuran";

const HomeQuranPage = () => {
  // Data surat untuk digunakan di kedua layout
  const surahList = [
    {
      number: 1,
      name: "Al-fatihah",
      description: "Pembuka - 7 Ayat",
      isActive: true,
    },
    {
      number: 2,
      name: "Al - Baqarah",
      description: "Sapi - 286 Ayat",
      isActive: true,
    },
    {
      number: 3,
      name: "Ali - Imran",
      description: "Keluarga Imran - 200 Ayat",
      isActive: false,
    },
    {
      number: 4,
      name: "An - Nisa'",
      description: "Wanita - 176 Ayat",
      isActive: false,
    },
  ];

  return (
    <LayoutQuran>
      {/* Mobile and tablet content */}
      <div className="lg:hidden space-y-4">
        <SurahHeader
          latinName="Al-fatihah"
          arabicName="الفاتحة"
          description="Pembukaan"
          ayatCount={7}
          revelationPlace="Mekah"
          progress={20}
        />

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <SurahNumber number={1} />
          <ChoseQori />
        </div>

        {/* Daftar surat untuk mobile */}
        <div className="mt-4 space-y-2">
          {surahList.map((surah) => (
            <SurahCard
              key={surah.number}
              number={surah.number}
              name={surah.name}
              description={surah.description}
              isActive={surah.isActive}
            />
          ))}
        </div>

        {/* Ayat cards */}
        <div className="flex flex-col gap-4 mt-6">
          <AyahCard
            number="1:1"
            arabic="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
            transliteration="bismillāhir-raḥmānir-raḥīm(i)."
            translation="Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
          />
          <AyahCard
            number="1:2"
            arabic="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
            transliteration="al-ḥamdu lillāhi rabbil-'ālamīn(a)."
            translation="Segala puji bagi Allah, Tuhan seluruh alam."
          />
        </div>
      </div>

      {/* Desktop content */}
      <div className="hidden lg:flex flex-col col-span-4">
        {/* Sidebar dengan daftar surat */}
        <div className="col-span-1 space-y-2">
          {surahList.map((surah) => (
            <SurahCard
              key={surah.number}
              number={surah.number}
              name={surah.name}
              description={surah.description}
              isActive={surah.isActive}
            />
          ))}
        </div>

        {/* Konten utama */}
        <div className="col-span-3 flex flex-col gap-6">
          <SurahHeader
            latinName="Al-fatihah"
            arabicName="الفاتحة"
            description="Pembukaan"
            ayatCount={7}
            revelationPlace="Mekah"
            progress={20}
          />

          <div className="flex flex-wrap gap-4 items-center">
            <SurahNumber number={1} />
            <ChoseQori />
          </div>

          <div className="flex flex-col gap-4">
            <AyahCard
              number="1:1"
              arabic="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
              transliteration="bismillāhir-raḥmānir-raḥīm(i)."
              translation="Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
            />
            <AyahCard
              number="1:2"
              arabic="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
              transliteration="al-ḥamdu lillāhi rabbil-'ālamīn(a)."
              translation="Segala puji bagi Allah, Tuhan seluruh alam."
            />
          </div>
        </div>
      </div>
    </LayoutQuran>
  );
};

export default HomeQuranPage;
