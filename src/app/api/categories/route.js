import { getDB } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const db = getDB()
  try {
    const article = await db.query(`
      SELECT * FROM categories`)
    return NextResponse.json(article.rows)
  } catch (err) {
    console.error('Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}