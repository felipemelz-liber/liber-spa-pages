import styled, { css } from 'styled-components';

import { Tag as BaseTag } from 'liber-components';

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: ${({ columnSize = 12 }) => `${(columnSize / 12) * 100}%`};
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ spacing = 0 }) => css`
    margin: ${`-${spacing}px`};
    width: calc(100% - ${2 * spacing}px);
    & > ${Grid} {
      padding: ${`${spacing}px`};
    }
  `};
`;

export const Tag = styled(BaseTag)`
  margin-right: 0px;
  color: #798e9b;
`;

export const PlusText = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.02px;
  text-align: left;
  color: #798e9b;
`;
