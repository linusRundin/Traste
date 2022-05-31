import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import MaterialField from '../MaterialField';
import React from 'react';

afterEach(() => {
  cleanup();
});

test('Should render MaterialField with label Wood', () => {
  const propsData = {label: 'Wood',
    value: 'string', error: 'error'};
  const onChange = jest.fn();
  render(<MaterialField {...propsData} onChange={onChange}/>);

  const materialFieldElement = screen.getByTestId('materialfield');
  expect(materialFieldElement).toBeInTheDocument();
  expect(materialFieldElement).toHaveTextContent('');
  expect(materialFieldElement).toHaveAccessibleName('Wood', 'Wood');
});

test('Should not render MaterialField with empty label', () => {
  const propsData = {label: 'Wood', value: 'string', error: 'error'};
  const onChange = jest.fn();
  render(<MaterialField {...propsData} onChange={onChange} />);

  const materialFieldElement = screen.getByTestId('materialfield');
  expect(materialFieldElement).toBeInTheDocument();
  expect(materialFieldElement).not.toHaveAccessibleName('', 'Wood');
});

test('Test MaterialField onChange', () => {
  const propsData = {label: 'Wood', error: 'error', value: 'tes'};
  const onChange = jest.fn();
  render(<MaterialField {...propsData} onChange={onChange} />);

  const materialFieldElement = screen.getByTestId('materialfield');

  // Test what happens when you input a number.
  fireEvent.change(materialFieldElement, {target: {value: '10'}});
  expect(onChange).toHaveBeenCalledTimes(1);

  // Test what happens when you input something that is not a number.
  fireEvent.change(materialFieldElement, {target: {value: 'apa'}});
  expect(onChange).toHaveBeenCalledTimes(2);
});

test('Test MaterialField onFocus', () => {
  const propsData = {label: 'Wood', error: 'error', value: 'tes'};
  const onChange = jest.fn();
  render(<MaterialField {...propsData} onChange={onChange}/>);
  const materialFieldElement = screen.getByTestId('materialfield');

  materialFieldElement.focus();
  expect(materialFieldElement).toHaveFocus();
});

test('Test MaterialField onBlur', () => {
  const propsData = {label: 'Wood', error: 'error', value: 'tes'};
  const onChange = jest.fn();
  render(<MaterialField {...propsData} onChange={onChange} />);
  const materialFieldElement = screen.getByTestId('materialfield');

  fireEvent.blur(materialFieldElement, {target: {value: 0}});
  fireEvent.blur(materialFieldElement, {target: {value: -1}});
});

test('Matches snapshot', () => {
  const propsData = {label: 'Wood', value: 'string', error: 'error'};
  const onChange = jest.fn();

  const tree = renderer.create(<MaterialField {...propsData}
    onChange={onChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
