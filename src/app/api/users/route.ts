import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM user_registration_login";
    
    // Correct way to fetch the data from the query
    const [rows] = await db.query(sql); // `rows` contains the query result

    // Return the data in JSON format
    return NextResponse.json(rows); 
  } catch (error: any) { // Adding type `any` to error
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
