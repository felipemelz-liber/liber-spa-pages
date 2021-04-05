import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import { FaCheck } from '../../../Icons';
import { handleThemeFromObject } from '../../../Themes';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: Roboto;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

export const TableHeader = styled.thead`
  border: 0px;
  position: relative;
  & > tr {
    border-bottom: solid 1px ${props => (
    handleThemeFromObject(props.theme, 'table.header.border', '#009dff', props.headerColor)
  )};
  }
`;

export const TableBody = styled.tbody`
  position: relative;
`;

export const TableFooter = styled.tfoot`
`;

export const TableRow = styled.tr`
  border: 0px;
  position: relative;
  ${TableBody} & {
    background-color: ${props => (props.selected
    ? handleThemeFromObject(props.theme, 'table.row.selected.odd', 'rgba(235, 247, 255, 0.4)')
    : handleThemeFromObject(props.theme, 'table.row.odd', 'transparent'))};
    &:nth-of-type(even) {
      background-color: ${props => (props.selected
    ? handleThemeFromObject(props.theme, 'table.row.selected.even', 'rgba(221, 241, 255, 0.5)')
    : handleThemeFromObject(props.theme, 'table.row.even', '#f7f7f7'))};
  }
    &:hover {
      background-color: ${props => (props.selected
    ? handleThemeFromObject(props.theme, 'table.row.selected.hover', 'rgba(221, 241, 255, 0.7)')
    : handleThemeFromObject(props.theme, 'table.row.hover', '#f3f3f3'))};
    }
  }
`;

export const TableRowColumn = styled.td`
  min-height: 48px;
  border: 0px;
  padding: 10px 40px;
  color: ${props => handleThemeFromObject(props.theme, 'table.body.color', '#4e4e4e')};
  font-weight: 500;
  position: relative;
`;

export const TableHeaderColumn = styled.th`
  position: relative;
  font-weight: bold;
  color: ${props => (
    handleThemeFromObject(props.theme, 'table.header.color', '#009dff', props.headerColor)
  )};
  border: 0px;
  border-bottom: solid 1px ${props => handleThemeFromObject(props.theme, 'table.header.border', '#009dff')};
  padding: 8px;
  text-align: center;
  width: ${props => props.width};
`;

const CheckCommon = css`
  display: block;
  cursor: pointer;
  width: ${props => props.width || '16px'};
  height: ${props => props.height || '16px'};
  border-radius: 50%;
`;

const CheckAnim = keyframes`
  0% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const NotChecked = styled.div`
  ${CheckCommon}
  border: solid 3px ${props => handleThemeFromObject(props.theme, 'table.check.border', '#009DFF')};
  background: ${props => handleThemeFromObject(props.theme, 'table.check.unchecked', 'transparent')};
  animation: ${CheckAnim} 0.2s ease;
`;

export const Checked = styled.div`
  ${CheckCommon}
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${props => handleThemeFromObject(props.theme, 'table.check.icon', '#ffffff')};
  border: solid 3px ${props => handleThemeFromObject(props.theme, 'table.check.checked', '#13CE66')};
  background: ${props => handleThemeFromObject(props.theme, 'table.check.checked', '#13CE66')};
  animation: ${CheckAnim} 0.2s ease;
`;

export const CheckIcon = styled(FaCheck)`
  display: block;
  width: calc(${props => props.width || '16px'} - 4px);
  height: calc(${props => props.height || '16px'} - 4px);
`;

export const TableCheck = ({ checked, ...props }) => (
  checked
    ? <Checked {...props}><CheckIcon {...props} /></Checked>
    : <NotChecked {...props} />
);

TableCheck.propTypes = {
  checked: PropTypes.bool,
};

TableCheck.defaultProps = {
  checked: false,
};
