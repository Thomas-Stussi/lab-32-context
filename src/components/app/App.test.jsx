/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { getCharacters } from '../../services/heyArnoldApi';

jest.mock('../../services/heyArnoldApi.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    getCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }
    ]);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
