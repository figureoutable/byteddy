import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[10px] border-hairline border-border bg-surface p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
