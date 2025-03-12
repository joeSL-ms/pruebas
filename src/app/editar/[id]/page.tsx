"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditarUsuario({ params }: { params: { id: string } }) {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verifica si 'id' está disponible en los parámetros de la URL
    if (params.id) {
      // Llama a la API para obtener los datos del usuario basado en el id
      fetch(`/api/empleados/${params.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("No se pudieron cargar los datos del usuario");
          }
          return res.json();
        })
        .then((data) => {
          setUsuario({
            nombre: data.nombre,
            apellido: data.apellido,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error al obtener datos:", err);
          setError("Hubo un problema al cargar los datos del usuario.");
          setLoading(false);
        });
    }
  }, [params.id]); // Asegúrate de que se ejecute cada vez que cambie el 'id'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario.nombre || !usuario.apellido) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Enviar los datos al backend para actualizar el empleado
    fetch(`/api/empleados/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo actualizar el usuario");
        }
        return res.json();
      })
      .then(() => {
        router.push("/"); // Redirigir a la página principal después de actualizar
      })
      .catch((err) => {
        console.error("Error al actualizar:", err);
        setError("Hubo un problema al actualizar el usuario.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center">
      <main className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-left mb-2">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={usuario.nombre}
                onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="block text-left mb-2">Apellido</label>
              <input
                type="text"
                id="apellido"
                value={usuario.apellido}
                onChange={(e) => setUsuario({ ...usuario, apellido: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Actualizar
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
