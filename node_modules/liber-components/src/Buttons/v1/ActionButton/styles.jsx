import styled from 'styled-components';
import { media } from '../../../Util';


export const Label = styled.div`
  text-align: center;
  width: unset;
  opacity: 1;
  transition: all 300ms  ${props => (props.hover ? 'ease-out' : 'ease-in')};
  white-space: nowrap;
  color: inherit;

  ${media.large`
    width: ${props => (props.hover ? props.size || '0px' : '0px')};
    opacity: ${props => (props.hover ? '1' : '0')};
  `}
  ${media.extraLarge`
    width: ${props => (props.hover ? props.size || '0px' : '0px')};
    opacity: ${props => (props.hover ? '1' : '0')};
  `}
`;

export const Icon = styled.div`
  margin-right: 15px;
  transition: margin 300ms  ${props => (props.hover ? 'ease-out' : 'ease-in')};
  ${media.large`
    margin-right: ${props => (props.hover ? '15px' : '0px')};
  `}
  ${media.extraLarge`
    margin-right: ${props => (props.hover ? '15px' : '0px')};
  `}
`;
