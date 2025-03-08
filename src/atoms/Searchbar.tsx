import React from 'react';

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
    return (
        <div className="flex justify-center">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="px-8 py-2 rounded-3xl my-4 border-2 border-[#ffffff]  w-2/6"
            />
        </div>
    );
};

export default SearchBar;