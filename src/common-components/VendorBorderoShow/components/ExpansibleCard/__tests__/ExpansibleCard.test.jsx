import React from 'react';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ExpansibleCard from '../ExpansibleCard';
import { ExpanseButton } from '../ExpasibleCard.styles';

describe('ExpansibleCard component test', () => {
  configure({ adapter: new Adapter() });

  const props = {
    children: <div>Mock content</div>,
    buttonText: { closed: 'Click to expand', open: 'Click to collapse' },
    collapsedHeight: 300,
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<ExpansibleCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<ExpansibleCard {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call setOpen with the oposite of open when clicking on expanse button', () => {
    const mockOpen = false;
    const mockSetOpen = sinon.spy();
    sinon.stub(React, 'useState').callsFake(() => [mockOpen, mockSetOpen]);

    const wrapper = shallow(<ExpansibleCard {...props} />);
    const expanseButton = wrapper.find(ExpanseButton);
    expanseButton.simulate('click');

    expect(mockSetOpen.calledWith(true)).toBeTruthy();
  });
});
