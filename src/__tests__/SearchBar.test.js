import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar.js";

describe('Search Bar Component', () => {
    describe('Search Input', () => {
        it('should contain an empty string before anything is typed in', () => {
            // Setup
            const { getByTestId } = render(<SearchBar />);
            const expected = "";
    
            // Exercise
            const result = getByTestId('searchInput').value;
    
            // Verify
            expect(result).toBe(expected);
        });
        
    
        it('should update the search when another string is inputted', () => {
            // Setup
            const { getByTestId } = render(<SearchBar />);
            const input = getByTestId('searchInput');
            const expected = "Test Search";
    
            // Exercise
            fireEvent.change(input, { target: { value: expected } });
            const result = input.value;
    
            // Verify
            expect(result).toBe(expected);
        });
    });
    
    describe('Search Button', () => {
        it('should submit the input field value correctly', () => {
            // Setup
            const onSearchMock = jest.fn();
            const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
            const input = getByTestId('searchInput');
            const searchBtn = getByTestId('searchBtn');
            const expected = "Test Search";

            // Exercise
            fireEvent.change(input, { target: { value: expected } })
            fireEvent.click(searchBtn);


            // Verify
            expect(onSearchMock).toHaveBeenCalledWith(expected);
        });
        
    });
});