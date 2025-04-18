"use client";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BeritaDetail } from "@/app/ui/berita/berita-detail";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function BeritaDetailPage({ params }) {
  const { slug } = use(params); 
  const [berita, setBerita] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBerita = async () => {
      const response = await fetch(`/api/berita`);
      const data = await response.json();

      const beritaItem = data.find((item) => slugify(item.title) === slug);

      if (!beritaItem) {
        router.push("/404");
        return;
      }

      setBerita(beritaItem);
    };

    fetchBerita();
  }, [slug]);

  if (!berita) return <div>Loading...</div>;

  return <BeritaDetail berita={berita} />;
}
