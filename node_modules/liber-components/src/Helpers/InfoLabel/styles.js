import styled from 'styled-components';
import { FaInfoCircle } from '../../Icons';
import { handleThemeFromObject } from '../../Themes';

export const Container = styled.div`
  position: relative;
  color: ${props => handleThemeFromObject(props.theme, 'infoLabel.color', '#a4a4a4')};
  font-size: 16px;
`;

export const Icon = styled(FaInfoCircle)`
  position: absolute;
  fill: ${props => handleThemeFromObject(props.theme, 'infoLabel.fill', '#a4a4a4', props.color)};
  margin: 3px;
  width: 18px;
  height: 18px;
`;

export const Label = styled.div`
  margin-left: 28px;
  word-wrap: break-word;
`;
