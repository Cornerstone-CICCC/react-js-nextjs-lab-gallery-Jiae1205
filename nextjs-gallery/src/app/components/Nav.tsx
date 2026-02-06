import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 p-4">
        <Link href="/" className="font-semibold hover:underline">
          Home
        </Link>
        <Link href="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}
