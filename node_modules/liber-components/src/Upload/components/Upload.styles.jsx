import styled, { css } from 'styled-components';
import {
  MdCheck,
  MdFile,
  MdCamera,
  MdPlus,
} from '../../Icons';

const icon = css`
  position: absolute;
  width: 28px;
  height: 29px;
`;

export const IconContainer = styled.div`
  margin-bottom: 12px;
  margin-right: 11px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 0 0.5px 2px 0 rgba(0, 0, 0, 0.12);
  position: relative;
  top: 12px;
  left: 11px;
  background-color: #ffffff;
`;

export const PlusIcon = styled(MdPlus)`
  width: 16px;
  height: 16px;
  fill: #798e9b;
`;

export const CheckIcon = styled(MdCheck)`
width: 16px;
height: 16px;
  fill: #13ce66;
`;

export const FileIcon = styled(MdFile)`
  ${icon}
  fill: ${props => (props.selected ? '#798e9b' : '#b6c2c9')};
`;

export const CameraIcon = styled(MdCamera)`
  ${icon}
  fill: ${props => (props.selected ? '#798e9b' : '#b6c2c9')};
`;

export const InputFile = styled.input`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  & +label {
    font-family: Roboto;
    font-size: 16px;
    color: #8c9fa9;
    display: inline-block;
  }
`;

export const UploadFile = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: dashed 1px #e8ebee;
  background-color: #f9fafa;
  padding: 32px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const UploadLabel = styled.label`
  color: #798e9b;
  cursor: pointer;
  padding-left: ${props => (props.image ? '4px' : '0px')};
`;

export const UploadProgress = styled.div`
  color: #405f71;
  font-family: Roboto;
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: transparent;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #009dff;
`;

export const ImagePreview = styled.div`
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export const ImagePreviewIconContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 8px;
  align-items: center;
  position: absolute;
  bottom: 0px;
`;
