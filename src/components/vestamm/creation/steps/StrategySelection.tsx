import React from 'react'
import styled from 'styled-components'

import { ButtonGradient } from '@/src/components/pureStyledComponents/buttons/Button'
import { BaseCard } from '@/src/components/pureStyledComponents/common/BaseCard'
import { BaseParagraph } from '@/src/components/pureStyledComponents/text/BaseParagraph'
import { BaseTitle } from '@/src/components/pureStyledComponents/text/BaseTitle'
import {
  VestAmmCreationStep,
  VestAmmStrategy,
  useVestAmmCreation,
} from '@/src/providers/vestAMMCreationProvider'

const STRATEGIES = [
  {
    title: 'Priced Liquidity launch',
    strategyType: VestAmmStrategy.LiquidityLaunch,
    description: 'Pair a percentage of your token in a new AMM pool for a fixed price',
  },
  {
    title: 'Protocol liquidity growth round',
    strategyType: VestAmmStrategy.LiquidityGrowth,
    description:
      'Increase protocol owned liquidity by keeping up to 100% of LP tokens and provide investors with single-sided rewards on a vesting schedule and other unique incentives',
  },
  {
    title: 'Community liquidity growth round',
    strategyType: VestAmmStrategy.CommunityLiquidityGrowth,
    description:
      'Obtain reliable liquidity by locking LP tokens on a vesting schedule and allow investors to keep up to 100% of LP tokens at the end of the vesting period',
  },
  {
    title: 'Liquidity lock',
    strategyType: VestAmmStrategy.LiquidityLock,
    description:
      'Allows investors to lock their LP tokens on a vesting schedule for single-sided rewards that can be placed on a vesting schedule',
  },
]

const Card = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 100%;
  width: 90%;
  height: 500px;
`
const Title = styled(BaseTitle)`
  color: ${({ theme }) => theme.colors.secondary};
  min-height: 75px;
`

const Button = styled(ButtonGradient)`
  margin: 30px auto 0;
`

const CardsWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.tabletPortraitStart}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.themeBreakPoints.desktopStart}) {
    display: flex;
  }
`

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  margin: auto;
  margin-bottom: 40px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`

export const StrategySelection = () => {
  const { setCreationStep, setStrategy } = useVestAmmCreation()

  const handleCreateVestAmmClick = (strategy: VestAmmStrategy) => {
    setStrategy(strategy)
    setCreationStep(VestAmmCreationStep.Naming)
  }

  return (
    <>
      <PageTitle>Select a core liquidity strategy</PageTitle>
      <CardsWrapper>
        {STRATEGIES.map(({ description, strategyType, title }, index) => (
          <Card key={index}>
            <CardBody>
              <Circle />
              <Title>{title}</Title>
              <BaseParagraph>{description}</BaseParagraph>
            </CardBody>
            <CardFooter>
              <Button onClick={() => handleCreateVestAmmClick(strategyType)}>Create VestAMM</Button>
            </CardFooter>
          </Card>
        ))}
      </CardsWrapper>
    </>
  )
}
