import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const wrapper = components =>
  forwardRef(({ version = 1, ...props }, ref) => {
    //eslint-disable-line
    const Component = components[version <= 0 ? 0 : version - 1] || components[0];
    // const Component = styled(components[version <= 0 ? 0 : version - 1] || components[0])``;
    return <Component ref={ref} {...props} />;
  });
