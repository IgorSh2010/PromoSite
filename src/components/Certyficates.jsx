import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Certificates({ data }) {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="py-10 text-center">
      <div className="w-full max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center p-4 text-3xl font-bold">
         {t("Certtitle")}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {data.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-72 h-48 object-cover"
            />
            <div className="p-4 bg-gray-900 text-white text-lg">
              {cert.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="bg-gray-900 p-4 rounded-lg max-w-4xl w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
