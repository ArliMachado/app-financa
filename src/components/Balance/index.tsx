import * as S from './styles'

interface IBalanceProps {
  saldo: string
  gastos: string
}

export function Balance({ saldo, gastos }: IBalanceProps) {
  return (
    <S.Container
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900,
      }}
    >
      <S.Item>
        <S.ItemTitle>Saldo</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          <S.Balance>{saldo}</S.Balance>
        </S.Content>
      </S.Item>

      <S.Item>
        <S.ItemTitle>Gastos</S.ItemTitle>
        <S.Content>
          <S.CurrencySymbol>R$</S.CurrencySymbol>
          <S.Expenses>{gastos}</S.Expenses>
        </S.Content>
      </S.Item>
    </S.Container>
  )
}
