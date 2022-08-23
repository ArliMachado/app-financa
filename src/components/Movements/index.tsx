import { AnimatePresence } from 'moti'
import { useState } from 'react'
import * as S from './styles'

export interface IMovement {
  id: number
  label: string
  value: string
  date: string
  type: 'income' | 'outcome'
}

export interface IMovementsProps {
  data: IMovement
}

export function Movements({ data }: IMovementsProps) {
  const [showValue, setShowValue] = useState(false)

  function handleChangeVisibilityValue() {
    setShowValue(!showValue)
  }

  return (
    <S.Container onPress={handleChangeVisibilityValue}>
      <S.Date>{data.date}</S.Date>
      <S.Content>
        <S.Label>{data.label}</S.Label>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <S.Value
              valueType={data.type}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: 'spring',
                duration: 500,
              }}
            >
              {data.type === 'income'
                ? `R$ ${data.value}`
                : `R$ -${data.value}`}
            </S.Value>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <S.Skeleton></S.Skeleton>
          </AnimatePresence>
        )}
      </S.Content>
    </S.Container>
  )
}
