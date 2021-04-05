import React from 'react';
import {
  Analysis,
  EmptyOpen,
  EmptyScheduled,
  EmptyWon,
  FilePlus,
  FileXml,
  MagnifyChartIcon,
  Bill,
  Money,
  Wallet,
  CalendarClock,
  CalendarArrow,
  Coin,
  Coins,
  Filtered,
} from './Liber';

export default {
  title: 'UI|Icons/Liber',
  parameters: {
    jest: ['LiberIcons'],
  },
};

export const analysis = () => <Analysis />;
export const emptyOpen = () => <EmptyOpen />;
export const emptyScheduled = () => <EmptyScheduled />;
export const emptyWon = () => <EmptyWon />;
export const filePlus = () => <FilePlus />;
export const fileXml = () => <FileXml />;
export const magnifyChartIcon = () => <MagnifyChartIcon />;
export const bill = () => <Bill />;
export const money = () => <Money />;
export const wallet = () => <Wallet />;
export const calendarClock = () => <CalendarClock />;
export const calendarArrow = () => <CalendarArrow />;
export const coin = () => <Coin />;
export const coins = () => <Coins />;
export const filtered = () => <Filtered />;
