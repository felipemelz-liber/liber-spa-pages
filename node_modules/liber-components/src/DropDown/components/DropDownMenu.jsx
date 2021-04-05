import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Transition } from 'react-transition-group';

import ClickOutside from '../../Util/ClickOutside';
import {
  Box, ButtonMenu, Icon, Label, List,
} from './styles';

class DropDownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClickOption = () => {
    this.setState({ open: false });
  }

  handleOpenClose = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { children, position } = this.props;
    const { open } = this.state;
    const clones = children.map(child => (
      cloneElement(child, {
        key: _.uniqueId(),
        onClick: () => {
          this.handleClickOption();
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick();
          }
        },
      })
    ));
    const opacity = {
      entering: '0',
      entered: '1',
    };
    const scaleY = {
      entering: '0.7',
      entered: '1',
    };
    return (
      <Box>
        <ButtonMenu onMouseDown={this.handleOpenClose}>
          <Icon />
        </ButtonMenu>
        <div>
          <Transition mountOnEnter unmountOnExit in={open} timeout={100}>
            {state => (
              <ClickOutside onOutsideClick={() => { this.setState({ open: false }); }}>
                <List
                  opacity={opacity[state]}
                  scaleY={scaleY[state]}
                  position={position}
                >
                  {
                    this.props.label
                      ? <Label>{this.props.label}</Label>
                      : null
                  }
                  {clones}
                </List>
              </ClickOutside>
            )}
          </Transition>
        </div>
      </Box>
    );
  }
}

DropDownMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  label: PropTypes.string,
  position: PropTypes.string,
};

DropDownMenu.defaultProps = {
  label: undefined,
  position: null,
};

export default DropDownMenu;
