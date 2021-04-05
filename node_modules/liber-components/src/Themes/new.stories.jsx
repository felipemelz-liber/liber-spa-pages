import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './LiberNew';
import { getColor, getFontFamily } from './methods';
import { Text, Title } from '../Typography';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  width: fit-content;
  border-radius: 8px;

  div {
    font-family: ${getFontFamily('title')};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 385px;
  padding: 0px 16px;
`;

const PaddingContainer = styled.div`
  padding: 8px 16px;
`;

const Box = styled.div`
  width: 200px;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 16px;
`;

const MainColor = styled.div`
  background-color: ${({ color, opacity }) => getColor(color, null, opacity)};
  color: ${getColor('white')};
  text-align: center;
  text-transform: uppercase;
  padding: 12px;
  position: relative;
`;

export default {
  title: 'UI|Theme NEW!',
};

const colorsTypes = [
  { color: 'primary', opacity: 1 },
  { color: 'secondary', opacity: 1 },
  { color: 'success', opacity: 1 },
  { color: 'error', opacity: 1 },
];

const blacks = [
  { color: 'black', opacity: 1 },
  { color: 'black', opacity: 0.87 },
  { color: 'black', opacity: 0.64 },
  { color: 'black', opacity: 0.3 },
];

const formatPercentage = number => {
  const decimal = String(number).split('.')[1];
  if (decimal) {
    return `${decimal}${decimal.length === 1 ? '0' : ''}%`;
  }
  return '';
};

export const colors = () => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Row>
        {colorsTypes.map(({ color, opacity }) => (
          <Box>
            <MainColor color={color} opacity={opacity}>
              <b>{color}</b>
            </MainColor>
          </Box>
        ))}
      </Row>
      <Row>
        {blacks.map(({ color, opacity }) => (
          <Box>
            <MainColor color={color} opacity={opacity}>
              <b>
                {color} {formatPercentage(opacity)}
              </b>
            </MainColor>
          </Box>
        ))}
      </Row>
    </Container>
  </ThemeProvider>
);

const titles = [
  {
    size: 'xlarge',
    label: 'Título Extra Grande',
  },
  {
    size: 'large',
    label: 'Título Grande',
  },
  {
    size: 'regular',
    label: 'Título Regular',
  },
  {
    size: 'small',
    label: 'Título Pequeno',
  },
];

const texts = [
  {
    size: 'xlarge',
    label:
      'Este é um texto grande. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.',
  },
  {
    size: 'large',
    label:
      'Este é um texto regular. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.',
  },
  {
    size: 'regular',
    label:
      'Este é um texto pequeno. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.',
  },
  {
    size: 'small',
    label:
      'Este é um texto muito pequeno. Bacon ipsum dolor amet picanha ball tip meatloaf, landjaeger pork buffalo filet mignon capicola drumstick cow. Meatloaf bresaola beef ribs, kielbasa shankle tail swine pork chop. Capicola venison porchetta tail short loin chislic. Salami leberkas pork loin jerky pig, andouille alcatra.',
  },
];

export const typography = () => (
  <ThemeProvider theme={Theme}>
    <Container>
      <Column>
        {texts.map(({ size, label }) => (
          <PaddingContainer key={size}>
            <Text size={size}>{label}</Text>
            <br />
          </PaddingContainer>
        ))}
      </Column>
      <Column>
        {titles.map(({ size, label }) => (
          <PaddingContainer key={size}>
            <Title size={size}>{label}</Title>
          </PaddingContainer>
        ))}
      </Column>
    </Container>
  </ThemeProvider>
);

colors.story = {
  name: 'Colors',
};
