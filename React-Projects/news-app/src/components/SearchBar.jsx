import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
        setQuery('');
    };

    return (
        <Box display="flex" justifyContent="center" marginBottom={2}>
            <TextField
                label="Search News"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="contained" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
