import styled from 'styled-components'

import { VestAmmCreationStep, useVestAmmCreation } from '@/src/providers/vestAMMCreationProvider'

const Wrapper = styled.div`
  width: 100%;
  background-color: blue;
  height: 500px;
  grid-column: 2/3;
  grid-row: 2;
`

const Recap = () => {
  const { creationStep } = useVestAmmCreation()

  return creationStep === VestAmmCreationStep.Strategy ? <></> : <Wrapper>Recap</Wrapper>
}

export default Recap
