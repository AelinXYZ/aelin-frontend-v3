import { NextPage } from 'next'
import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'

import Layout from '@/src/components/vestamm/creation/Layout'
import Recap from '@/src/components/vestamm/creation/Recap'
import Stepper from '@/src/components/vestamm/creation/Stepper'
import Naming from '@/src/components/vestamm/creation/steps/Naming'
import { StrategySelection } from '@/src/components/vestamm/creation/steps/StrategySelection'
import { VestAmmCreationStep, useVestAmmCreation } from '@/src/providers/vestAMMCreationProvider'

const Create: NextPage = () => {
  const { creationStep } = useVestAmmCreation()
  const [step, setStep] = useState<ReactNode>()

  useEffect(() => {
    switch (creationStep) {
      case VestAmmCreationStep.Strategy:
        setStep(() => <StrategySelection />)
        break
      case VestAmmCreationStep.Naming:
        setStep(() => <Naming />)
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
      <Layout>
        <Stepper />
        {step}
        <Recap />
      </Layout>
    </>
  )
}

function WrongStep() {
  return <>Error</>
}

export default Create
