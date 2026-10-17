import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Movie App
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="/"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Home
          </Link>
          <Link
            href="/favorites"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Favorites
          </Link>
          <Link
            href="/login"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Log in
          </Link>
          <Link
            href="/health"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            Health
          </Link>
        </nav>
      </div>
    </header>
  );
}
