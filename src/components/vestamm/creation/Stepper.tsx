import styled from 'styled-components'

import { VestAmmCreationStep, useVestAmmCreation } from '@/src/providers/vestAMMCreationProvider'

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
  height: 50px;
  grid-column: 1 / 3;
  grid-row: 1;
`

const Stepper = () => {
  const { creationStep } = useVestAmmCreation()

  return creationStep === VestAmmCreationStep.Strategy ? <></> : <Wrapper>Stepper</Wrapper>
}

export default Stepper
