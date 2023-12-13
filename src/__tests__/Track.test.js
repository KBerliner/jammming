import { render, fireEvent } from '@testing-library/react';
import Track from '../components/Track/Track';

describe("Track Component", () => {
    describe("General Tracks", () => {
        let track, component;

        beforeEach(() => {
            track = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' };
            component = render(<Track uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={false} />);
        });        

        it("should display the correct name of the track", () => {
            // Setup
            const expected = 'Song 1';

            // Exercise
            const result = component.getByTestId('trackName').textContent;

            // Verify
            expect(result).toBe(expected);

        });

        it('should display the correct artist of the track', () => {
            // Setup
            const expected = 'Artist 1';
            
            // Exercise
            const result = component.getByTestId('trackArtist').textContent;
            
            // Verify
            expect(result).toBe(expected);
        });

        it('should display the correct album of the track', () => {
            // Setup
            const expected = 'Album 1';
            
            // Exercise
            const result = component.getByTestId('trackAlbum').textContent;
            
            // Verify
            expect(result).toBe(expected);
        });
    });

    describe("Search Results Tracks", () => {
        it('should display "+" in the button on the right side', () => {
            // Setup
            const track = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' };
            const component = render(<Track uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={false} />);
            const expected = "add_FILL0_wght400_GRAD0_opsz24.svg";

            // Exercise
            const result = component.getByTestId('trackButton').src.split('/')[3];

            // Verify
            expect(result).toBe(expected);

        });

        it('should correctly submit the track info to add to the playlist', () => {
            // Setup
            const track = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' };
            const onAddTrackMock = jest.fn();
            const component = render(<Track handleAddToPlaylist={onAddTrackMock} uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={false} />);
            const expected = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1'};

            // Exercise
            const button = component.getByTestId('trackButton');
            fireEvent.click(button);

            // Verify
            expect(onAddTrackMock).toHaveBeenCalledWith(expected);

        });
        
    });

    describe("Playlist Tracks", () => {
        it('should display "x" in the button on the right side', () => {
            // Setup
            const track = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' };
            const component = render(<Track uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={true} />);
            const expected = "close_FILL0_wght400_GRAD0_opsz24.svg";

            // Exercise
            const result = component.getByTestId('trackButton').src.split('/')[3];

            // Verify
            expect(result).toBe(expected);

        });

        it('should correctly submit the track info to remove from the playlist', () => {
            // Setup
            const onRemoveTrackMock = jest.fn();
            const track = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' };
            const component = render(<Track handleRemoveFromPlaylist={onRemoveTrackMock} uri={track.uri} key={track.uri} name={track.name} artist={track.artist} album={track.album} saved={true} />);
            const expected = { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1'};
            
            // Exercise
            const button = component.getByTestId('trackButton');
            fireEvent.click(button);

            // Verify
            expect(onRemoveTrackMock).toHaveBeenCalledWith(expected);
            
        });
    });
});