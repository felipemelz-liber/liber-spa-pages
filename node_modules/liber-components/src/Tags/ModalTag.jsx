import React from 'react';
import PropTypes from 'prop-types';
import { WhiteTag, FloatingTag, Container } from './ModalTag.styles';
import { Modal } from '../Dialog';

const close = callback => () => {
  callback(false);
};
const toogle = (callback, current) => () => {
  callback(!current);
};

const isOutOfBoundsOnTop = (tagRect, modalRect, offset) => {
  return tagRect.y - offset - modalRect.height < 0;
};

const isOutOfBoundsOnBottom = (tagRect, modalRect, offset) => {
  return tagRect.y + tagRect.height + offset + modalRect.height > window.innerHeight;
};

const isOutOfBoundsOnLeft = (tagRect, modalRect) => {
  return tagRect.x + tagRect.width - modalRect.width < 0;
};
const isOutOfBoundsOnRight = (tagRect, modalRect) => {
  return tagRect.x + modalRect.width > window.innerWidth;
};

const getMountBasedOnViewport = (mount, tagRect, modalRect, offset, overflow) => {
  let [verticalMount, horizontalMount] = mount.split('-');
  if (verticalMount === 'top' && isOutOfBoundsOnTop(tagRect, modalRect, offset)) {
    verticalMount = overflow === 'position' ? 'bottom' : 'center';
  }
  if (verticalMount === 'bottom' && isOutOfBoundsOnBottom(tagRect, modalRect, offset)) {
    verticalMount = overflow === 'position' ? 'top' : 'center';
  }
  if (horizontalMount === 'right' && isOutOfBoundsOnLeft(tagRect, modalRect)) {
    horizontalMount = overflow === 'position' ? 'left' : 'center';
  }
  if (horizontalMount === 'left' && isOutOfBoundsOnRight(tagRect, modalRect)) {
    horizontalMount = overflow === 'position' ? 'right' : 'center';
  }
  return [verticalMount, horizontalMount].join('-');
};

const getModalPosition = (tag, mount, offset) => {
  const tagRect = tag.getBoundingClientRect();
  return {
    'bottom-left': {
      x: tagRect.x,
      y: tagRect.y + tagRect.height + offset,
      fromX: 'left',
    },
    'bottom-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      y: tagRect.y + tagRect.height + offset,
      fromX: 'right',
    },
    'top-left': {
      x: tagRect.x,
      y: window.innerHeight - tagRect.y + offset,
      fromX: 'left',
      fromY: 'bottom',
    },
    'top-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      y: window.innerHeight - tagRect.y + offset,
      fromX: 'right',
      fromY: 'bottom',
    },
    'center-left': {
      x: tagRect.x,
      fromX: 'left',
    },
    'center-right': {
      x: window.innerWidth - tagRect.x - tagRect.width,
      fromX: 'right',
    },
    'bottom-center': {
      y: tagRect.y + tagRect.height + offset,
    },
    'top-center': {
      y: window.innerHeight - tagRect.y + offset,
      fromY: 'bottom',
    },
    center: {},
  }[mount];
};

const getFloatingPosition = tag => {
  const rect = tag.getBoundingClientRect();
  return { x: rect.x, y: rect.y };
};

const closeTab = callback => event => {
  event.stopPropagation();
  callback(event);
};

export const ModalTag = ({
  label,
  children,
  elementId,
  mount,
  dialogOffset,
  overflow,
  ...props
}) => {
  const tag = React.useRef(null);
  const modal = React.useRef(null);
  const [stateShow, changeStateShow] = React.useState(false);
  const [viewportMount, setViewportMount] = React.useState(mount);

  const {
    show = stateShow,
    onChange = changeStateShow,
    closable,
    onClose,
    className,
    ...tagProps
  } = props;

  React.useEffect(() => {
    if (modal.current && tag.current) {
      const modalRect = modal.current.getBoundingClientRect();
      const tagRect = tag.current.getBoundingClientRect();
      const newMount = getMountBasedOnViewport(mount, tagRect, modalRect, dialogOffset, overflow);
      if (viewportMount !== newMount) {
        setViewportMount(newMount);
      }
    }
  }, [show]);
  const modalPosition = tag.current
    ? getModalPosition(tag.current, viewportMount, dialogOffset)
    : {};
  const floatPosition = tag.current ? getFloatingPosition(tag.current) : {};
  return (
    <Container>
      <WhiteTag
        {...tagProps}
        ref={tag}
        onClick={toogle(onChange, show)}
        closable={closable}
        onClose={closeTab(onClose)}
        className={className}
      >
        {label}
      </WhiteTag>

      <Modal
        cardRef={modal}
        show={show}
        elementId={elementId}
        position={modalPosition}
        animation="ease-in-out"
        animateFrom="-16px"
        duration={120}
        onLeaved={close(onChange)}
        insertComponent={
          <FloatingTag className={className} closable={closable} position={floatPosition}>
            {label}
          </FloatingTag>
        }
      >
        {children}
      </Modal>
    </Container>
  );
};

ModalTag.propTypes = {
  show: PropTypes.bool,
  label: PropTypes.string,
  elementId: PropTypes.string,
  mount: PropTypes.string,
  dialogOffset: PropTypes.number,
  children: PropTypes.element,
  closable: PropTypes.bool,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
  rect: PropTypes.objectOf(PropTypes.any),
  overflow: PropTypes.oneOf(['center', 'position']),
};

ModalTag.defaultProps = {
  label: '',
  elementId: 'modal',
  mount: 'bottom-left',
  dialogOffset: 16,
  children: '',
  show: undefined,
  closable: false,
  onChange: undefined,
  className: undefined,
  rect: null,
  onClose: () => {},
  overflow: 'position',
};

export default ModalTag;
