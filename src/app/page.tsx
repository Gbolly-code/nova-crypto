import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <h1 className="text-3xl font-semibold text-teal-700">
          Crypto Checkout Assessment
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Select a page to view the implementation
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link
            href="/recipient-details"
            className="flex h-12 items-center justify-center rounded-lg bg-teal-700 text-white font-medium transition-colors hover:bg-teal-800 px-6"
          >
            Recipient Details
          </Link>
        </div>
      </main>
    </div>
  );
}
