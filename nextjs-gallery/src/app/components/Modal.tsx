"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <button
        aria-label="Close modal"
        onClick={() => router.back()}
        className="absolute inset-0 bg-black/50"
      />

      {/* panel */}
      <div className="relative z-10 w-[min(92vw,760px)] rounded-2xl bg-white p-5 shadow-lg">
        <button
          onClick={() => router.back()}
          className="absolute right-3 top-3 rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
