import { render, fireEvent } from "@testing-library/react";
import App from '../App';

describe('Main App', () => {
    describe('Div Rendering', () => {
        it('should render the "Login Here" button if there is no hash in the address bar and no local storage "authKey"', () => {
            // Setup
            const { getByTestId } = render(<App />);
            const expected = true;
            let result = false;

            // Exercise
            if (getByTestId('loginBtn')) {
                result = true;
            }

            // Verify
            expect(result).toBe(expected);
        });

        it('should render the normal page if there is a hash number in the address bar', () => {
            // Setup
            delete window.location;
            window.location = { hash: '#access_token=12345', href: 'http://localhost:3000' };
            const { getByTestId } = render(<App />);
            let result = false;

            // Exercise
            if (getByTestId('mainApp')) {
                result = true;
            }

            // Verify
            expect(result).toBe(true);
        });
    });
});