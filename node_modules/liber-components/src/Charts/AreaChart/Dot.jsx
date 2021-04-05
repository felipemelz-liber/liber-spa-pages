import React, { Fragment } from 'react';
import { Point } from 'victory';
import moment from 'moment';
import { Tooltip } from '../../Helpers';

class Dot extends React.Component {
  componentDidMount() {
    this.getDotPosition();
    window.addEventListener('resize', this.getDotPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getDotPosition);
  }

  getDotPosition = () => {
    this.forceUpdate();
  }

  render() {
    const { ...props } = this.props;
    const style = JSON.parse(JSON.stringify(this.props.style));
    if (props.active) {
      style.opacity = 1;
    } else {
      style.opacity = 0;
    }
    return (
      <Fragment>
        <g ref={(el) => { this.instance = el; }}>
          <Point
            {...props}
            style={style}
          />
        </g>
        {
          this.props.active && this.props.datum.tooltipContent
            ? (

              <Tooltip
                type="floater"
                mount="top"
                mousePadding={25}
                show={this.props.active}
                position={{
                  x: this.instance.getBoundingClientRect().left + 5,
                  y: this.instance.getBoundingClientRect().top + 5,
                }}
                label={moment(this.props.datum.x).locale('pt-br').format('DD [de] MMMM')}
              >
                {this.props.datum.tooltipContent}
              </Tooltip>
            )
            : null
        }
      </Fragment>
    );
  }
}

export default Dot;
