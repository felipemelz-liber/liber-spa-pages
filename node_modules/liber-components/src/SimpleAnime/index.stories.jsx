import React from 'react';
import SimpleAnime from './SimpleAnime';

export default {
  title: 'Components 1.0|SimpleAnime',

  parameters: {
    jest: ['SimpleAnime'],
  },
};

export const defaultStory = () => (
  <SimpleAnime>
    <div>Conteudo</div>
  </SimpleAnime>
);

defaultStory.story = {
  name: 'default',
};

export const withOpacity = () => (
  <SimpleAnime opacity={[0, 1]}>
    <div>Conteudo</div>
  </SimpleAnime>
);

withOpacity.story = {
  name: 'with opacity',
};

export const withDuration = () => (
  <SimpleAnime opacity={[0, 1]} duration={3000}>
    <div>Conteudo</div>
  </SimpleAnime>
);

withDuration.story = {
  name: 'with duration',
};

export const withTranslatex = () => (
  <SimpleAnime opacity={[0, 1]} duration={3000} translateX={['-50px', '0px']}>
    <div>Conteudo</div>
  </SimpleAnime>
);

withTranslatex.story = {
  name: 'with translatex',
};

export const withEasing = () => (
  <SimpleAnime
    opacity={[0, 1]}
    duration={3000}
    translateX={['-50px', '0px']}
    easing="easeOutElastic"
  >
    <div>Conteudo</div>
  </SimpleAnime>
);

withEasing.story = {
  name: 'with easing',
};
