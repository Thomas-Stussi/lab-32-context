/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/heyArnoldApi';
import { useThemePicker } from '../../hooks/themes';

jest.mock('../../services/heyArnoldApi.js');
jest.mock('../../hooks/themes');

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    useThemePicker.mockResolvedValue('dark');
    getCharacters.mockResolvedValue([
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }
    ]);
    const { asFragment } = render(<CharacterList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
