import { MotiText } from 'moti'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`

export const Date = styled.Text`
  color: #dadada;
  font-weight: bold;
`

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`

export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

type Valuetypes = {
  valueType: 'income' | 'outcome'
}

const valueColors = {
  income: '#3ecc71',
  outcome: '#e74c3c',
}

export const Value = styled(MotiText)<Valuetypes>`
  font-size: 16px;
  color: ${({ valueType }) => valueColors[valueType]};
  font-weight: bold;
`
export const Skeleton = styled.View`
  margin-top: 6px;
  width: 80px;
  height: 10px;
  background-color: #dadada;
  border-radius: 8px;
`
