import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  BaseToast,
  Info,
  InfoIcon,
  Success,
  SuccessIcon,
  Error,
  ErroIcon,
  Warning,
  WarningIcon,
  CloseIcon,
  Content,
  Message,
  IconBox,
  LargeContent,
} from './Toast.styles';
import Animate from './Animate';

class Toast extends Component {
  componentDidMount() {
    this.startTimeout();
  }

  close = () => {
    const { onClose, id } = this.props;
    this.removeTimeout();
    onClose(id);
  };

  remove = () => {
    const { onExited, id } = this.props;
    onExited(id);
  };

  removeTimeout = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  startTimeout = () => {
    const { duration } = this.props;
    if (duration > 0) {
      this.timeout = setTimeout(this.close, duration);
    }
  };

  render() {
    const { children, type, show, info, content, customWidth } = this.props;
    return (
      <Animate show={show} onExited={this.remove} customWidth={customWidth}>
        <Card
          onMouseEnter={this.removeTimeout}
          onMouseLeave={this.startTimeout}
          customWidth={customWidth}
        >
          {(() => {
            switch (type) {
              case 'notice':
              case 'info':
              case 'primary':
                return (
                  <Info>
                    <Content>
                      <IconBox>
                        <InfoIcon />
                      </IconBox>
                      <Message>
                        {children}
                        {info && <span>{info}</span>}
                      </Message>
                    </Content>
                    {content && <LargeContent>{content}</LargeContent>}
                  </Info>
                );
              case 'success':
                return (
                  <Success>
                    <Content>
                      <IconBox>
                        <SuccessIcon />
                      </IconBox>
                      <Message>
                        {children}
                        {info && <span>{info}</span>}
                      </Message>
                    </Content>
                    {content && <LargeContent>{content}</LargeContent>}
                  </Success>
                );
              case 'error':
                return (
                  <Error>
                    <Content>
                      <IconBox>
                        <ErroIcon />
                      </IconBox>
                      <Message>
                        {children}
                        {info && <span>{info}</span>}
                      </Message>
                    </Content>
                    {content && <LargeContent>{content}</LargeContent>}
                  </Error>
                );
              case 'alert':
              case 'warning':
                return (
                  <Warning>
                    <Content>
                      <IconBox>
                        <WarningIcon />
                      </IconBox>
                      <Message>
                        {children}
                        {info && <span>{info}</span>}
                      </Message>
                    </Content>
                    {content && <LargeContent>{content}</LargeContent>}
                  </Warning>
                );
              default:
                return (
                  <BaseToast>
                    <Content>
                      <Message>
                        {children}
                        {info && <span>{info}</span>}
                      </Message>
                    </Content>
                    {content && <LargeContent base>{content}</LargeContent>}
                  </BaseToast>
                );
            }
          })()}
          <CloseIcon onClick={this.close} top={content || undefined} />
        </Card>
      </Animate>
    );
  }
}
Toast.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]),
  info: PropTypes.oneOfType([PropTypes.any]),
  content: PropTypes.oneOfType([PropTypes.any]),
  onClose: PropTypes.func.isRequired,
  onExited: PropTypes.func.isRequired,
  customWidth: PropTypes.number,
};

Toast.defaultProps = {
  children: '',
  info: null,
  content: null,
  type: null,
  customWidth: null,
};

export default Toast;
