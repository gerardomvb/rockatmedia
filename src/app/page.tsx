// src/app/page.tsx
"use client";

import Link from "next/link";

export default function Home() {
  const campaigns = [
    {
      id: "guitarra-slash",
      title: "Guitarra Gibson Les Paul Firmada por Slash",
      description: "Apoya talleres de música para jóvenes y gana esta pieza coleccionable autografiada en gira 2025.",
      image: "https://images.unsplash.com/photo-1541753080841-9d3a88a83c30?auto=format&fit=crop&w=600&q=80",
      goal: 15000,
      raised: 9870,
      endDate: "31 dic",
      tags: ["rock", "guitarra", "coleccionable"],
      color: "from-red-900/20 to-transparent",
    },
    {
      id: "vinilo-black-keys",
      title: "Vinilo Edición Limitada + Meet & Greet",
      description: "Ayuda a preservar estudios independientes de grabación en México.",
      image: "https://images.unsplash.com/photo-1504893542924-8be9e7e32e5a?auto=format&fit=crop&w=600&q=80",
      goal: 8000,
      raised: 5420,
      endDate: "30 nov",
      tags: ["vinilo", "música", "edición limitada"],
      color: "from-purple-900/20 to-transparent",
    },
    {
      id: "backstage-foo-fighters",
      title: "Pase Backstage + Guitarra Acústica de Foo Fighters",
      description: "Fondos para becas de producción musical en escuelas públicas.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      goal: 20000,
      raised: 12500,
      endDate: "15 ene",
      tags: ["backstage", "rock", "experiencia"],
      color: "from-yellow-900/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section - estilo Fandiem */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Gana <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">experiencias únicas</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10">
            Apoya causas en el mundo del entretenimiento y participa por artículos coleccionables, 
            experiencias exclusivas y más.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/campaigns"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-gray-900 font-bold rounded-full text-lg hover:opacity-90 transition transform hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Explorar campañas
            </Link>
            <Link
              href="/free-entry"
              className="px-8 py-4 border-2 border-gray-700 hover:border-gray-500 text-white font-semibold rounded-full text-lg transition"
            >
              Participación gratuita
            </Link>
          </div>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            No es necesario donar para participar. Cada donación te da entradas adicionales. 
            Ver <Link href="/legal/rules" className="underline hover:text-yellow-400">reglas oficiales</Link>.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Elige una campaña", desc: "Explora experiencias y premios únicos" },
            { step: "2", title: "Donar", desc: "Apoya una causa que te apasiona" },
            { step: "3", title: "Gana entradas", desc: "Cada $1 = 100 entradas para el sorteo" },
            { step: "4", title: "¡Gana!", desc: "Participa y gana artículos coleccionables" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-gray-900">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaigns */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Campañas activas</h2>
          <Link href="/campaigns" className="text-yellow-500 hover:underline text-sm">
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => {
            const progress = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
            return (
              <Link key={campaign.id} href={`/campaigns/${campaign.id}`} className="block">
                <div className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${campaign.color}`}></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs bg-black/60 text-white px-2 py-1 rounded">
                        Finaliza {campaign.endDate}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {campaign.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-yellow-400 transition">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {campaign.description}
                    </p>

                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>${campaign.raised.toLocaleString()}</span>
                        <span>Meta: ${campaign.goal.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-red-500 rounded-full"
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
      <footer className="border-t border-gray-850 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RockatMedia. Hecho para fans, por fans.</p>
          <p className="mt-2">
            RockatMedia no está afiliado con las bandas, marcas o artistas mostrados.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/legal/terms" className="hover:text-white transition">Términos</Link>
            <Link href="/legal/privacy" className="hover:text-white transition">Privacidad</Link>
            <Link href="/legal/rules" className="hover:text-white transition">Reglas oficiales</Link>
            <Link href="/contact" className="hover:text-white transition">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}