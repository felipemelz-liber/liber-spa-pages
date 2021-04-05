import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Listing from './Listing';

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
  title: 'Components 2.0|Listing',
  parameters: {
    jest: ['Listing'],
  },
};

export const withoutInterval = () => {
  const [listing, setListing] = useState('10');
  return (
    <Center>
      <Listing listing={listing} onSelectListing={setListing} total="1234" />
    </Center>
  );
};

export const withInterval = () => {
  const [listing, setListing] = useState('10');
  const [interval, setInterval] = useState({
    start: '1',
    end: '10',
  });
  useEffect(() => {
    setInterval({
      ...interval,
      end: listing,
    });
  }, [listing]);
  return (
    <Center>
      <Listing
        listing={listing}
        onSelectListing={setListing}
        total="1234"
        showInterval={interval}
      />
    </Center>
  );
};
