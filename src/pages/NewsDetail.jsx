import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) {
    return <p className="p-6">Article introuvable.</p>;
  }

  return (
    <div className="bg-[#FAF7F0] min-h-screen py-12 px-6 max-w-4xl mx-auto">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h2>
      <span className="text-sm text-gray-500">{news.date}</span>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">{news.fullText}</p>

      <Link
        to="/news"
        className="mt-8 inline-block text-pink-700 hover:underline italic"
      >
        ← Retour aux actualités
      </Link>
    </div>
  );
}
