import { FC } from "react";
import { WONDERS } from "./data";
import Image from "next/image";
import Link from "next/link";

const PhotoGalleryPage: FC = () => {
  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ margin: "0 0 12px 0", fontSize: 24 }}>Seven Wonders Gallery</h1>
      <p style={{ margin: "0 0 18px 0", color: "#555" }}>A simple responsive grid showing the seven wonders with captions.</p>

      <section
        aria-label="Photo gallery of the seven wonders"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {WONDERS.map((w) => (
          <Link key={w.id} href={`/photo-gallery/${w.id}`}>
            <figure
              style={{
                margin: 0,
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image
                  src={w.image}
                  alt={w.name + ", " + w.location}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
              </div>
              <figcaption style={{ padding: 10 }}>
                <strong style={{ display: "block" }}>{w.name}</strong>
                <span style={{ color: "#666", fontSize: 13 }}>{w.location}</span>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PhotoGalleryPage;
