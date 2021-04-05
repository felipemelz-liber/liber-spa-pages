import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2px 0px;
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 4px;
  border: solid 1px #cdd7df;
  background-color: #f7f7f7;
  margin-right: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #6287a7;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Description = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.06px;
  text-align: left;
  color: #6287a7;
`;
