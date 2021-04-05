import React from 'react';
import WhatToDo from './WhatToDo';

export default {
  title: 'Components 1.0|WhatToDo/What To Do',
};

export const defaultStory = () => <WhatToDo />;

defaultStory.story = {
  name: 'default',
};

export const withChildren = () => <WhatToDo>Conteudo</WhatToDo>;
