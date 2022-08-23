import { MotiView } from 'moti'
import styled from 'styled-components/native'

export const Container = styled(MotiView)`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 18px;
  margin: -24px 14px 0;
  border-radius: 4px;
  z-index: 99;
`

export const Item = styled.View``
export const ItemTitle = styled.Text`
  font-size: 20px;
  color: #dadada;
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`
export const CurrencySymbol = styled.Text`
  color: #dadada;
  margin-right: 6px;
`
export const Balance = styled.Text`
  font-size: 22px;
  color: #2ecc71;
`
export const Expenses = styled.Text`
  font-size: 22px;
  color: #e74c3c;
`
