import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">NextJS Gallery</h1>
      <p className="text-gray-700">
        After logging in, you can view photos in the Gallery, and clicking on a photo opens its details in a modal.
      </p>

      <div className="flex gap-3">
        <Link href="/login" className="rounded-lg bg-black px-4 py-2 text-white">
          Go to Login
        </Link>
        <Link
          href="/gallery"
          className="rounded-lg border bg-white px-4 py-2 hover:bg-gray-100"
        >
          Go to Gallery
        </Link>
      </div>
    </div>
  );
}
