import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import WasteInputField from '../WasteInputField';

configure({adapter: new Adapter()});

afterEach(() => {
  cleanup();
});

const onlyNumbers = (score) => !isNaN(parseInt(score)) && isFinite(score);

test('Check so that WasteInputField renders', () => {
  const control = jest.fn();
  const wrapper = shallow(<WasteInputField control={control}
    onlyNumbers={onlyNumbers} />);

  expect(wrapper).toHaveLength(1);
});

test('Matches snapshot', () => {
  const control = jest.fn();

  const wrapper = shallow(<WasteInputField control={control}
    onlyNumbers={onlyNumbers} />);
  expect(wrapper).toMatchSnapshot();
});
