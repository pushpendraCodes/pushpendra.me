import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-5 py-28 md:px-10">
      <span className="font-mono-label text-[var(--accent)]">404</span>
      <h1 className="font-display mt-6 text-5xl text-[#F4F2EC] md:text-7xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-[48ch] font-sans text-base text-[#8A8A8A]">
        That route does not exist. Head back to the work or the home page.
      </p>
      <div className="mt-10 flex flex-wrap gap-6">
        <Link
          href="/"
          className="bg-[var(--accent)] px-8 py-4 font-mono-label text-[#080808]"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="font-mono-label text-[#8A8A8A] transition-colors hover:text-[#F4F2EC]"
        >
          All work →
        </Link>
      </div>
    </main>
  );
}
