export type { JSX, PropsWithChildren } from "react"
import type { PropsWithChildren } from "react"

export type PropsWithChildrenCx<T = {}> = PropsWithChildren<T> & {
  className?: string
}
