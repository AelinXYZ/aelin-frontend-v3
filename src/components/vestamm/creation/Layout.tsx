import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { VestAmmCreationStep, useVestAmmCreation } from '@/src/providers/vestAMMCreationProvider'

const BaseWrapper = styled.div`
  margin: 0 auto 30px;
  max-width: 100%;
  width: ${({ theme }) => theme.layout.maxWidth};
`

const Wrapper = styled(BaseWrapper)<{ steps: boolean }>`
  ${({ steps }) =>
    steps &&
    css`
      display: flex;
      flex-direction: column;

      @media (min-width: ${({ theme }) => theme.themeBreakPoints.desktopStart}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
    `}}
`

const Layout = ({ children }: { children: ReactNode }) => {
  const { creationStep } = useVestAmmCreation()

  return <Wrapper steps={creationStep !== VestAmmCreationStep.Strategy}>{children}</Wrapper>
}

export default Layout
