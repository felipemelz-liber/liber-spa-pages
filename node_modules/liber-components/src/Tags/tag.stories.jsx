import React from 'react';
import styled from 'styled-components';
import { MdHelpCircle } from '../Icons';
import { PrimaryTag, Tag, SuccessTag, AlertTag, ErrorTag, WhiteTag } from './Tags';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
`;

export default {
  title: 'Components 2.0|Tags',
  parameters: {
    jest: ['Tag'],
  },
};

export const simple = () => (
  <Row>
    <Tag disabled>TAG</Tag>
    <Tag>TAG</Tag>
    <Tag closable>TAG</Tag>
    <Tag>
      <MdHelpCircle />
      TAG
    </Tag>
  </Row>
);
export const rounded = () => (
  <Row>
    <Tag variant="rounded" disabled>
      TAG
    </Tag>
    <Tag variant="rounded">TAG</Tag>
    <Tag variant="rounded" closable>
      TAG
    </Tag>
    <Tag variant="rounded">
      <MdHelpCircle />
      TAG
    </Tag>
  </Row>
);
export const withHeight = () => (
  <Row>
    <Tag height={36} disabled>
      TAG
    </Tag>
    <Tag height={36}>TAG</Tag>
    <Tag height={36} closable>
      TAG
    </Tag>
    <Tag height={36}>
      <MdHelpCircle />
      TAG
    </Tag>
  </Row>
);

export const primary = () => (
  <Row>
    <PrimaryTag disabled>TAG</PrimaryTag>
    <PrimaryTag>TAG</PrimaryTag>
    <PrimaryTag closable>TAG</PrimaryTag>
    <PrimaryTag>
      <MdHelpCircle />
      TAG
    </PrimaryTag>
  </Row>
);

export const success = () => (
  <Row>
    <SuccessTag disabled>TAG</SuccessTag>
    <SuccessTag>TAG</SuccessTag>
    <SuccessTag closable>TAG</SuccessTag>
    <SuccessTag>
      <MdHelpCircle />
      TAG
    </SuccessTag>
  </Row>
);

export const alert = () => (
  <Row>
    <AlertTag disabled>TAG</AlertTag>
    <AlertTag>TAG</AlertTag>
    <AlertTag closable>TAG</AlertTag>
    <AlertTag>
      <MdHelpCircle />
      TAG
    </AlertTag>
  </Row>
);

export const error = () => (
  <Row>
    <ErrorTag disabled>TAG</ErrorTag>
    <ErrorTag>TAG</ErrorTag>
    <ErrorTag closable>TAG</ErrorTag>
    <ErrorTag>
      <MdHelpCircle />
      TAG
    </ErrorTag>
  </Row>
);

export const white = () => (
  <Row>
    <WhiteTag disabled>TAG</WhiteTag>
    <WhiteTag>TAG</WhiteTag>
    <WhiteTag closable>TAG</WhiteTag>
    <WhiteTag>
      <MdHelpCircle />
      TAG
    </WhiteTag>
  </Row>
);
