import styled from 'styled-components';
import { CardContent } from '../Card';
import { media } from '../Util';

export const DisplayRow = styled(CardContent)`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  box-sizing: border-box;
  flex-direction: column;
  ${media.large`
    flex-direction: row;
  `}
`;
