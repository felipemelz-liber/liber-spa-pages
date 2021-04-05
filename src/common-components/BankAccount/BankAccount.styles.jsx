import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImagePlaceHolder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  border: solid 1px #cdd7df;
  padding: 1px;
`;

export const ImageLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  border: solid 1px #cdd7df;
  padding: 1px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

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
  max-width: 408px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
