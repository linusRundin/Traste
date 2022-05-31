import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import renderer from 'react-test-renderer';
import React from 'react';

afterEach(() => {
  cleanup();
});

/**
   * Test function.
   */
function goBack() {
  console.log('Test back');
}

test('Should not contain SIMON text', () => {
  render(<Header goBackHandler={goBack} />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).not.toHaveTextContent('SIMON');
});

test('Matches snapshot', () => {
  const tree = renderer.create(<Header goBackHandler={goBack} />).toJSON();
  expect(tree).toMatchSnapshot();
});
