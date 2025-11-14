import Image from "next/image";
import { WONDERS } from "../../data";

type Props = {
  params: { id: string };
};

export default async function GalleryImage({ params }: Props) {
  const { id } = params;
  const wonder = WONDERS.find((w) => w.id === id);

  if (!wonder) {
    return (
      <main style={{ padding: 16 }}>
        <h1 style={{ fontSize: 22 }}>Not found</h1>
        <p style={{ color: "#666" }}>No photo found for &quot;{id}&quot;.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px 0", fontSize: 28 }}>{wonder.name}</h1>
      <p style={{ margin: "0 0 18px 0", color: "#666" }}>{wonder.location}</p>

      <div style={{ position: "relative", width: "100%", height: "60vh", maxHeight: 720, borderRadius: 10, overflow: "hidden" }}>
        <Image
          src={wonder.image}
          alt={`${wonder.name}, ${wonder.location}`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, 80vw"
        />
      </div>
    </main>
  );
}
