import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ImageModal from '../ImageModal';

afterEach(() => {
  cleanup();
});

test('Should render ImageModal with a correct image', ()=>{
  const propsData = {picture: 'https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg', isOpen: true};
  const closeHandler = jest.fn();
  const {getByAltText} =
  render(<ImageModal {...propsData} closeHandler={closeHandler} />);
  const image = getByAltText('Firestore Photo');

  const imageModalElement = screen.getByTestId('imageModal');
  expect(imageModalElement).toBeInTheDocument();
  expect(image.src).toContain(propsData.picture);
  expect(image).toHaveAttribute('src', propsData.picture);
});

test('Should render ImageModal with a incorrect image', ()=>{
  const propsData = {picture: 'https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg', isOpen: true};
  const closeHandler = jest.fn();
  const {getByAltText} =
  render(<ImageModal {...propsData} closeHandler={closeHandler} />);
  const image = getByAltText('Firestore Photo');

  const imageModalElement = screen.getByTestId('imageModal');
  expect(imageModalElement).toBeInTheDocument();
  expect(image.src).not.toBe('');
  expect(image).not.toHaveAttribute('src', '');
});

test('Matches snapshot', ()=>{
  const propsData = {picture: 'https://i.picsum.photos/id/203/200/200.jpg?hmac=fydyJjsULq7iMwTTIg_m6g_PQQ1paJrufNsEiqbJRsg', isOpen: true};
  const closeHandler = jest.fn();

  const {tree} = render(<ImageModal
    {...propsData} closeHandler={closeHandler}/>);
  expect(tree).toMatchSnapshot();
});
