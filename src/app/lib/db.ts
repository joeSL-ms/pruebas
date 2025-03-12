import mysql from "mysql2/promise";

export async function query({ query, values = [] }: { query: string; values?: any[] }) {
    const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "prueba",
    user: "sebas", // Asegúrate de que este usuario existe
    password: "1234", // Asegúrate de que la contraseña es correcta
    port: 3306, // Puerto correcto
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error : any) {
    console.error("Error en la conexión:", error.message);
    return { error };
  }
}
