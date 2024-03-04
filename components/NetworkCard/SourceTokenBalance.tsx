"use client"

import { useAccount } from "wagmi"
import { formatUnits } from "viem"
import { useSourceTokenBalance } from "@/hooks/useSourceTokenBalance"

export function SourceTokenBalance() {
    const { isConnected } = useAccount()
    const sourceTokenBalance = useSourceTokenBalance()

    const balance = sourceTokenBalance.data?.value ?? 0n
    const decimals = sourceTokenBalance.data?.decimals ?? 0

    if (!isConnected || !sourceTokenBalance.isSuccess) {
        return null
    }

    return <span>{formatUnits(balance, decimals)}</span>
}
