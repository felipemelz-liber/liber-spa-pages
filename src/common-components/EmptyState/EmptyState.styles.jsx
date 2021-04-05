import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 220px;
  background-size: 100% 100%;
  background-image: url("${props => props.backgroundPath}");
  margin-top: 16px;
`;

export const LeftImage = styled.img`
  min-height: 225px;
  max-height: 225px;
`;

export const RightImage = styled.img`
  margin-bottom: -20px;
  min-height: 225px;
  max-height: 225px;
`;

export const TextContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  margin: 0 60px 30px 60px;
`;

export const Header = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: 0.35px;
  text-align: center;
  color: #405f71;
`;

export const Paragraph = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.38px;
  text-align: center;
  color: #798e9b;
`;
