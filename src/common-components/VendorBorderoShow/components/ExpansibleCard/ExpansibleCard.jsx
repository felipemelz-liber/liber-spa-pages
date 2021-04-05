import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';
import { Card, Container, ExpanseButton, ButtonContainer } from './ExpasibleCard.styles';
import { dispatchDataLayerEvent } from '../../../../vendor/Utils';

const ExpansibleCard = ({ children, buttonText, collapsedHeight, showButton, isAdmin }) => {
  const [open, setOpen] = React.useState(true);
  const [height, setHeight] = useState(undefined);

  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setOpen(false);
  }, []);

  const toggleOpen = () => {
    dispatchDataLayerEvent('showBorderoMostrarConfirmacaoPagamento', isAdmin, {
      mostrarConfirmacaoPagamento: !open,
    });

    setOpen(!open);
  };

  const { open: openText, closed: closedText } = buttonText;

  return (
    <>
      <Card height={open ? height : collapsedHeight} ref={ref}>
        <Container>{children}</Container>
      </Card>
      {showButton && (
        <ButtonContainer>
          <ExpanseButton open={open} onClick={toggleOpen}>
            <Icon path={mdiArrowDown} />
            {open ? openText : closedText}
          </ExpanseButton>
        </ButtonContainer>
      )}
    </>
  );
};

ExpansibleCard.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.shape({ closed: PropTypes.string, open: PropTypes.string }),
  collapsedHeight: PropTypes.number,
  showButton: PropTypes.bool,
  isAdmin: PropTypes.bool,
};

ExpansibleCard.defaultProps = {
  children: <div />,
  buttonText: { closed: 'Expandir', open: 'Ocultar' },
  collapsedHeight: 100,
  showButton: true,
  isAdmin: false,
};

export default ExpansibleCard;
