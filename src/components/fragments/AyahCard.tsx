import { Play, BookmarkIcon } from "lucide-react";

interface AyahCardProps {
  number: string;
  arabic: string;
  transliteration: string;
  translation: string;
}

function AyahCard({
  number,
  arabic,
  transliteration,
  translation,
}: AyahCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <span className="text-gray-500">{number}</span>
      </div>
      <div className="mb-6">
        <p className="text-right text-3xl leading-loose text-gray-800">
          {arabic}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-teal-600 text-sm">{transliteration}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">{translation}</p>
      </div>
      <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-teal-600">
          <Play size={18} />
        </button>
        <button className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-teal-600">
          <BookmarkIcon size={18} />
        </button>
        <button className="px-4 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-teal-600 text-sm">
          <span>Tafsir</span>
        </button>
      </div>
    </div>
  );
}

export default AyahCard;
