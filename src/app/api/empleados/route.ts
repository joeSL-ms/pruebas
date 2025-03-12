import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const usuarios = await query({ query: "SELECT * FROM usarios", values: [] });
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Error al obtener empleados",error);
  }
}