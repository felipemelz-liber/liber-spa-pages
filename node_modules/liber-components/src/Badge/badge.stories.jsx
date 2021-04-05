import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../Buttons/v2/StyledButtons';
import Badge from './Badge';
import { MdFile as File } from '../Icons';

const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3c596b;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const MdFile = styled(File)`
  fill: white;
  width: 32px;
  height: 32px;
`;

export default {
  title: 'Components 2.0|Badge',
};

export const basic = () => (
  <Center>
    <Badge content={7}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);

export const bottomLeft = () => (
  <Center>
    <Badge position={{ vertical: 'bottom', horizontal: 'left' }} content={27}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);

export const topRight = () => (
  <Center>
    <Badge position={{ vertical: 'top', horizontal: 'right' }} content={2778}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);

export const topLeft = () => (
  <Center>
    <Badge position={{ vertical: 'top', horizontal: 'left' }} content={278}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);

export const large = () => (
  <Center>
    <Badge size="large" content={278}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);
export const circularChild = () => (
  <Center>
    <Badge childShape="circle" content={1}>
      <Circle>
        <MdFile />
      </Circle>
    </Badge>
  </Center>
);

export const withColor = () => (
  <Center>
    <Badge color="#3C596B" textColor="#59dc93" content={27}>
      <PrimaryButton>SOLICITAR</PrimaryButton>
    </Badge>
  </Center>
);
