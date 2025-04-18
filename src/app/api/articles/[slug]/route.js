import { getDB } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const db = getDB()
  const q = req.nextUrl.pathname
  const slug = q.split("/").pop()
  try {
    const article = await db.query("SELECT * FROM articles WHERE slug = $1", [slug])
    return NextResponse.json(article.rows)
  } catch (err) {
    console.error('Error:', err.message)
    return res.status(500).send({ error: err.message })
  }
}