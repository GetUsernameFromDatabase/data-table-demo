import { cn } from "@/lib/utils";

export interface PageWrapperProperties
  extends React.HTMLAttributes<HTMLElement> {}
export function PageWrapper({
  className,
  ...properties
}: PageWrapperProperties) {
  return (
    <section
      className={cn("w-full h-full", className)}
      {...properties}
    ></section>
  );
}
