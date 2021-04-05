import React from 'react';
import styled from 'styled-components';
import Upload from './components/UploadContainer';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafdff;
  padding: 64px;
  box-sizing: border-box;
`;

export default {
  title: 'Components 2.0|Upload',

  parameters: {
    jest: ['Upload'],
  },
};

export const fileUpload = () => (
  <Center>
    <Upload type="file">Selecione o arquivo</Upload>
  </Center>
);

fileUpload.story = {
  name: 'file upload',
};

export const imageUpload = () => (
  <Center>
    <Upload type="image">Selecione a imagem</Upload>
  </Center>
);

imageUpload.story = {
  name: 'image upload',
};
