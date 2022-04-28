import styled, { DefaultTheme } from 'styled-components';

export interface FlexProps {
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flex?: string;
  gap?: keyof DefaultTheme['spacing'];
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  width?: string;
  height?: string;
  boxShadow?: keyof DefaultTheme['shadow'];
  marginRight?: keyof DefaultTheme['spacing'];
  borderRadiusTop?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-top-left-radius: ${(props) => props.borderRadiusTop};
  border-top-right-radius: ${(props) => props.borderRadiusTop};
  gap: ${(props) => (props.gap ? props.theme.spacing[props.gap] : null)};
  padding: ${(props) => (props.padding ? props.theme.spacing[props.padding] : null)};
  margin-right: ${(props) => (props.marginRight ? props.theme.spacing[props.marginRight] : null)};
  background-color: ${(props) => (props.backgroundColor ? props.theme.colors[props.backgroundColor] : null)};
  box-shadow: ${(props) => (props.boxShadow ? props.theme.shadow[props.boxShadow] : null)};
  overflow: hidden;
`;