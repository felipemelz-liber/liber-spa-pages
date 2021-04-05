import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../../../../assets/images/empty-states/envelope.png';
import Background from '../../../../assets/images/empty-states/background.png';
import {
  Content,
  LeftImage,
  TextContainer,
  Header,
  Paragraph,
  RightImage,
} from './EmptyState.styles';

const EmptyState = ({ header, text, imagePath }) => {
  return (
    <Content backgroundPath={Background}>
      <LeftImage src={imagePath} />
      <TextContainer>
        <Header>{header}</Header>
        <Paragraph>{text}</Paragraph>
      </TextContainer>
      <RightImage src={Envelope} />
    </Content>
  );
};

EmptyState.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  imagePath: PropTypes.string,
};

EmptyState.defaultProps = {
  header: '',
  text: '',
  imagePath: '',
};

export default EmptyState;
