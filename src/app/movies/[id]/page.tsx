export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Movie detail
      </h1>
      <p className="text-muted">
        Details for movie {id} will be shown here.
      </p>
    </div>
  );
}
