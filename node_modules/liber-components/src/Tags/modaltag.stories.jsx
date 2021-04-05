import React from 'react';
import styled, { css } from 'styled-components';
import ModalTag from './ModalTag';

const StyledModalTag = styled(ModalTag)`
  ${({ content }) => {
    return content
      ? css`
          --tag-border-color: unset;
          --tag-background-color: unset;
          --tag-color: unset;
        `
      : null;
  }}
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 250px;
  height: 150px;
`;

const RowLine = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  padding: 0px 20px;
  height: 68px;
  padding-bottom: 38px;
`;

const Height = styled.div`
  height: 200vh;
`;

export default {
  title: 'Components 2.0|ModalTag',
  parameters: {
    jest: ['ModalTag'],
  },
};

export const closable = () => {
  const [content, setContent] = React.useState(null);
  return (
    <>
      <RowLine>
        <StyledModalTag
          mount="top-left"
          overflow="center"
          label={content || 'Closable'}
          content={content}
          closable={content}
          onClose={() => setContent(null)}
        >
          <Content>
            <button type="button" onClick={() => setContent(':)')}>
              :)
            </button>
          </Content>
        </StyledModalTag>
      </RowLine>

      <Height />
    </>
  );
};

export const bottomLeft = () => (
  <>
    <Center>
      <ModalTag label="Bottom-Left">
        <Content>:)</Content>
      </ModalTag>
    </Center>
  </>
);

bottomLeft.story = {
  name: 'bottom-left',
};

export const bottomRight = () => (
  <>
    <Center>
      <ModalTag label="Bottom-Right" mount="bottom-right">
        <Content>:)</Content>
      </ModalTag>
    </Center>
  </>
);

bottomRight.story = {
  name: 'bottom-right',
};

export const topLeft = () => (
  <>
    <Center>
      <ModalTag label="Top-Left" mount="top-left">
        <Content>:)</Content>
      </ModalTag>
    </Center>
  </>
);

topLeft.story = {
  name: 'top-left',
};

export const topRight = () => (
  <>
    <Center>
      <ModalTag label="Top-Right" mount="top-right">
        <Content>:)</Content>
      </ModalTag>
    </Center>
  </>
);

topRight.story = {
  name: 'top-right',
};
