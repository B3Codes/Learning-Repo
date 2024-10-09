// src/components/Pagination.jsx
import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalArticles, articlesPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <MuiPagination
            count={pageNumbers.length}
            onChange={(e, page) => paginate(page)}
            variant="outlined"
            shape="rounded"
            style={{ marginTop: '20px' }}
        />
    );
};

export default Pagination;
