import styled, { css } from 'styled-components';
import { handleThemeFromObject as getTheme } from '../Themes';
import { CheckboxTable } from '../Table/components/SelectionTable';

const subhead = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

const body = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

export const List = styled.div`
  width: ${props => props.width};
  display: inline-block;
  background-color: ${props => getTheme(props.theme, 'colors.white', '#ffffff')};
`;

export const ListHeader = styled.div`
  ${props => getTheme(props.theme, 'typography.subhead', subhead)};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  color: ${props => getTheme(props.theme, 'colors.darkText', '#405f71')};
  padding: 15px 24px;
`;

export const ListRow = styled.div`
  border-top: 1px solid ${props => getTheme(props.theme, 'colors.border', '#e8ebee')};
  padding: 15px 24px;
  margin: 0px;
`;

export const ListItem = styled.div`
  ${props => getTheme(props.theme, 'typography.body', body)};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  color: ${props => getTheme(props.theme, 'colors.darkText70', '#798e9b')};
`;

export const ListSubItem = styled.div`
  padding-top: 4px;
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  font-size: ${props => getTheme(props.theme, 'fontSizes.mobileLarge', '14px')};
  color: ${props => getTheme(props.theme, 'colors.darkText38', '#b6c2c9')};
`;

export const ListSubItemSelection = styled(ListSubItem)`
  padding-left: 39px;
`;

export const ListFooter = styled.div`
  ${props => getTheme(props.theme, 'typography.subhead', subhead)};
  font-family: ${props => getTheme(props.theme, 'fontFamily', 'Roboto')};
  color: ${props => getTheme(props.theme, 'colors.darkText', '#405f71')};
  padding: 15px 24px;
  border-top: 1px solid ${props => getTheme(props.theme, 'colors.border', '#e8ebee')};
`;

export const CheckboxList = styled(CheckboxTable)`
  margin-top: 0px;
  span {
    padding: 0px;
    padding-right: 39px;
  }
`;
