import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { placeholderData } from './placeholder-data'; // Adjust this path as necessary

export async function GET() {
  try {
    // Example SQL command to create a table
    await sql`
      CREATE TABLE IF NOT EXISTS example_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      );
    `;

    // Insert data from placeholderData into the table
    for (const item of placeholderData) {
      await sql`
        INSERT INTO example_table (name, description)
        VALUES (${item.name}, ${item.description});
      `;
    }

    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error:any) {
    console.error('Error seeding database:', error);
    return NextResponse.json({ message: 'Error seeding database', error: error.message }, { status: 500 });
  }
}
