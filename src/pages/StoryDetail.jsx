// src/pages/StoryDetail.jsx
import { useParams, Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    image: "https://picsum.photos/600/400?random=1",
    fullText:
      "« J’ai fui un mariage forcé et aujourd’hui, j’aide les jeunes filles de mon village à s’instruire. Cette expérience m’a donné la force de militer pour l’égalité des droits. » – Aissatou, Labé",
    date: "Août 02",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/400?random=2",
    fullText:
      "« La technologie m’a donné une seconde chance d’apprendre. Grâce à l’éducation numérique, j’ai pu poursuivre mes études et inspirer d’autres jeunes filles de Conakry. » – Mariama, Conakry",
    date: "Juin 30",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/400?random=3",
    fullText:
      "« De victime à militante : mon combat contre les violences domestiques a transformé ma vie. Aujourd’hui, j’accompagne d’autres femmes dans leur lutte pour la dignité. » – Fatoumata, Kankan",
    date: "Février 02",
  },
];

export default function StoryDetail() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === parseInt(id));

  if (!story) {
    return <h2 className="p-6">Story not found</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={story.image}
        alt="Story"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{story.fullText}</p>
      <span className="text-sm text-gray-500">{story.date}</span>
      <div className="mt-6">
        <Link
          to="/stories"
          className="text-pink-600 hover:underline font-semibold"
        >
          ← Retour aux histoires
        </Link>
      </div>
    </div>
  );
}
