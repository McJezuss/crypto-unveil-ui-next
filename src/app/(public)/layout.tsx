import { Footer } from "@/sections/layouts/public/footer";
import { Navbar } from "@/sections/layouts/public/navbar";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "Mesh spheres",
    width: 2000,
    height: 1280,
    src: "/background.webp",
    quality: 100,
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <main className="bg-zinc-950">
      <Navbar />

      <section
        className="h-full min-h-screen bg-no-repeat bg-top bg-fixed"
        style={{
          backgroundImage,
        }}
      >
        <div className="lg:pt-0 h-full min-h-screen p-5">{children}</div>
      </section>

      <Footer />
    </main>
  );
}
