import React from 'react';
import Form from './Form';
import { TextField } from '../Inputs';

export default {
  title: 'Components 1.0|Form',

  parameters: {
    jest: ['Form'],
  },
};

export const withMethodPost = () => (
  <Form method="post">
    <TextField />
  </Form>
);

withMethodPost.story = {
  name: 'with method post',
};
