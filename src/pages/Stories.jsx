import { useState } from "react";
import { Link } from "react-router-dom";

export default function Stories() {
  const initialStories = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?random=1",
      text: "« J’ai fui un mariage forcé... » – Aissatou, Labé",
      fullText:
        "« J’ai fui un mariage forcé et aujourd’hui, j’aide les jeunes filles de mon village à s’instruire. Cette expérience m’a donné la force de militer pour l’égalité des droits. » – Aissatou, Labé",
      date: "Août 02",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?random=2",
      text: "« La technologie m’a donné une seconde chance... » – Mariama, Conakry",
      fullText:
        "« La technologie m’a donné une seconde chance d’apprendre. Grâce à l’éducation numérique, j’ai pu poursuivre mes études et inspirer d’autres jeunes filles de Conakry. » – Mariama, Conakry",
      date: "Juin 30",
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400?random=3",
      text: "« De victime à militante... » – Fatoumata, Kankan",
      fullText:
        "« De victime à militante : mon combat contre les violences domestiques a transformé ma vie. Aujourd’hui, j’accompagne d’autres femmes dans leur lutte pour la dignité. » – Fatoumata, Kankan",
      date: "Février 02",
    },
  ];

  const [stories, setStories] = useState(initialStories);
  const [formData, setFormData] = useState({ name: "", story: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.story) return;

    const newStory = {
      id: stories.length + 1,
      image: "https://picsum.photos/600/400?random=" + (stories.length + 10),
      text: `« ${formData.story.substring(0, 40)}... » – ${formData.name}`,
      fullText: `« ${formData.story} » – ${formData.name}`,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
      }),
    };

    setStories([newStory, ...stories]); // add to top
    setFormData({ name: "", story: "" }); // reset form
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-64 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage:
            "url('https://picsum.photos/1200/400?grayscale&random=10')",
        }}
      >
        Stories of Strength & Inspiration
      </div>

      {/* Stories Grid */}
      <div className="p-6 grid md:grid-cols-3 gap-6 mt-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={story.image}
              alt="Story"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="mb-2">{story.text}</p>
              <span className="text-sm text-gray-500 block mb-3">
                {story.date}
              </span>
              <Link
                to={`/stories/${story.id}`}
                className="text-pink-600 font-semibold hover:underline"
              >
                Lire la suite...
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Story Submission Form (👇 now after the list) */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-12 mb-12">
        <h2 className="text-2xl font-bold text-center mb-4 text-pink-600">
          Partagez votre histoire
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
            required
          />
          <textarea
            placeholder="Votre histoire"
            value={formData.story}
            onChange={(e) =>
              setFormData({ ...formData, story: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-xl h-32 resize-none focus:ring-2 focus:ring-pink-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition"
          >
            Publier mon histoire
          </button>
        </form>
      </div>
    </div>
  );
}
