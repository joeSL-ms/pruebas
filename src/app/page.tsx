"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Necesario para redirigir a las páginas de editar

export default function Home() {
  interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
  }

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/empleados")
      .then((res) => res.json())
      .then((data: Usuario[]) => {
        console.log("Datos recibidos:", data);
        if (Array.isArray(data)) {
          setUsuarios(data);
        } else {
          console.error("Error: la API no devuelve un array", data);
        }
      })
      .catch((err) => console.error("Error en la solicitud:", err));
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/editar/${id}`); // Redirige a la página de edición
  };

  const handleDelete = (id: number) => {
    fetch(`/api/empleados/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === `Empleado con ID ${id} eliminado correctamente`) {
          // Filtra el usuario eliminado de la lista
          setUsuarios(usuarios.filter((usuario) => usuario.id !== id)); 
          console.log("Empleado eliminado.");
        } else {
          console.error("Error al eliminar:", data.error);
        }
      })
      .catch((err) => console.error("Error al eliminar:", err));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center">
      <main className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Inicio de sesión</h2>
        <form className="mb-6">
          <label htmlFor="usuario" className="block mb-2">Usuario</label>
          <input 
            type="text" 
            placeholder="Introduzca una contraseña"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </form>

        <section>
          <h1 className="text-lg font-semibold mb-4">Lista de Empleados</h1>
          {usuarios.length > 0 ? (
            <ul className="list-disc text-left pl-5">
              {usuarios.map((usuario) => (
                <li key={usuario.id} className="flex justify-between items-center mb-2">
                  {usuario.nombre} {usuario.apellido}
                  <div className="ml-4">
                    <button 
                      className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
                      onClick={() => handleEdit(usuario.id)}
                    >
                      Editar
                    </button>
                    <button 
                      className="bg-red-500 text-white px-4 py-1 rounded"
                      onClick={() => handleDelete(usuario.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No hay empleados registrados.</p>
          )}
        </section>
      </main>
    </div>
  );
}
