import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SimpleDropDown } from '../DropDown';
import { getScreenSize } from '../Util';
import {
  Nav,
  Content,
  Logo,
  Menu,
  Label,
  Sandwich,
} from './NavBar.styles';

const button = (menu) => {
  const { icon = null, label, sublabel = null } = menu;
  return (
    <Label>
      <li>{icon}{label}</li>
      {sublabel && <li><span>{sublabel}</span></li>}
    </Label>
  );
};

const NavBar = ({
  children, menu, contentSize, window,
}) => {
  const { content } = menu;
  const [screenSize, setScreenSize] = useState(window ? getScreenSize(window) : 'large');

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        setScreenSize(getScreenSize(window));
      };
      window.addEventListener('resize', handleResize);
      return () => { window.removeEventListener('resize', handleResize); };
    }
    return undefined;
  }, window);

  const small = screenSize === 'small' || screenSize === 'medium';
  return (
    <Nav>
      <Content size={contentSize}>
        <Logo />
        {children}
        <Menu>
          <SimpleDropDown
            position="bottom-left"
            label={!small ? button(menu) : undefined}
            customButton={small ? <Sandwich /> : undefined}
          >
            {content}
          </SimpleDropDown>
        </Menu>
      </Content>
    </Nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  menu: PropTypes.shape({
    icon: PropTypes.node,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    sublabel: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.any]),
  }),
  contentSize: PropTypes.string,
  window: PropTypes.objectOf(PropTypes.any),
};

NavBar.defaultProps = {
  children: null,
  menu: {},
  contentSize: null,
  window: null,
};

export default NavBar;
