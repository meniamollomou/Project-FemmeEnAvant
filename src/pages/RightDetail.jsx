// src/pages/RightDetail.jsx
import { useParams, Link } from "react-router-dom";
import { rightsData } from "../data/rightsData";

export default function RightDetail() {
  const { id } = useParams();
  const right = rightsData.find((r) => r.id === id);

  if (!right) {
    return (
      <div className="p-8 text-center text-red-600">
        <h2 className="text-2xl font-bold">Droit non trouvé</h2>
        <Link to="/rights" className="text-blue-600 underline mt-4 block">
          Retourner à la liste des droits
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-6 flex flex-col items-center">
      <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-3 rounded-full">
            <right.icon className="w-10 h-10 text-gray-700" />
          </div>
        </div>
        <h2 className="text-3xl font-serif italic text-center mb-6 text-gray-900">
          {right.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{right.details}</p>
        <Link
          to="/rights"
          className="inline-block px-6 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition"
        >
          Retour
        </Link>
      </div>
    </div>
  );
}
