import styled from "styled-components"
import { ColorThemeType, TextFontSize, WeightFont } from "~/core/constants/theme"

interface TextProps{
  size: TextFontSize,
  color: ColorThemeType,
  weight: WeightFont
}

export const Text = styled.p<TextProps>`
  color: ${({theme, color}) => theme.colors[color]};
  font-size: ${({theme, size}) => theme.typography.text[size]};
  font-weight: ${({theme, weight}) => theme.typography.weight[weight]};
  margin-bottom: 0;
`