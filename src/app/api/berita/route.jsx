import { NextResponse } from "next/server";
import berita from "@/data/berita.json";

export async function GET() {
  return NextResponse.json(berita);
}