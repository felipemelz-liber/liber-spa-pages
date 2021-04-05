import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 1.0|Carousel',

  parameters: {
    jest: ['Carousel'],
  },
};

export const defaultStory = () => (
  <Carousel>
    <BannerContainer>Conteudo 1</BannerContainer>
    <BannerContainer>Conteudo 2</BannerContainer>
    <BannerContainer>Conteudo 3</BannerContainer>
  </Carousel>
);

defaultStory.story = {
  name: 'default',
};
