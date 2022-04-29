import styled from 'styled-components';
import { IFlexProps } from '../../types';

export const Flex = styled.div<IFlexProps>`
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
