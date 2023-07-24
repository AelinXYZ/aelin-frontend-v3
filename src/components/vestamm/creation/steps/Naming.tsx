import styled from 'styled-components'

import { Dropdown, DropdownItem } from '@/src/components/common/Dropdown'
import {
  ButtonDropdown,
  ButtonGradient,
} from '@/src/components/pureStyledComponents/buttons/Button'
import { BaseCard } from '@/src/components/pureStyledComponents/common/BaseCard'
import { LabeledTextfield } from '@/src/components/pureStyledComponents/form/Textfield'
import { BaseParagraph } from '@/src/components/pureStyledComponents/text/BaseParagraph'
import { BaseTitle } from '@/src/components/pureStyledComponents/text/BaseTitle'
import {
  Amm,
  VestAmmCreationStep,
  useVestAmmCreation,
} from '@/src/providers/vestAMMCreationProvider'

const Card = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 500px;
  padding: 50px;
`

const Title = styled(BaseTitle)`
  margin-bottom: 20px;
`
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 40px 0;
  gap: 20px;
`

const Naming = () => {
  const { amm, name, setAmm, setCreationStep, setName, setSymbol, symbol } = useVestAmmCreation()

  const handleOnClickNext = () => {
    setCreationStep(VestAmmCreationStep.TokenSelection)
  }

  return (
    <Card>
      <Title>vAMM Naming</Title>
      <BaseParagraph>Write in the name you want your vAMM to be called</BaseParagraph>
      <InputsWrapper>
        <LabeledTextfield
          label="VestAMM Name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <LabeledTextfield
          label="VestAMM Symbol"
          onChange={(e) => {
            setSymbol(e.target.value)
          }}
          value={symbol}
        />
        <Dropdown
          dropdownButtonContent={<ButtonDropdown>{amm}</ButtonDropdown>}
          items={Object.values(Amm).map((item, key) => (
            <DropdownItem
              key={key}
              onClick={() => {
                setAmm(item)
              }}
            >
              {item}
            </DropdownItem>
          ))}
        />
      </InputsWrapper>
      <ButtonGradient onClick={handleOnClickNext}>Next</ButtonGradient>
    </Card>
  )
}

export default Naming
