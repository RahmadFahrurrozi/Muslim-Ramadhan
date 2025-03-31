import ArabicNumber from "../ui/ArabicNumber";
import NameSurahAndTotalSurah from "../ui/NameSurahAndTotalSurah";

const QuranBoxedLeft = ({ surahNumber = 1 }) => {
  return (
    <a
      href={`/surah/${surahNumber}`}
      className="bg-white max-w-[400px] hover:bg-neutral-50 transition-all duration-300 shadow-md rounded-lg flex justify-between items-center border border-gray-100 hover:border-green-300 hover:shadow-lg group"
    >
      <div className="flex items-center p-6 gap-4">
        <div className="bg-green-50 p-3 rounded-full group-hover:bg-green-100 transition-colors">
          <ArabicNumber number={surahNumber} />
        </div>
        <NameSurahAndTotalSurah />
      </div>
    </a>
  );
};

export default QuranBoxedLeft;
