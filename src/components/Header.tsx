import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Movie App
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-muted"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/favorites">Favorites</NavLink>
          <NavLink href="/login">Log in</NavLink>
          <NavLink href="/health">Health</NavLink>
        </nav>
      </div>
    </header>
  );
}
