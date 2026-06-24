const requestLog = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function rateLimit(ip: string): { allowed: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = requestLog.get(ip) || [];
  const recent = timestamps.filter((t) => t > windowStart);

  const remaining = Math.max(0, MAX_REQUESTS - recent.length);
  const reset = Math.ceil((now + WINDOW_MS) / 1000);

  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(ip, recent);
    const oldestInWindow = recent[0];
    const retryAfter = Math.ceil((oldestInWindow + WINDOW_MS - now) / 1000);
    return { allowed: false, remaining: 0, reset: Math.ceil((oldestInWindow + WINDOW_MS) / 1000) };
  }

  recent.push(now);
  requestLog.set(ip, recent);

  return { allowed: true, remaining, reset };
}
