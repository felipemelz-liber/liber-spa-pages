import React from 'react';
import PieChart from '../PieChart';
import ChartContainer from './ChartContainer';
import ChartLabel from '../ChartLabel';

export default {
  title: 'Components 1.0|Charts/Chart Container',
  parameters: {
    jest: ['ChartContainer'],
  },
};

export const withHover = () => (
  <ChartContainer>
    <PieChart />
    <ChartLabel eventKey="0">Conteudo 1</ChartLabel>
    <ChartLabel eventKey="1">Conteudo 2</ChartLabel>
    <ChartLabel eventKey="2">Conteudo 3</ChartLabel>
    <ChartLabel eventKey="3">Conteudo 4</ChartLabel>
  </ChartContainer>
);

export const withClick = () => (
  <ChartContainer event="click">
    <PieChart />
    <ChartLabel eventKey="0">Conteudo 1</ChartLabel>
    <ChartLabel eventKey="1">Conteudo 2</ChartLabel>
    <ChartLabel eventKey="2">Conteudo 3</ChartLabel>
    <ChartLabel eventKey="3">Conteudo 4</ChartLabel>
  </ChartContainer>
);
