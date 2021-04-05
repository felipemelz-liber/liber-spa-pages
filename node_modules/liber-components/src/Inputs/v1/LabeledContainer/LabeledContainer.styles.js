import styled from 'styled-components';
import { handleThemeFromObject } from '../../../Themes';

export const LabelContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  display: flex;
  align-content: flex-start;
  color: ${props => handleThemeFromObject(props.theme, 'labeledContainer.color', '#a4a4a4')};
  & > span {
    margin-right: 15px;
  }
`;
