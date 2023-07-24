import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import { StrategySelection } from '@/src/components/vestamm/creation/steps/StrategySelection'
import { VestAmmCreationStep, useVestAmmCreation } from '@/src/providers/vestAMMCreationProvider'

const Wrapper = styled.div`
  margin: 0 auto 30px;
  max-width: 100%;
  width: ${({ theme }) => theme.layout.maxWidth};
`

const Create: NextPage = () => {
  const { creationStep } = useVestAmmCreation()
  const [step, setStep] = useState<ReactNode>()

  useEffect(() => {
    switch (creationStep) {
      case VestAmmCreationStep.Strategy:
        setStep(() => <StrategySelection />)
        break
      default:
        setStep(() => <WrongStep />)
    }
  }, [creationStep])

  return (
    <>
      <Head>
        <title>Create VestAMM</title>
      </Head>
      <Wrapper>{step}</Wrapper>
    </>
  )
}

function WrongStep() {
  return <>Error</>
}

export default Create
