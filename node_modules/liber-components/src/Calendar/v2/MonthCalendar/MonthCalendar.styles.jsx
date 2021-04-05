import React from 'react';
import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../../../Themes';
import { MdChevronLeft, MdChevronRight } from '../../../Icons';

export const Column = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Controls = styled(Row)`
  margin-bottom: 32px;
  font-size: ${({ theme }) => getTheme(theme, 'font-sizes.mobile-large', '14px')};
  font-weight: ${({ theme }) => getTheme(theme, 'font-weights.medium', '500')};
  font-family: ${({ theme }) => getTheme(theme, 'font-family', 'Roboto')};
  color: ${({ theme }) => getTheme(theme, 'colors.dark-text', '#405f71')};
`;

const defineType = (type = 'basic') =>
  ({
    basic: css`
      background-color: transparent;
      color: ${({ theme }) => getTheme(theme, 'colors.dark-text87', '#587383')};
      &:hover {
        background-color: ${({ theme }) => getTheme(theme, 'colors.secondary', '#f0f2f4')};
      }
    `,
    past: css`
      background-color: transparent;
      color: ${({ theme }) => getTheme(theme, 'colors.dark-text38', '#b6c2c9')};
      &:hover {
        background-color: ${({ theme }) => getTheme(theme, 'colors.secondary', '#f0f2f4')};
      }
    `,
    range: css`
      color: ${({ theme }) => getTheme(theme, 'colors.primary', '#009dff')};
    `,
    'past-range': css`
      color: ${({ theme }) => getTheme(theme, 'colors.dark-text38', '#b6c2c9')};
    `,
    disabled: css`
      background-color: transparent;
      color: ${({ theme }) => getTheme(theme, 'colors.dark-text38', '#b6c2c9')};
      pointer-events: none;
      &:hover {
        background-color: ${({ theme }) => getTheme(theme, 'colors.secondary', '#f0f2f4')};
      }
    `,
    empty: css`
      color: transparent !important;
      pointer-events: none;
    `,
    today: css`
      background-color: ${({ theme }) => getTheme(theme, 'colors.light-blue75', '#f0f9ff')};
      color: ${({ theme }) => getTheme(theme, 'colors.primary87', '#66c4ff')};
      &:hover {
        background-color: ${({ theme }) => getTheme(theme, 'colors.light-blue50', '#a4dcff')};
        color: ${({ theme }) => getTheme(theme, 'colors.liber-white', '#fafdff')};
      }
    `,
    checked: css`
      background-color: ${({ theme }) => getTheme(theme, 'colors.liber-blue', '#009dff')};
      color: ${({ theme }) => getTheme(theme, 'colors.liber-white', '#fafdff')};
      &:hover {
        background-color: ${({ theme }) => getTheme(theme, 'colors.dark-blue', '#0097f5')};
      }
    `,
    label: css`
      background-color: transparent;
      color: ${({ theme }) => getTheme(theme, 'colors.dark-text', '#405f71')};
      font-weight: ${({ theme }) => getTheme(theme, 'font-weights.medium', '500')};
    `,
  }[type]);

export const Unit = styled.div`
  --size: 36px;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-family: ${({ theme }) => getTheme(theme, 'font-family', 'Roboto')};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  ${({ type }) => defineType(type)}
  margin-right: 4px;
  transition: background-color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
    color 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  &:last-child {
    margin-right: 0px;
  }
`;

const chevron = css`
  --size: 24px;
  min-width: var(--size);
  max-width: var(--size);
  min-height: var(--size);
  max-height: var(--size);
  fill: ${({ theme }) => getTheme(theme, 'colors.dark-text87', '#587383')};
`;

export const PrevIcon = styled(MdChevronLeft)`
  ${chevron}
`;

export const NextIcon = styled(MdChevronRight)`
  ${chevron}
`;

export const PrevUnit = styled(Unit)`
  margin-right: auto;
`;
export const NextUnit = styled(Unit)`
  margin-left: auto;
`;

export const Prev = props => (
  <PrevUnit {...props}>
    <PrevIcon />
  </PrevUnit>
);

export const Next = props => (
  <NextUnit {...props}>
    <NextIcon />
  </NextUnit>
);
