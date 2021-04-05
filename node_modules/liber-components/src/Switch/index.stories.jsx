import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from './Switch';

const Container = styled.div`
  padding: 48px;
`;

export default {
  title: 'Components 2.0|Switch',

  parameters: {
    jest: ['Switch'],
  },
};

export const Unchecked = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Container>
        <Switch checked={checked} onChange={value => setChecked(value)} />
      </Container>
      <Container>{checked ? 'Checked' : 'Unchecked'}</Container>
    </>
  );
};

export const Checked = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Container>
        <Switch checked={checked} onChange={value => setChecked(value)} />
      </Container>
      <Container>{checked ? 'Checked' : 'Unchecked'}</Container>
    </>
  );
};
