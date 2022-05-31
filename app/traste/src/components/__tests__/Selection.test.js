import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Selection from '../Selection';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {MenuItem} from '@mui/material';

configure({adapter: new Adapter()});

afterEach(() => {
  cleanup();
});

const propsData = {
  title: 'Bin Size',
  name: 'BinSize',
  label: 'Selection',
  value: '',
  error: 'error',
};
const data = [
  {
    id: '0',
    label: '5',
  },
  {
    id: '1',
    label: '10',
  },
  {
    id: '2',
    label: '15',
  },
  {
    id: '3',
    label: '20',
  },
];

test('Check that MenuItem, in the Selection component, has' +
'text No data because data props is null', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Selection
    title={propsData.title}
    name={propsData.name}
    {...propsData}
    onChange={onChange}
  />);

  expect(wrapper.find(MenuItem)).toHaveLength(1);
  expect(wrapper.find(MenuItem).text()).toBe('No data');
});

test('Check so that Selection component contains 4 values', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Selection
    title={propsData.title}
    name={propsData.name}
    data={data}
    {...propsData}
    onChange={onChange}
  />);

  expect(wrapper.find(MenuItem)).toHaveLength(4);
});


test('Matches snapshot', () => {
  const onChange = jest.fn();

  const tree = renderer.create(<Selection
    title={propsData.title}
    name={propsData.name}
    data={data}
    {...propsData}
    onChange={onChange}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
