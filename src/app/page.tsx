// src/app/page.tsx
"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Rockat<span className="text-purple-600">Media</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Próximamente: apoya causas increíbles y gana experiencias únicas en el mundo del entretenimiento.
        </p>
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">¿Quieres ser el primero en participar?</h2>
          <p className="mt-2 text-gray-500 text-sm">Déjanos tu correo y te avisamos al lanzar.</p>
          <form 
            className="mt-4 flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert('¡Gracias! Te avisaremos pronto.');
            }}
          >
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
            >
              Suscríbete
            </button>
          </form>
        </div>
        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} RockatMedia
        </p>
      </div>
    </div>
  );
}