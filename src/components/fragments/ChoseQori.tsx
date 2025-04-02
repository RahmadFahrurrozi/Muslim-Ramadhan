import React, { useState, ChangeEvent } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

const ChoseQori: React.FC = () => {
  const [selectedQori, setSelectedQori] = useState<string>(
    "Abdullah-Al-Juhanny"
  );

  const qoriOptions: string[] = [
    "Abdullah-Al-Juhanny",
    "Mishari Rashid Al-Afasy",
    "Abdul Rahman Al-Sudais",
  ];

  const handleQoriChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedQori(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-8 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-3 w-full max-w-md">
        <div className="flex gap-3 items-center">
          <p className="text-gray-700 font-medium">Qori</p>
          <span className="text-xs font-medium text-green-500 bg-gray-100 px-2 py-1 rounded-full">
            {qoriOptions.length} tersedia
          </span>
        </div>

        <div className="relative">
          <select
            value={selectedQori}
            onChange={handleQoriChange}
            className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all pl-10 cursor-pointer"
          >
            {qoriOptions.map((qori, index) => (
              <option key={index} value={qori}>
                {qori}
              </option>
            ))}
          </select>

          {/* Icon microphone */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lime-500">
            <FaMicrophone className="h-5 w-5" />
          </div>

          {/* Custom dropdown arrow */}
          <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
            <IoIosArrowDropdown className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseQori;
