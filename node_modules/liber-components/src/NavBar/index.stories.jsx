import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const Viewport = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafdff;
`;

export default {
  title: 'Components 2.0|NavBar',

  parameters: {
    jest: ['NavBar'],
  },
};

export const navBar = () => (
  <Viewport>
    <NavBar
      menu={{
        label: 'Nome do usuário',
        sublabel: 'Nome da empresa',
      }}
    />
  </Viewport>
);

navBar.story = {
  name: 'NavBar',
};
