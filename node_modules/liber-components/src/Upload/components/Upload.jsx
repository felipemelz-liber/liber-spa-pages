import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  CameraIcon,
  CheckIcon,
  Circle,
  FileIcon,
  IconContainer,
  ImagePreview,
  ImagePreviewIconContainer,
  InputFile,
  PlusIcon,
  UploadFile,
  UploadLabel,
  UploadProgress,
} from './Upload.styles';
import CircularProgressBar from './CircularProgressBar';
import { uploadFiles } from '../actions';

const genId = () => Math.random().toString(36).substr(2, 5);

export class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.id = _.uniqueId(genId());
  }

  handleChange = (e) => {
    const { onUploadFiles, actionURL } = this.props;
    const { files } = e.target;
    onUploadFiles(files[0], actionURL, this.id);
  }

  renderIcon = (uploadProgress) => {
    const { type } = this.props;
    switch (type) {
      case 'image':
        return <CameraIcon selected={!!uploadProgress} />;
      default:
        return <FileIcon selected={!!uploadProgress} />;
    }
  }

  renderCircleIcon = (uploadProgress) => {
    if (uploadProgress && uploadProgress < 100) {
      return (
        <CircularProgressBar
          strokeWidth={2}
          sqSize={20}
          percentage={uploadProgress}
        />
      );
    }
    if (uploadProgress === 100) {
      return <CheckIcon />;
    }
    return <PlusIcon />;
  }

  render() {
    const {
      accept,
      children,
      getFile,
    } = this.props;

    const uploadedFile = getFile(this.id);
    const fileName = uploadedFile ? uploadedFile.originalname : '';
    const imagePreview = uploadedFile ? uploadedFile.imageURL : '';
    const uploadProgress = uploadedFile ? uploadedFile.uploadProgress : 0;

    return (
      <UploadFile htmlFor="file">
        <InputFile
          type="file"
          id="file"
          accept={accept}
          onChange={this.handleChange}
        />
        {
          imagePreview && (
            <ImagePreview image={imagePreview}>
              <ImagePreviewIconContainer>
                <CheckIcon />
                <UploadLabel image={imagePreview} htmlFor="file">
                  { fileName }
                </UploadLabel>
              </ImagePreviewIconContainer>
            </ImagePreview>
          )
        }
        <IconContainer>
          { this.renderIcon(uploadProgress) }
          <Circle>
            { this.renderCircleIcon(uploadProgress) }
          </Circle>
        </IconContainer>
        <UploadLabel htmlFor="file">
          { fileName || children }
        </UploadLabel>
        {
          (!!uploadProgress && uploadProgress < 100) && (
            <UploadProgress>{uploadProgress}%</UploadProgress>
          )
        }
      </UploadFile>
    );
  }
}

Upload.propTypes = {
  accept: PropTypes.string,
  actionURL: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  getFile: PropTypes.func,
  onUploadFiles: PropTypes.func,
  type: PropTypes.string,
};

Upload.defaultProps = {
  accept: '',
  actionURL: '',
  children: '',
  getFile: () => {},
  onUploadFiles: () => {},
  type: 'file',
};

const mapDispatchToProps = {
  onUploadFiles: uploadFiles,
};

const mapStateToProps = ({ files }) => ({
  getFile: id => files[id],
});

export default connect(mapStateToProps, mapDispatchToProps)(forwardRef((props, ref) => <Upload innerRef={ref} {...props} />)); // eslint-disable-line
