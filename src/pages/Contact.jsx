import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Veuillez donner votre consentement avant d'envoyer.");
      return;
    }

    // For now, just log. You can replace with an API call (e.g. EmailJS, Formspree, or your backend)
    console.log("Form submitted:", formData);

    alert("Message envoyé avec succès !");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF7F0] to-[#FDFCF9] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Contact Cards (unchanged) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <EnvelopeIcon className="w-14 h-14 text-pink-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@votreentreprise.com</p>
          </div>
          {/* Phone Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <PhoneIcon className="w-14 h-14 text-pink-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Téléphone</h3>
            <p className="text-gray-600">+224 123 456 789</p>
          </div>
          {/* Chat Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <ChatBubbleBottomCenterIcon className="w-14 h-14 text-pink-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Chat</h3>
            <p className="text-gray-600">Démarrer une conversation en ligne</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-3xl max-w-lg mx-auto p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Contact & Support
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Envoyez-nous un message et nous vous répondrons rapidement.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Prénom et Nom"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adresse e-mail"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Sujet"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:outline-none h-36 resize-none transition"
              required
            ></textarea>
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 accent-pink-500"
              />
              Je consens au traitement de mes données personnelles
            </label>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl transition-all"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
