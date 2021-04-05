import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LiberV4 as Theme, ToastContainer } from 'liber-components';

import BuyerAnticipationLimits from './components/BuyerAnticipationLimits/index.jsx';

const BuyerAnticipationLimit = ({ token }) => {
  return (
    <div>
      <BuyerAnticipationLimits token={token} />
      <ToastContainer />
    </div>
  );
}

export default BuyerAnticipationLimit;
