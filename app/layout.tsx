import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const baseFont = Noto_Sans_JP({
  subsets: [],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "YoloPad - The one stop for monetizing your products",
  description: "YoloPap: Raise funds. Get market insights. Invest and launch.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} antialiased`}>{children}</body>
    </html>
  )
}
