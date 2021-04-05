import styled from 'styled-components';
import { Header4, Hr } from '../GenericStyles';
import { FaQuestionCircle } from '../Icons';

export const Title = styled(Header4)`
  margin-top: 10px !important;
  margin-bottom: 0px !important;
`;

export const Separator = styled(Hr)`
  margin-top: 6px !important;
`;

export const Box = styled.div`
  border-radius: 2px;
  border: solid 2px #e6e6e6;
  padding: 8px 66px 23px 66px;
  overflow: hidden;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  color: #4e4e4e;
  line-height: 21px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;

  & ol,
  & ul {
    padding-left: 20px;
  }

  & ol > li,
  & ul > li {
    margin-bottom: 10px;
  }
`;

export const Question = styled(FaQuestionCircle)`
  fill: #009dff;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  left: 24px;
`;

export const YellowBox = styled.div`
  border-radius: 4px;
  background-color: #feedc2;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const NotificationLabel = styled.div`
  font-family: inherit;
  font-size: 22px;
  font-weight: bold;
  color: #484848;
  padding: 13px 38px;
  position: relative;
  cursor: pointer;
  &:after {
    position: absolute;
    content: '';
    right: 19px;
    top: calc(50% - 4px);
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-top: 8px solid #4e4e4e;
  }
`;

export const NotificationContent = styled.div`
  flex-grow: 1;
  display: ${props => (props.show ? null : 'none')};
  padding: 0 38px;
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 500;
  color: #484848;
`;
