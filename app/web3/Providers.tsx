"use client"

import "@rainbow-me/rainbowkit/styles.css"

import type { ReactNode } from "react"
import { OnchainKitProvider } from "@coinbase/onchainkit"
import { baseSepolia } from "wagmi/chains" // add baseSepolia for testing
import { createConfig, http, WagmiProvider } from "wagmi"

import {
  walletConnectWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets"

import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Enable Coinbase Smart Wallet for testing
coinbaseWallet.preference = "smartWalletOnly"

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [coinbaseWallet, walletConnectWallet],
    },
  ],
  {
    appName: "YoloPad",
    projectId: "YOUR_PROJECT_ID",
  }
)

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors,
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
})

const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <OnchainKitProvider
      chain={baseSepolia}
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </OnchainKitProvider>
  )
}
