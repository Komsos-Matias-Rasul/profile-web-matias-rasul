import { NextResponse } from "next/server";
import galeri from "@/data/galeri.json";

export async function GET() {
  return NextResponse.json(galeri);
}