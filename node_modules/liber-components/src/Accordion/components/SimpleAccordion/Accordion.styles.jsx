import styled, { css } from 'styled-components';

export const Content = styled.div.attrs(({ contentSize: size }) => ({
  style: {
    '--height': `${size}px`,
  },
}))`
  overflow: hidden;
  transition: all 450ms cubic-bezier(0.23,1,0.32,1) 0ms;
  display: flex;
  flex-direction: column;
  ${(props) => {
    if (props.contentSize) {
      return css`height: ${(props.open ? 'var(--height)' : '0px')};`;
    }
    return css`max-height: ${(props.open ? '9999px' : '0px')};`;
  }}

  opacity: ${props => (props.open ? 1 : 0)};
  background-color: transparent;
`;
export const Button = styled.button`
  display: block;
  border: 0px;
  background-color: #fafafa;
  cursor: pointer;
  padding: 5px 42px 5px 8px;
  width: 100%;
  text-align: left;
  font-family: Roboto;
  font-size: 14px;
  height: 30px;
  transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
  display:flex;
  align-items: center;
  justify-content: space-between;
  color: var(--black);
  white-space: nowrap;
  overflow: hidden;
  & > * {
    pointer-events: none;
  }

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }
  &:after{
    content: '';
    transition: all 250ms cubic-bezier(0.23,1,0.32,1) 0ms;
    position: absolute;
    border-left: 6px solid transparent;
    border-top: 6px solid var(--color);
    border-right: 6px solid transparent;
    top: calc(15px - 3px);
    right: 16px;
    transform: ${props => (props.open ? 'rotate(90deg)' : null)};
  }
  &:hover{
    background-color: #f0f0f0;
  }
  &:hover:after{
    border-top: 6px solid #a4a4a4;
  }

  & > span:first-child{
    max-width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Item = styled.div`
  --color: #c0c0c0;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;
export const Accordion = styled.div`
  width: 100%;
  z-index: 500;
`;

export const ContentItem = styled.div.attrs(({ onClick }) => ({
  style: onClick ? { '--pointer': 'pointer' } : { '--pointer': 'unset' },
}))`
  width: 100%;
  max-height: 32px;
  min-height: 32px;
  padding: 4px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: var(--pointer);
`;
