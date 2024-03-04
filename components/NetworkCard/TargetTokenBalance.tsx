"use client"

import { useAccount } from "wagmi"
import { formatUnits } from "viem"
import { useTargetTokenBalance } from "@/hooks/useTargetTokenBalance"

export function TargetTokenBalance() {
    const { isConnected } = useAccount()
    const targetTokenBalance = useTargetTokenBalance()

    const balance = targetTokenBalance.data?.value ?? 0n
    const decimals = targetTokenBalance.data?.decimals ?? 0

    if (!isConnected || !targetTokenBalance.isSuccess) {
        return null
    }

    return <span>{formatUnits(balance, decimals)}</span>
}
