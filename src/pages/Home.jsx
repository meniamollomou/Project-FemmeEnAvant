import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?ts=${Date.now()}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      const advice = data?.slip?.advice ?? "Stay positive and keep going!";
      setQuote({ text: advice, author: "Advice API" });
    } catch (err) {
      console.error("Error fetching advice:", err);
      setQuote({
        text: "Your silence will not protect you.",
        author: "Audre Lorde",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Bienvenue sur <span className="text-pink-400">FemmeEnAvant</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Éduquer et autonomiser les femmes en Guinée avec une information
            précieuse sur leurs droits et leur bien-être.
          </p>
        </div>
      </div>

      {/* ✅ Quote + Buttons Section */}
      <div className="flex flex-col items-center px-6 py-12 text-center bg-gradient-to-b from-[#FAF7F0] to-[#FDFCF9]">
        <div className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl transition-transform transform hover:-translate-y-2">
          <blockquote className="text-pink-600 italic text-lg md:text-xl mb-4">
            “{quote.text}”
          </blockquote>
          <p className="text-gray-600 font-semibold text-right">— {quote.author}</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10 justify-center">
          {/* Fetch new advice */}
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all disabled:opacity-50"
          >
            {loading ? "Chargement..." : "Nouvelle citation"}
          </button>

          {/* Navigate to Rights page */}
          <Link
            to="/rights"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-2xl transition-all"
          >
            En savoir plus
          </Link>

          {/* Navigate to Stories page */}
          <Link
            to="/stories"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl transition-all"
          >
            Voir les histoires
          </Link>

          {/* Navigate to News page */}
          <Link
            to="/news"
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-2xl transition-all"
          >
            Dernières actualités
          </Link>
        </div>
      </div>
    </div>
  );
}
