import React, { useState } from 'react';
import styled from 'styled-components';
import Drawer from './Drawer';

const Height = styled.div`
  height: 200vh;
`;

export default {
  title: 'Components 1.0|Dialog/Drawer',
  parameters: {
    jest: ['Drawer'],
  },
};

export const defaultStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <Drawer onLeaved={() => setOpen(false)} show={open} elementId="root">
        Content
      </Drawer>
    </>
  );
};

defaultStory.story = {
  name: 'default',
};

export const fast = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 500);
        }}
      >
        Open Drawer
      </button>
      <Drawer onLeaved={() => setOpen(false)} show={open} elementId="root" position="top">
        Content
      </Drawer>
    </>
  );
};

export const onTop = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Drawer
      </button>
      <Drawer onLeaved={() => setOpen(false)} show={open} elementId="root" position="top">
        Content
      </Drawer>
    </>
  );
};

export const onRight = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <Drawer onLeaved={() => setOpen(false)} show={open} elementId="root" position="right">
        Content
      </Drawer>
    </>
  );
};

export const onBottom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <Drawer onLeaved={() => setOpen(false)} show={open} elementId="root" position="bottom">
        Content
      </Drawer>
      <Height />
    </>
  );
};

export const notBlockingNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        Close Drawer
      </button>
      <Drawer show={open} elementId="root" position="bottom" blockNavigation={false}>
        Content
      </Drawer>
      <Height />
    </>
  );
};

export const notBlockingNavigationWithDrawerSize = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        Close Drawer
      </button>
      <Drawer
        show={open}
        elementId="root"
        position="bottom"
        blockNavigation={false}
        drawerSize={300}
      >
        Content
      </Drawer>
      <Height />
    </>
  );
};

export const withDrawerSize = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Drawer
      </button>
      <Drawer
        show={open}
        onLeaved={() => setOpen(false)}
        elementId="root"
        position="right"
        drawerSize={300}
      >
        Content
      </Drawer>
    </>
  );
};
