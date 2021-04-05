import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ClickOutside } from '../../../Util';
import { TooltipBox } from '../../../Helpers';
import {
  FieldContainer, FieldBox, Label, CardContent, SelectionContainer,
  SelectHeader, SelectCounter, SelectBox, Checkbox, Tooltip,
} from './SelectMultiple.styles';


class SelectMultiple extends Component {
  constructor() {
    super();
    this.boxes = {};
    this.state = {
      open: false,
      all: false,
    };
  }

  handleOpenToogle = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  handleChange = (onChange, event) => {
    event.persist();
    this.setState({ all: false }, () => { onChange(event); });
  }


  parseChildren = (children) => {
    const childArray = React.Children.toArray(children);
    return childArray.map((child) => {
      const { onChange, ...props } = child.props;
      return (
        <Checkbox
          {...props}
          key={props.id}
          ref={(element) => { this.boxes[props.value] = element; }}
          onChange={(event) => { this.handleChange(onChange, event); }}
        />
      );
    });
  }

  getCheckedList = (children) => {
    const childArray = React.Children.toArray(children);
    return childArray.reduce((list, child) => {
      if (this.checkedTest(child)) {
        return [...list, child.props.children];
      }
      return list;
    }, []);
  }

  checkedTest = (child) => {
    if (child.props.checked === null) {
      if (this.boxes[child.props.value]) {
        return this.boxes[child.props.value].checked;
      }
    }
    return child.props.checked;
  };

  handleSelectAll = () => {
    const { onChangeAll, children } = this.props;
    this.setState((state) => {
      if (!state.all) {
        const all = React.Children.toArray(children).map(child => child.props.value);
        onChangeAll(all);
      } else {
        onChangeAll([]);
      }
      Object.keys(this.boxes).forEach((box) => {
        const checkbox = this.boxes[box];
        checkbox.checked = !state.all;
      });
      return { all: !state.all };
    });
  }

  render() {
    const { open, all } = this.state;
    const { children, className } = this.props;
    let layout;
    const parsedChildren = this.parseChildren(children);
    const checkedList = this.getCheckedList(children);
    const unselected = checkedList.length === 0;
    if (open) layout = 'open'; else if (!open && !unselected) layout = 'selected'; else layout = 'unselected';
    return (
      <FieldContainer>
        <Label layout={layout}>Select Multiple</Label>
        <ClickOutside onOutsideClick={this.handleClose}>
          <Fragment>
            <TooltipBox
              mount="top"
              show={checkedList.length !== 0}
              content={<Tooltip>{checkedList.join(', ')}</Tooltip>}
            >
              <FieldBox onClick={this.handleOpenToogle} layout={layout} className={className}>
                <span>{checkedList.join(', ')}</span>
              </FieldBox>
            </TooltipBox>
            <SelectionContainer open={open}>
              <CardContent>
                <SelectHeader>
                  <Checkbox
                    header
                    id="all_checkbox"
                    onChange={this.handleSelectAll}
                    checked={all}
                  >Selecionar todos
                  </Checkbox>
                  <SelectCounter>{checkedList.length} selecionados</SelectCounter>
                </SelectHeader>
                <SelectBox>
                  {parsedChildren}
                </SelectBox>
              </CardContent>
            </SelectionContainer>
          </Fragment>
        </ClickOutside>
      </FieldContainer>
    );
  }
}

SelectMultiple.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChangeAll: PropTypes.func,
  className: PropTypes.string,
};

SelectMultiple.defaultProps = {
  onChangeAll: () => {},
  className: null,
};

export default SelectMultiple;
