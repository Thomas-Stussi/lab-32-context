/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { getCharacters } from '../../services/heyArnoldApi';
import Theme from './Theme';

jest.mock('../../services/heyArnoldApi.js');

describe('darkmode theme list of things!', () => {
  it('changes the background color', async() => {
    getCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }
    ]);

    render(<Theme />);

    const button = screen.getByRole('button');
    const characters = screen.getByTestId('characters');

    expect(characters).toHaveClass('light');

    fireEvent.click(button);

    await waitFor(() => {
      expect(characters).toHaveClass('dark');
    });

    fireEvent.click(button);

    return waitFor(() => {
      expect(characters).toHaveClass('light');
    });
  });
});
