import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "ice" | "navy";
  id?: string;
};

const bgMap = {
  white: "bg-white",
  ice: "bg-ice",
  navy: "bg-navy text-white",
};

export function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", bgMap[background], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
