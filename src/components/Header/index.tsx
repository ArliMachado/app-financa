import * as S from './styles'

import { Feather } from '@expo/vector-icons'

interface HeaderProps {
  name: string
}

export function Header({ name }: HeaderProps) {
  return (
    <S.Container>
      <S.Content
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 300,
        }}
      >
        <S.Username
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800,
          }}
        >
          {name}
        </S.Username>

        <S.ButtonUser activeOpacity={0.7}>
          <Feather name="user" size={27} color="#fff" />
        </S.ButtonUser>
      </S.Content>
    </S.Container>
  )
}
