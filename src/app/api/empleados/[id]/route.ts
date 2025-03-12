import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import mysql from "mysql2/promise";

type tParams = Promise<{ slug: string[] }>;
// Manejo de la solicitud DELETE para eliminar un empleado por ID
export async function DELETE(request: Request, {params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "ID del empleado es requerido" }, { status: 400 });
  }

  try {
    // Ejecutamos la consulta DELETE para eliminar el empleado
    const result = await query({
      query: "DELETE FROM empleados WHERE id = ?",
      values: [id],
    });

    const affectedRows = (result as mysql.OkPacket).affectedRows;

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

// Manejo de la solicitud PUT para actualizar un empleado por ID
export async function PUT(request: Request, { params }: { params: tParams }) {
  const { slug }: { slug: string[] } = await params;
  const id = slug[1];

  if (!id) {
    return NextResponse.json({ error: "ID del empleado es requerido" }, { status: 400 });
  }

  try {
    const { nombre, apellido } = await request.json(); // Obtener los datos del cuerpo de la solicitud

    if (!nombre || !apellido) {
      return NextResponse.json({ error: "Nombre y apellido son obligatorios" }, { status: 400 });
    }

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