import { loginAction } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const isError = searchParams?.error === "1";

  return (
    <div className="mx-auto mt-10 max-w-md rounded-2xl border bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>

      {isError && (
        <p className="mb-3 rounded-lg bg-red-50 p-2 text-sm text-red-700">
          Username을 입력해줘!
        </p>
      )}

      <form action={loginAction} className="space-y-3">
        <input
          name="username"
          placeholder="Username"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
        />
        <button className="w-full rounded-lg bg-black py-2 text-white">
          Log In
        </button>
      </form>
    </div>
  );
}
