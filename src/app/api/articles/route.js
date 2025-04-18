import { getDB } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
  const db = getDB()
  const q = req.nextUrl.searchParams
  const category = q.get('category')
  if (category) {
    try {
      const article = await db.query(`
        SELECT a.id, title, slug, writer_name, created_at, thumb_img, a.thumb_text
        FROM articles as a
        WHERE category_id = $1`, [Number(category)])
      return NextResponse.json(article.rows)
    } catch (err) {
      console.error('Error:', err)
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
  }
  return NextResponse.json("Bad Request: missing required parameters", { status: 400 })
}