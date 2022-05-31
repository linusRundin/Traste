import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Inputfield from '../Inputfield';
import React from 'react';


afterEach(() => {
  cleanup();
});

/**
   * Test function.
   */
function testOnChange() {
  console.log('Change was made');
};

test('Should render inputfield', () => {
  const propsData = {label: 'Docket No.', onChange: testOnChange,
    value: 'string', error: 'error'};

  render(<Inputfield {...propsData} />);

  const inputElement = screen.getByTestId('inputfield');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAccessibleName('Docket No.');
});

test('Should render inputfield', () => {
  const propsData = {label: 'Docket No.', onChange: testOnChange,
    value: 'string', error: 'error'};
  render(<Inputfield {...propsData} />);

  const inputElement = screen.getByTestId('inputfield');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).not.toHaveAccessibleName('DocketNo.');
});

test('Matches snapshot', () => {
  const propsData = {label: 'Docket No.', onChange: testOnChange,
    value: 'string', error: 'error'};

  const tree = renderer.create(<Inputfield {...propsData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
