import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // Asumimos que tienes esta función 'query' configurada para interactuar con la base de datos
import mysql from "mysql2/promise";

// Manejo de la solicitud DELETE para eliminar un empleado por ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params; // Obtener el ID del empleado desde la URL

    try {
        // Ejecutamos la consulta DELETE para eliminar el empleado
        const result = await query({
            query: "DELETE FROM usarios WHERE id = ?",
            values: [id],
        });

        // Aseguramos que el resultado es de tipo OkPacket, que tiene la propiedad affectedRows
        const affectedRows = (result as mysql.OkPacket).affectedRows;

        // Verificamos si la eliminación fue exitosa
        if (affectedRows > 0) {
            return NextResponse.json({ message: `Empleado con ID ${id} eliminado correctamente` });
        } else {
            return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error al eliminar el empleado:", error);
        return NextResponse.json({ error: "Error al eliminar el empleado" }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { nombre, apellido } = await request.json(); // Obtener los datos del cuerpo de la solicitud
  
    if (!nombre || !apellido) {
      return NextResponse.json({ error: "Nombre y apellido son obligatorios" }, { status: 400 });
    }
  
    try {
      // Consulta para actualizar el nombre y apellido en la base de datos
      const result = await query({
        query: "UPDATE empleados SET nombre = ?, apellido = ? WHERE id = ?",
        values: [nombre, apellido, id],
      });
  
      const affectedRows = (result as mysql.OkPacket).affectedRows;
  
      if (affectedRows > 0) {
        return NextResponse.json({ message: `Empleado con ID ${id} actualizado correctamente` });
      } else {
        return NextResponse.json({ error: "Empleado no encontrado" }, { status: 404 });
      }
    } catch (error) {
      console.error("Error al actualizar el empleado:", error);
      return NextResponse.json({ error: "Error al actualizar el empleado" }, { status: 500 });
    }
  }
