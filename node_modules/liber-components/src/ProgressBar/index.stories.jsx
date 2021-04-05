import React, { useState } from 'react';
import { MdCheck as Check } from '../Icons';
import { Label, Step, Separator, ProgressContainer } from './ProgressBar';

const changeStep = (callback, stage) => () => {
  callback(stage);
};

const Progress = () => {
  const [stage, onChange] = useState(0);
  return (
    <ProgressContainer>
      <Step onClick={changeStep(onChange, 0)} type="checked">
        1<Label checked>Documento</Label>
      </Step>
      <Separator full={stage >= 1} />
      <Step onClick={changeStep(onChange, 1)} type={stage >= 1 ? 'checked' : 'basic'}>
        2<Label checked={stage >= 1}>Partes</Label>
      </Step>
      <Separator full={stage >= 2} />
      <Step onClick={changeStep(onChange, 2)} type={stage >= 2 ? 'checked' : 'final'}>
        <Check />
        <Label checked={stage >= 2}>Solicitação criada</Label>
      </Step>
    </ProgressContainer>
  );
};

export default {
  title: 'Components 2.0|ProgressBar',

  parameters: {
    jest: ['ProgressBar'],
  },
};

export const defaultStory = () => <Progress />;

defaultStory.story = {
  name: 'default',
};
