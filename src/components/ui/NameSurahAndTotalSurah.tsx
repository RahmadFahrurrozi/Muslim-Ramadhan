const NameSurahAndTotalSurah = ({
  surahName = "Alfatihah",
  translation = "Pembuka",
  ayatCount = 7,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-bold text-gray-800">{surahName}</h1>
      <p className="text-sm text-gray-500">
        {translation} - {ayatCount} ayat
      </p>
    </div>
  );
};

export default NameSurahAndTotalSurah;
