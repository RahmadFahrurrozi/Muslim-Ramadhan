import ArabicNumber from "../ui/ArabicNumber";

type SurahHeaderProps = {
  latinName: string;
  arabicName: string;
  description: string;
  ayatCount: number;
  revelationPlace: string;
  progress?: number;
};

const SurahHeader = ({
  latinName,
  arabicName,
  description,
  ayatCount,
  revelationPlace,
  progress = 20, // Default progress value
}: SurahHeaderProps) => {
  return (
    <div className="w-full h-40 bg-white rounded-2xl shadow-md p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl text-gray-500 font-medium">
            {latinName} - <span className="font-arabic">{arabicName}</span>
          </h1>
          <p className="text-gray-400 mt-1">
            {description} - {ayatCount} ayat - {revelationPlace}
          </p>
        </div>
        <ArabicNumber number={1} />
      </div>

      <div className="h-3 w-full bg-lime-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-600 to-lime-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SurahHeader;
