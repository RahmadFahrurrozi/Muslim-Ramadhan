import ArabicNumber from "../ui/ArabicNumber";

interface SurahCardProps {
  number: number;
  name: string;
  description: string;
  isActive: boolean;
}

function SurahCardLeft({
  number,
  name,
  description,
  isActive,
}: SurahCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border ${
        isActive
          ? "border-teal-100 bg-white shadow-sm"
          : "border-gray-100 bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0">
            <ArabicNumber number={number} />
          </div>
        </div>
        <div>
          <h3
            className={`text-xl ${
              isActive ? "text-teal-600" : "text-gray-700"
            } font-medium`}
          >
            {name}
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SurahCardLeft;
