// src/app/page.tsx
"use client";

import Link from "next/link";

export default function Home() {
  const campaigns = [
    {
      id: "ps5-bundle",
      title: "Gana una PS5 + Juegos del Año",
      description: "Apoya jóvenes creadores de contenido en comunidades marginadas.",
      image: "https://images.unsplash.com/photo-1589003077981-0c98a24c4d4f?auto=format&fit=crop&w=600&q=80",
      goal: 10000,
      raised: 7230,
      daysLeft: 14,
      tags: ["gaming", "ps5", "coleccionable"],
    },
    {
      id: "anime-figures",
      title: "Colección Completa de Figuras de Demon Slayer",
      description: "Donaciones para talleres de animación en escuelas públicas.",
      image: "https://images.unsplash.com/photo-1627308595181-7a2c9e7d4f3d?auto=format&fit=crop&w=600&q=80",
      goal: 7500,
      raised: 5120,
      daysLeft: 8,
      tags: ["anime", "demon slayer", "figuras"],
    },
    {
      id: "concert-vip",
      title: "Pase VIP + Meet & Greet con Rammstein",
      description: "Fondos para preservar espacios culturales independientes.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      goal: 25000,
      raised: 18750,
      daysLeft: 21,
      tags: ["rock", "rammstein", "vip"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - estilo fandiem.com */}
      <div className="relative overflow-hidden">
        {/* Imagen de fondo tipo fandiem */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Win Big. <span className="text-red-500">Support a Cause.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10">
            Enter for a chance to win exclusive prizes while supporting amazing causes in entertainment and gaming.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/free-entry"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full text-lg hover:bg-gray-200 transition transform hover:scale-105 shadow-lg"
            >
              Enter Free
            </Link>
            <Link
              href="/campaigns"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-lg transition transform hover:scale-105 shadow-lg"
            >
              Donate & Get Entries
            </Link>
          </div>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            No purchase necessary. See official rules for free entry method.
          </p>
        </div>
      </div>

      {/* How It Works - estilo fandiem */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: "🎫", 
              title: "Enter to Win", 
              desc: "Choose a prize and enter for free or donate to get more entries." 
            },
            { 
              icon: "❤️", 
              title: "Support a Cause", 
              desc: "100% of proceeds (after fees) go to the featured cause." 
            },
            { 
              icon: "🏆", 
              title: "Win Amazing Prizes", 
              desc: "Win exclusive experiences, collectibles, and more!" 
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaigns - estilo fandiem */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Active Campaigns</h2>
          <Link href="/campaigns" className="text-red-500 hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const progress = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
            return (
              <Link key={campaign.id} href={`/campaigns/${campaign.id}`} className="block">
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/10">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {campaign.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{campaign.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{campaign.description}</p>

                    {/* Countdown */}
                    <div className="flex items-center text-red-500 text-sm font-bold mb-3">
                      <span>Ends in {campaign.daysLeft} days</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>${campaign.raised.toLocaleString()}</span>
                        <span>Goal: ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-red-500 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RockatMedia. All rights reserved.</p>
          <p className="mt-2">
            RockatMedia is not affiliated with the brands, artists, or companies featured.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/legal/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/legal/rules" className="hover:text-white transition">Official Rules</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}