import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
`;


export const MonthPickerContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0px;
  right: 0px;
  width: 270px;
  /* height: 320px; */
  display: ${props => (props.show ? 'block' : 'none')};
  background-color: #fafafa;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
`;
