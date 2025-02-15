import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function noOp() {}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const beautifyAddress = (addr: string, size = 4, separator = "...") =>
  `${addr.substr(0, size)}${separator}${addr.substr(-size, size)}`
