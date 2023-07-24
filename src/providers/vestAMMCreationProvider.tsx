import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

import { genericSuspense } from '../components/helpers/SafeSuspense'

export const enum VestAmmStrategy {
  LiquidityLaunch,
  LiquidityGrowth,
  CommunityLiquidityGrowth,
  LiquidityLock,
}

export const enum VestAmmCreationStep {
  Strategy,
  Naming,
  TokenSelection,
  HolderInfo,
  DepositWindow,
  VestingSchedule,
  SingleRewards,
  Access,
}

export const Amm = {
  Balancer: 'Balancer',
  Curve: 'Curve',
  Sushiswap: 'Sushiswap',
}

type AmmType = (typeof Amm)[keyof typeof Amm]

export type VestAmmCreationContextType = {
  strategy?: VestAmmStrategy
  setStrategy: Dispatch<SetStateAction<VestAmmStrategy | undefined>>
  creationStep: VestAmmCreationStep
  setCreationStep: Dispatch<SetStateAction<VestAmmCreationStep>>
  name?: string
  setName: Dispatch<SetStateAction<string | undefined>>
  symbol?: string
  setSymbol: Dispatch<SetStateAction<string | undefined>>
  amm: AmmType
  setAmm: Dispatch<SetStateAction<AmmType>>
}

const VestAmmCreationContext = createContext<VestAmmCreationContextType>({} as any)

export const VestAmmCreationContextProvider = ({ children }: { children: ReactNode }) => {
  const [strategy, setStrategy] = useState<VestAmmStrategy>()
  const [creationStep, setCreationStep] = useState<VestAmmCreationStep>(
    VestAmmCreationStep.Strategy,
  )
  const [name, setName] = useState<string>()
  const [symbol, setSymbol] = useState<string>()
  const [amm, setAmm] = useState<AmmType>(Amm.Balancer)

  return (
    <VestAmmCreationContext.Provider
      value={{
        strategy,
        setStrategy,
        creationStep,
        setCreationStep,
        name,
        setName,
        symbol,
        setSymbol,
        amm,
        setAmm,
      }}
    >
      {children}
    </VestAmmCreationContext.Provider>
  )
}

export default genericSuspense(VestAmmCreationContextProvider)

export function useVestAmmCreation(): VestAmmCreationContextType {
  const context = useContext(VestAmmCreationContext)
  if (!context) {
    throw new Error('Error on vestAmm context')
  }
  return context
}
