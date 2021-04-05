import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { InvoicesTable } from '../InvoicesTable';

describe('InvoicesTable tests', () => {
  configure({ adapter: new Adapter() });

  const props = {
    selectedInvoices: [1, 2, 3],
  };

  it('should render correctly without props', () => {
    const wrapper = shallow(<InvoicesTable />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const wrapper = shallow(<InvoicesTable {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
