import React from 'react';
import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../Themes';
import { MdChevronRight, MdChevronLeft } from '../Icons';

const icon = css`
  --size: 24px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  margin-top: 2px;
  fill: ${props => getTheme(props.theme, 'colors.grey4', '#6287a7')};
`;

export const PrevIcon = styled(MdChevronLeft)`
  ${icon}
`;
export const NextIcon = styled(MdChevronRight)`
  ${icon}
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const PageContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 22px;
  letter-spacing: 0.1px;
  text-align: left;
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  color: ${props => getTheme(props.theme, 'colors.petroleum', '#4b6f85')};
`;

const buttons = css`
  width: 40px;
  height: 36px;
  background-color: ${props => getTheme(props.theme, 'colors.grey5', '#ecf0f3')};
  border: 0px;
  &:disabled {
    opacity: 0.38;
    cursor: default;
  }
`;

const Prev = styled.button`
  ${buttons}
  margin-left: 24px;
  border-radius: 4px 0px 0px 4px;
`;

const Next = styled.button`
  ${buttons}
  border-radius: 0px 4px 4px 0px;
  border-left: 1px solid ${props => getTheme(props.theme, 'colors.grey6', '#d2dbe0')};
`;

export const PrevButton = props => (
  <Prev {...props}>
    <PrevIcon />
  </Prev>
);

export const NextButton = props => (
  <Next {...props}>
    <NextIcon />
  </Next>
);

export const PageInput = styled.input`
  height: 36px;
  width: 75px;
  border-radius: 4px;
  border: solid 1px #ecf0f3;
  background-color: ${props => getTheme(props.theme, 'colors.v2.white', '#ffffff')};
  margin: 0 12px;
  padding: 0px 12px;
  line-height: 22px;
  font-size: ${props => getTheme(props.theme, 'font-sizes.p', '16px')};
  font-family: ${props => getTheme(props.theme, 'font-family', 'Roboto')};
  font-weight: ${props => getTheme(props.theme, 'font-weights.regular', '400')};
  color: ${props => getTheme(props.theme, 'colors.gray4', '#6287a7')};
  box-sizing: border-box;
`;
PageInput.defaultProps = {
  type: 'number',
};
