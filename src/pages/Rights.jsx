// src/pages/Rights.jsx
import { Link } from "react-router-dom";
import { rightsData } from "../data/rightsData";

export default function Rights() {
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Connaissez Vos Droits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rightsData.map((right) => (
          <div
            key={right.id}
            className="bg-[#D4B98C] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <right.icon className="w-8 h-8 text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-serif italic mb-3 text-gray-900">
              {right.title}
            </h3>
            <p className="text-gray-800 mb-4">{right.description}</p>
            <Link
              to={`/rights/${right.id}`}
              className="text-pink-700 italic font-medium hover:underline"
            >
              En savoir plus
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}