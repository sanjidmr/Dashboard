import { cn } from "@/src/lib/utils";

export default function Skeleton({ className }) {
  return (
    <div className={cn("animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg", className)} />
  );
}
