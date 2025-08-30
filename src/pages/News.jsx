import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

export default function News() {
  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Actualités & Citations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-serif italic mb-3 text-gray-900">
              {news.title}
            </h3>
            <p className="text-gray-800 mb-4">{news.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{news.date}</span>
              <Link
                to={`/news/${news.id}`}
                className="text-pink-700 italic font-medium hover:underline"
              >
                Lire plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
