import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "border border-border rounded-xl bg-white p-6 transition-all duration-200",
        hover && "hover:border-blue hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
