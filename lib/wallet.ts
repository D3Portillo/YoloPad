import {
  useAccountModal,
  useConnectModal,
  useChainModal,
} from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export const useRkAccountModal = () => {
  const { isConnected, address } = useAccount()
  const { openChainModal } = useChainModal()
  const { openConnectModal = openChainModal } = useConnectModal()
  const { openAccountModal = openConnectModal } = useAccountModal()

  return {
    address,
    isConnected,
    openAccountModal,
    openConnectModal,
    openChainModal,
  }
}
