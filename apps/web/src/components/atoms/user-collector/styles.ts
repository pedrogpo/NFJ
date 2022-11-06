import styled from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

export const UserCollectorContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 2.3px;

  ${() => {
    let finalDivs = ''
    for (var i = 1; i < 10; i++) {
      finalDivs += `
        &>div:nth-child(${i}){
          transform: translateX(calc(${i} * -10%));
        }
      `
    }
    return finalDivs
  }}
`

interface UserCollectorBoxProps {
  outLineColor: ColorThemeType
}
export const UserCollectorBox = styled.div<UserCollectorBoxProps>`
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary_400};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.gray_100};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.text.xs};

  outline: 3px solid ${({ theme, outLineColor }) => theme.colors[outLineColor]};
`