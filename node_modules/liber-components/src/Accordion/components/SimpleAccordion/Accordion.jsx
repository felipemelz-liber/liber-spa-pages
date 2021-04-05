import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion as DefaultBody,
  Item,
  Content,
  Button as DefaultItem,
} from './Accordion.styles';


class AccordionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.single ? '' : [],
    };
  }

  handleChangeCurrent = ({ target }) => {
    const { single } = this.props;
    const value = target.getAttribute('data-index');
    this.setState(({ current }) => {
      if (single) {
        if (value !== current) {
          return {
            current: value,
          };
        }
        return {
          current: '',
        };
      } if (current.includes(value)) {
        return {
          current: current.filter(item => item !== value),
        };
      }
      return {
        current: [...current, value],
      };
    });
  };

  render() {
    const {
      children, grow, single,
      labelComponent: Label,
      accordionComponent: Accordion,
    } = this.props;
    const { current } = this.state;
    return (
      <Accordion grow={grow}>
        {Children.map(children, (child, index) => {
          let open;
          if (single) {
            open = current === index.toString();
          } else {
            open = current.includes(index.toString());
          }
          const { label, ...contentProps } = child.props;
          return (
            <Item key={child.props.label || index}>
              <Content open={open} {...contentProps}>
                {child}
              </Content>
              <Label
                data-index={index.toString()}
                onClick={this.handleChangeCurrent}
                open={open}
              >
                {label}
              </Label>
            </Item>
          );
          // return cloneElement(child, {
          //   open,
          //   key: child.props.label || index,
          //   value: index.toString(),
          //   onClick: this.handleChangeCurrent,
          // });
        })}
      </Accordion>
    );
  }
}

AccordionComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  single: PropTypes.bool,
  grow: PropTypes.bool,
  labelComponent: PropTypes.oneOfType([PropTypes.any]),
  accordionComponent: PropTypes.oneOfType([PropTypes.any]),
};

AccordionComponent.defaultProps = {
  single: false,
  grow: false,
  labelComponent: DefaultItem,
  accordionComponent: DefaultBody,
};

export default AccordionComponent;
