import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Home
      </h1>
      <p className="text-muted">
        Browse and discover movies.
      </p>
      <p>
        <Link
          href="/movies/1"
          className="text-accent hover:underline"
        >
          Sample movie (ID 1)
        </Link>
      </p>
    </div>
  );
}
