import { render, screen, fireEvent } from '@testing-library/react';
import Playlist from '../components/Playlist/Playlist.js';

describe("Playlist Component", () => {
    describe("Tracklist", () => {
        it("should display the text 'Start Adding Songs!' when the playlist is empty", () => {
            // Setup
            const { getByTestId } = render(<Playlist emptyPlaylist={true} />);
            const expected = 'Start Adding Songs!';

            // Exercise
            const result = getByTestId('emptyPlaylistText').textContent;

            // Verify
            expect(result).toBe(expected);
        });

        it("should display the tracks added to the playlist", () => {
            // Setup
            const tracks = [
                { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
                { uri: '2', name: 'Song 2', artist: 'Artist 2', album: 'Album 2' }
            ];
            const { getByTestId } = render(<Playlist tracklist={tracks} />);
            const expected = 2;

            // Exercise
            const result = getByTestId('playlistTracksContainer').children.length;

            // Verify
            expect(result).toBe(expected);
        });
    });

    describe("Playlist Name Input", () => {
        it("should display 'Your Playlist' before any change is made", () => {
            // Setup
            const { getByTestId } = render(<Playlist />);
            const expected = 'Your Playlist';

            // Exercise
            const result = getByTestId('playlistTitle').value;

            // Verify
            expect(result).toBe(expected);
        });

        it("should update the title when another string is inputted", () => {
            // Setup
            const { getByTestId } = render(<Playlist />);
            const inputField = getByTestId('playlistTitle');
            const expected = 'This is my new Playlist';

            // Exercise
            fireEvent.change(inputField, { target: { value: expected } });
            const result = inputField.value;

            // Verify
            expect(result).toBe(expected);
        });
    });

    describe("Playlist Submit Button", () => {
        it("should appear when a track is added to the playlist", () => {
            // Setup
            const track = [
                { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' }
            ];
            const { getByTestId } = render(<Playlist tracklist={track} />);
            const expected = true;
            let result;

            // Exercise
            if (getByTestId('submitToSpotifyBtn')) {
                result = true;
            } else {
                result = false;
            }

            // Verify
            expect(result).toBe(expected);
        });

        it("should handle and submit the playlist object correctly", () => {
            // Setup
            const onSubmitPlaylistMock = jest.fn();
            const track = [
                { uri: '1', name: 'Song 1', artist: 'Artist 1', album: 'Album 1' }
            ];
            const { getByTestId } = render(<Playlist tracklist={track} onSubmitPlaylist={onSubmitPlaylistMock} />);
            const submitBtn = getByTestId('submitToSpotifyBtn');
            const inputField = getByTestId('playlistTitle');
            const expected = {
                name: "Banger Playlist",
                tracks: ['1']
            }

            // Exercise
            fireEvent.change(inputField, { target: { value: "Banger Playlist" } });
            fireEvent.click(submitBtn);

            // Verify
            expect(onSubmitPlaylistMock).toHaveBeenCalledWith(expected);
        });
    });
});