import mysql from "mysql2/promise";

export async function query({ query, values = [] }: { query: string; values: (string | number | null)[] }) {
    const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "prueba",
    user: "sebas", // Asegúrate de que este usuario existe
    password: "1234", // Asegúrate de que la contraseña es correcta
    port: 3306, // Puerto correcto
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    return results;
  } catch (error ) {
    console.error("Error en la conexión:", error);
    return { error };
  } finally{
    await dbconnection.end();
  }
}