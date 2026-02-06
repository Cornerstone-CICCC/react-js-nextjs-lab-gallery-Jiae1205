"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") ?? "").trim();

  if (!username) {
    redirect("/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "gallery-user",
    value: username,
    httpOnly: true,
    maxAge: 10 * 60, // 10 minutes
    path: "/",
  });

  redirect("/gallery");
}
