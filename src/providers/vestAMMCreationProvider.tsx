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

export type VestAmmCreationContextType = {
  strategy?: VestAmmStrategy
  setStrategy: Dispatch<SetStateAction<VestAmmStrategy | undefined>>
  creationStep: VestAmmCreationStep
  setCreationStep: Dispatch<SetStateAction<VestAmmCreationStep>>
}

const VestAmmCreationContext = createContext<VestAmmCreationContextType>({} as any)

export const VestAmmCreationContextProvider = ({ children }: { children: ReactNode }) => {
  const [strategy, setStrategy] = useState<VestAmmStrategy>()
  const [creationStep, setCreationStep] = useState<VestAmmCreationStep>(
    VestAmmCreationStep.Strategy,
  )

  console.log({ creationStep })

  return (
    <VestAmmCreationContext.Provider
      value={{
        strategy,
        setStrategy,
        creationStep,
        setCreationStep,
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
