const React = require('react');
const { render } = require('@testing-library/react');
const assert = require('assert');
const Playlist = require('../src/components/Playlist/Playlist')
// import { render } from '@testing-library/react';
// import assert from 'assert';
// import Playlist from '../src/components/Playlist';

describe('Playlist Component', () => {
    let result, component;

    describe('empty playlist function',() => {
        it('should render the correct text', () => {
            // Setup
            component = render(React.createElement(Playlist, { tracklist: [] }));
            let expected = 'Start Adding Songs!';

            // Exercise
            result = component.container.querySelector('h4').innerHTML;

            // Verify
            assert.strictEqual(result, expected);

            // Teardown
            component.unmount();
        })
    })
})