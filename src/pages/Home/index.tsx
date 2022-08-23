import { Actions } from '../../components/Actions'
import { Balance } from '../../components/Balance'
import { Header } from '../../components/Header'
import { IMovement, Movements } from '../../components/Movements'
import * as S from './styles'

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '17/09/2022',
    type: 'outcome',
  },
  {
    id: 2,
    label: 'Pix Cliente x',
    value: '2.500,00',
    date: '20/09/2022',
    type: 'income',
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2022',
    type: 'income',
  },
]

export function Home() {
  return (
    <S.Container>
      <Header name="Arli Machado" />

      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <S.Title>Últimas movimentações</S.Title>

      <S.List
        data={list}
        keyExtractor={(item: IMovement) => String(item.id)}
        showsverticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </S.Container>
  )
}
