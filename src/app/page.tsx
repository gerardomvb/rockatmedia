// src/app/page.tsx
"use client";

import Link from "next/link";

export default function Home() {
  const campaigns = [
    {
      id: "guitarra-firmada",
      title: "Guitarra Gibson Les Paul Firmada por Slash",
      description: "Donaciones apoyan talleres de música para jóvenes en comunidades marginadas.",
      image: "https://images.unsplash.com/photo-1541753080841-9d3a88a83c30?auto=format&fit=crop&w=600&q=80",
      goal: 15000,
      raised: 9870,
      endDate: "2025-12-31",
      tags: ["rock", "guitarra", "colección"],
    },
    {
      id: "vinilo-edicion",
      title: "Vinilo Edición Limitada + Meet & Greet con The Black Keys",
      description: "Ayuda a preservar estudios independientes de grabación en México.",
      image: "https://images.unsplash.com/photo-1504893542924-8be9e7e32e5a?auto=format&fit=crop&w=600&q=80",
      goal: 8000,
      raised: 5420,
      endDate: "2025-11-30",
      tags: ["vinilo", "música", "edición limitada"],
    },
    {
      id: "backstage-access",
      title: "Pase Backstage + Guitarra Acústica de Foo Fighters",
      description: "Fondos para becas de producción musical en escuelas públicas.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      goal: 20000,
      raised: 12500,
      endDate: "2026-01-15",
      tags: ["backstage", "rock", "guitarra"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero con estilo rock/fan */}
      <div className="relative bg-gradient-to-r from-red-900 via-purple-900 to-black py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-6">
            Rockat<span className="text-yellow-400">Media</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Dona para apoyar a la próxima generación de artistas y gana
            <span className="text-yellow-400 font-bold"> artículos únicos y experiencias exclusivas</span> del mundo del rock y el entretenimiento.
          </p>
          <div className="mt-8">
            <Link
              href="/campaigns"
              className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg"
            >
              Explorar campañas
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No es necesario donar para participar. Ver reglas oficiales.
          </p>
        </div>
      </div>

      {/* Sección de campañas con estilo de colección */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Campañas activas</h2>
          <span className="text-yellow-500 font-mono text-sm">Coleccionables • Experiencias • Fandom</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {campaign.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition">
                  {campaign.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{campaign.description}</p>

                {/* Barra de progreso con estilo */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>${campaign.raised.toLocaleString()}</span>
                    <span>Meta: ${campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-yellow-500 rounded-full"
                      style={{ width: `${Math.min(100, (campaign.raised / campaign.goal) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <Link
                  href={`/campaigns/${campaign.id}`}
                  className="w-full block text-center bg-gray-900 hover:bg-gray-800 text-yellow-400 font-semibold py-2 rounded-lg transition"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer con estilo fan */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RockatMedia. Hecho para fans, por fans.</p>
          <p className="mt-2">
            RockatMedia no está afiliado con las bandas, marcas o artistas mostrados. 
            Todos los derechos pertenecen a sus respectivos dueños.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/legal/terms" className="hover:text-white">Términos</Link>
            <Link href="/legal/privacy" className="hover:text-white">Privacidad</Link>
            <Link href="/legal/rules" className="hover:text-white">Reglas oficiales</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}