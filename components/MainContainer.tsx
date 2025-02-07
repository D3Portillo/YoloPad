import { cn } from "@/lib/utils"
import type { PropsWithChildrenCx } from "@/types/common"

export default function MainContainer({
  children,
  className,
}: PropsWithChildrenCx) {
  return (
    <main
      className={cn("w-full max-w-screen-2xl mx-auto px-4 md:px-12", className)}
    >
      {children}
    </main>
  )
}
