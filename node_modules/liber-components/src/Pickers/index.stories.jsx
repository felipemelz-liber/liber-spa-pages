import React from 'react';
import { action } from '@storybook/addon-actions';
import MonthPicker from './MonthPicker';
import PeriodPicker from './PeriodPicker';
import { DropDownOption as Option } from '../DropDown';

export default {
  title: 'Components 1.0|Picker',

  parameters: {
    jest: ['MonthPicker'],
    jest: ['PeriodStyles'],
  },
};

export const monthPicker = () => <MonthPicker numberOfyears={1} />;

monthPicker.story = {
  name: 'month picker',
};

export const periodPicker = () => (
  <PeriodPicker value="last-30" onSelect={action('select')}>
    <Option value="last-5">Últimos 05 dias</Option>
    <Option value="last-15">Últimos 15 dias</Option>
    <Option value="last-30">Últimos 30 dias</Option>
    <Option value="month-picker" hasAction>
      Selecionar Mês
    </Option>
  </PeriodPicker>
);

periodPicker.story = {
  name: 'period picker',
};
