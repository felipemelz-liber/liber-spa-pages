import styled, { css } from 'styled-components';

export const Month = styled.span`
  max-width: 35px;
  max-height: 35px;
  min-width: 35px;
  min-height: 35px;
  font-family: Roboto;
  font-size: 16px;
  color: #717171;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  cursor: pointer;
  border-radius: 50%;
  &:not([disabled]):hover {
    background-color: ${props => (props.selected ? '#009dff' : '#dff0fa')};
  }
  &[disabled] {
    color: #e6e6e6;
    cursor: unset;
  }

  ${props => {
    if (props.selected) {
      return css`
        background-color: #009dff;
        color: #fff;
      `;
    }
    return null;
  }}
`;
export const Cell = styled.div`
  flex-basis: 25%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
`;

export const MonthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-self: center;
  justify-content: flex-start;
  margin-bottom: 4px;
`;

export const YearLabel = styled.div`
  color: #a4a4a4;
  display: flex;
  & > span {
    flex-basis: 75%;
  }
  & ${Cell} {
    margin: 8px 4px 0px 4px;
  }
`;
export const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 160px;
`;
