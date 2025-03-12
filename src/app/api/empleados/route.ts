import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const usuarios = await query({ query: "SELECT * FROM usarios" });
    return NextResponse.json(usuarios);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener empleados" }, { status: 500 });
  }
}