"use server"

import { getDB } from "@/lib/db"

export const getTopArticles = async () => {
  const conn = getDB()
  return new Promise( async (resolve, reject) => {
    try{
      const article = await conn.query(`
        SELECT title, slug, writer_name, created_at, thumb_img
        FROM articles
        WHERE is_top_content = true`)
      resolve(article.rows)
    } catch (err) {
      console.error(err);
      reject(err.message)
    }
  })
}