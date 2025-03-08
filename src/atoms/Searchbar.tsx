import React from 'react';

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
    return (
        <div className="flex justify-center my-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="p-2 rounded-md w-1/2"
            />
        </div>
    );
};

export default SearchBar;