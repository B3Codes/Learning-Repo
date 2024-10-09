import React from 'react';
import { Button, Box } from '@mui/material';

const Categories = ({ categories, onSelectCategory }) => {
    return (
        <Box display="flex" justifyContent="center" marginBottom={2}>
            {categories.map((category) => (
                <Button
                    key={category}
                    variant="contained"
                    onClick={() => onSelectCategory(category)}
                    sx={{ margin: '0 5px' }}
                >
                    {category}
                </Button>
            ))}
        </Box>
    );
};

export default Categories;
