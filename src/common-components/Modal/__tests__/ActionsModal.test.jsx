import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { SuccessButton, PrimaryButton, AlertButton, ErrorButton } from 'liber-components';
import { Button, IconButton } from '../ActionsModal.styles';
import ActionsModal from '../ActionsModal';
import LoadingButton from '../../Buttons/LoadingButton';

describe('ActionsModal component tests', () => {
  configure({ adapter: new Adapter() });

  const buttonTypes = ['success', 'primary', 'alert', 'error'];
  const props = {
    title: 'Título novo',
    children: <div>Mock</div>,
    show: true,
    onClose: sinon.spy(),
    confirmationButtonProps: {
      onConfirmation: sinon.spy(),
      disabled: false,
      text: 'Confirmar novo',
    },
  };

  afterEach(() => {
    const {
      onClose,
      confirmationButtonProps: { onConfirmation },
    } = props;
    onClose.resetHistory();
    onConfirmation.resetHistory();
  });

  it('should render ActionsModal correctly without props', () => {
    const wrapper = shallow(<ActionsModal />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render ActionsModal correctly with props', () => {
    const wrapper = shallow(<ActionsModal {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  buttonTypes.forEach(type => {
    it(`should render ActionsModal correctly with ${type} button type`, () => {
      const { confirmationButtonProps } = props;
      const wrapper = shallow(
        <ActionsModal {...props} confirmationButtonProps={{ ...confirmationButtonProps, type }} />,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  it('should call onClose when clicking on cancel button', () => {
    const wrapper = shallow(<ActionsModal {...props} />);
    const cancelButton = wrapper.find(Button);
    const { onClose } = props;
    cancelButton.simulate('click');
    expect(onClose.called).toBeTruthy();
  });
  it('should call onClose when clicking on close button', () => {
    const wrapper = shallow(<ActionsModal {...props} />);
    const closeButton = wrapper.find(IconButton);
    const { onClose } = props;
    closeButton.simulate('click');
    expect(onClose.called).toBeTruthy();
  });
  [SuccessButton, PrimaryButton, AlertButton, ErrorButton].forEach((ButtonComponent, index) => {
    it(`should call onConfirmation when clicking on ${buttonTypes[index]} button`, () => {
      const { confirmationButtonProps } = props;
      const wrapper = shallow(
        <ActionsModal
          {...props}
          confirmationButtonProps={{ ...confirmationButtonProps, type: buttonTypes[index] }}
        />,
      );
      const confirmationButton = wrapper.find(ButtonComponent);
      confirmationButton.simulate('click');
      expect(confirmationButtonProps.onConfirmation.called).toBeTruthy();
    });
  });
  it('should have a disabled confirmation button when disabled prop is true on confirmationButtonProps', () => {
    const { confirmationButtonProps } = props;
    const wrapper = shallow(
      <ActionsModal
        {...props}
        confirmationButtonProps={{ ...confirmationButtonProps, disabled: true }}
      />,
    );
    const confirmationButton = wrapper.find(SuccessButton);
    expect(confirmationButton.prop('disabled')).toBeTruthy();
  });
  it('should have a LoadingButton when loading prop is provided on confirmationButtonProps', () => {
    const { confirmationButtonProps } = props;
    const wrapper = shallow(
      <ActionsModal
        {...props}
        confirmationButtonProps={{ ...confirmationButtonProps, loading: false }}
      />,
    );
    const loadingButton = wrapper.find(LoadingButton);
    expect(loadingButton.length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
