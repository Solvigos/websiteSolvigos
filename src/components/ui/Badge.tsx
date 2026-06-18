import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-medium px-3 py-1 rounded-full bg-tint text-blue",
        className
      )}
    >
      {children}
    </span>
  );
}
