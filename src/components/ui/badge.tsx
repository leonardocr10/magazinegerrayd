import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "orange" | "yellow" | "neutral";
  className?: string;
};

export function Badge({ children, tone = "blue", className }: BadgeProps) {
  const tones = {
    blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/15",
    orange: "bg-brand-orange/10 text-brand-orange border-brand-orange/15",
    yellow: "bg-brand-yellow/20 text-amber-700 border-brand-yellow/30",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
