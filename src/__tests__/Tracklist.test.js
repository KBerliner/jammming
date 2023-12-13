import { render } from '@testing-library/react';
import Tracklist from '../components/Tracklist/Tracklist';

describe('Tracklist Component', () => {
    it('should display "Search for Some Songs!" if nothing has been searched yet', () => {
        // Setup
        const { getByTestId } = render(<Tracklist tracklist={[]} />);
        const expected = "Search for Some Songs!"

        // Exercise
        const result = getByTestId('emptyTracklistText').textContent;

        // Verify
        expect(result).toBe(expected);

    });

    it('should display the correct amount of tracks', () => {
        // Setupj
        const tracks = [
            { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
            { uri: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' }
        ]
        const { getByTestId } = render(<Tracklist tracklist={tracks} />);
        const container = getByTestId('tracksContainer');
        const expected = 2;

        // Exercise
        const result = container.children.length;

        // Verify
        expect(result).toBe(expected);
    });
});