import "@coinbase/onchainkit/styles.css"
import "./globals.css"

import type { Metadata } from "next"
import { Fragment } from "react"
import { Noto_Sans_JP } from "next/font/google"

import TopNavigation from "@/components/TopNavigation"
import MainContainer from "@/components/MainContainer"
import Providers from "./web3/Providers"

const baseFont = Noto_Sans_JP({
  subsets: [],
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  title: "YoloPad - The one stop for monetizing your projects",
  description: "YoloPad: Raise funds. Get market insights. Invest and launch.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${baseFont.className} antialiased`}>
        <Providers>
          <Fragment>
            <MainContainer className="z-2 relative">
              <TopNavigation />
            </MainContainer>
            {children}
          </Fragment>
        </Providers>
      </body>
    </html>
  )
}
