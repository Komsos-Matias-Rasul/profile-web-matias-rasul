import { NextResponse } from "next/server";
import pengurus from "@/data/pengurus.json";

export async function GET() {
  return NextResponse.json(pengurus);
}