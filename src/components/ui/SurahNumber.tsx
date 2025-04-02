import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const SurahNumber = ({
  number,
  onChange,
}: {
  number: number;
  onChange?: (value: number) => void;
}) => {
  const [ayatNumber, setAyatNumber] = useState<number>(number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setAyatNumber(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const increment = () => {
    if (ayatNumber < 999) {
      const newValue = ayatNumber + 1;
      setAyatNumber(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const decrement = () => {
    if (ayatNumber > 1) {
      const newValue = ayatNumber - 1;
      setAyatNumber(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-700 font-medium">Ayah</p>
      <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm">
        <button
          className="px-3 py-2 text-gray-500 hover:text-lime-600 disabled:text-gray-300"
          onClick={decrement}
          disabled={ayatNumber <= 1}
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        <input
          type="number"
          min="1"
          max="999"
          value={ayatNumber}
          onChange={handleChange}
          className="w-14 text-center py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 rounded-md appearance-none"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
        />

        <button
          className="px-3 py-2 text-gray-500 hover:text-lime-600 disabled:text-gray-300"
          onClick={increment}
          disabled={ayatNumber >= 999}
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SurahNumber;
