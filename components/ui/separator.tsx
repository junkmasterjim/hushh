import { cn } from "@/lib/utils";

export const Separator = ({ className }: { className?: string }) => {
  return <div className={cn("h-px bg-secondary", className)} />;
};
