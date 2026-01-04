import { BeritaImg } from "@/app/ui/berita/berita-detail";
import Link from "next/link";

export default async function BeritaDetailPage({ params }) {
  const { id } = await params
  const res = await fetch(`${process.env.BACKEND_URL}/api/berita/${Number(id)}`)
  const jsonData = await res.json()
  if (res.status === 404) {
    return <p className="text-9xl">NotFOUND</p>
  }
  if (res.status !== 200) {
    return <p className="text-9xl">error bang</p>
  }
  const berita = jsonData.data
  console.log(berita)
  

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md border rounded-lg">
          <div className="lg:mt-7">
              <Link href="/" className="text-lg text-white bg-blue-secondary hover:bg-dark/80 mt-7 my-5">
                  Back
              </Link>
          </div>
          <BeritaImg img={berita.thumbImg} alt={berita.title} />
          <div className="my-10">
              <div className="text-lg text-blue-secondary font-bold my-1">{berita.section}</div>
              <h2 className="text-4xl font-bold text-blue-primary my-1">{berita.title}</h2>
              <p className="whitespace-break-spaces">{berita.details}</p>
          </div>
      </article>
  </section>
  )
}
