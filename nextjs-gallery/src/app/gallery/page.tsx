import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

async function getPhotos(): Promise<Photo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });

  const data: Photo[] = await res.json();

  // jsonplaceholder 이미지가 깨질 수 있어 placehold.co로 교체
  const photos = data.map((p) => ({
    ...p,
    url: "https://placehold.co/600.png",
    thumbnailUrl: "https://placehold.co/150.png",
  }));

  return photos.slice(0, 60);
}

export default async function GalleryPage() {
  const cookieStore = await cookies();
  const user = cookieStore.get("gallery-user")?.value;

  if (!user) redirect("/login");

  const photos = await getPhotos();

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Gallery</h1>
          <p className="text-sm text-gray-600">Welcome, {user}</p>
        </div>
        <p className="text-sm text-gray-500">Click any photo → modal</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((p) => (
          <Link
            key={p.id}
            href={`/gallery/photos/${p.id}`}
            className="rounded-2xl border bg-white p-2 hover:shadow-sm"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src={p.thumbnailUrl}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 line-clamp-2 text-xs text-gray-700">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
