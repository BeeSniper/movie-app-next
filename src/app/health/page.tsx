export const dynamic = 'force-dynamic';

export default async function HealthPage() {
  const healthApiUrl = process.env.HEALTH_API_URL;
  let state: 'missing_env' | 'success' | 'failed' = 'missing_env';
  let statusCode: number | undefined;
  let healthData: {
    id?: unknown;
    title?: unknown;
    completed?: 'Yes' | 'No';
  } = {};

  if (!healthApiUrl || healthApiUrl.trim() === '') {
    state = 'missing_env';
  } else {
    try {
      const response = await fetch(healthApiUrl, {
        cache: 'no-store',
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        state = 'failed';
        statusCode = response.status;
      } else {
        const data: unknown = await response.json();
        if (typeof data !== 'object' || data === null || Array.isArray(data)) {
          state = 'failed';
        } else {
          const record = data as Record<string, unknown>;
          const hasId = 'id' in record && record.id !== undefined && record.id !== null;
          const hasTitle = 'title' in record && record.title !== undefined && record.title !== null;
          const hasCompleted = 'completed' in record && typeof record.completed === 'boolean';

          if (!hasId && !hasTitle && !hasCompleted) {
            state = 'failed';
          } else {
            state = 'success';
            healthData = {
              id: hasId ? record.id : undefined,
              title: hasTitle ? record.title : undefined,
              completed: hasCompleted ? (record.completed ? 'Yes' : 'No') : undefined,
            };
          }
        }
      }
    } catch {
      state = 'failed';
    }
  }

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Health
      </h1>
      {state === 'missing_env' && (
        <div className="rounded-card border border-border bg-surface p-4">
          <p className="text-foreground">
            HEALTH_API_URL is not configured.
          </p>
        </div>
      )}
      {state === 'failed' && (
        <div className="rounded-card border border-border bg-surface p-4">
          <p className="text-foreground">Health check failed.</p>
          {statusCode !== undefined && (
            <p className="text-muted">Status: {statusCode}</p>
          )}
        </div>
      )}
      {state === 'success' && (
        <div className="rounded-card border border-border bg-surface p-4 space-y-2">
          {healthData.id !== undefined && (
            <p className="text-foreground">
              <span className="text-muted">ID:</span> {String(healthData.id)}
            </p>
          )}
          {healthData.title !== undefined && (
            <p className="text-foreground">
              <span className="text-muted">Title:</span> {String(healthData.title)}
            </p>
          )}
          {healthData.completed !== undefined && (
            <p className="text-foreground">
              <span className="text-muted">Completed:</span> {healthData.completed}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
