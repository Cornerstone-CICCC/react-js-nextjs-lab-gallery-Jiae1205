import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

type Photo = {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
};

async function getPhoto(id: string): Promise<Photo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: "no-store",
  });

  // 혹시라도 404/네트워크 오류면 최소 객체라도 리턴
  if (!res.ok) {
    return {
      id: Number(id),
      title: `Photo ${id}`,
      url: "https://placehold.co/600.png",
      thumbnailUrl: "https://placehold.co/150.png",
    };
  }

  const p: Photo = await res.json();

  return {
    ...p,
    url: "https://placehold.co/600.png",
    thumbnailUrl: "https://placehold.co/150.png",
  };
}

export default async function PhotoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = await cookies();
  const user = cookieStore.get("gallery-user")?.value;
  if (!user) redirect("/login");

  const photo = await getPhoto(params.id);

  const safeId = photo.id ?? Number(params.id);
  const safeTitle = (photo.title ?? "").trim();
  const altText = safeTitle.length > 0 ? safeTitle : `Photo ${safeId}`;

  return (
    <div className="mx-auto mt-6 max-w-2xl rounded-2xl border bg-white p-6">
      <h1 className="text-xl font-semibold">Photo #{safeId}</h1>
      <p className="mt-1 text-sm text-gray-600">{altText}</p>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={photo.url ?? "https://placehold.co/600.png"}
          alt={altText} // ✅ 무조건 문자열 보장
          fill
          sizes="(max-width: 768px) 92vw, 720px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
