// src/components/SourceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Link } from '@mui/material';

const SourceDetail = ({ sources }) => {
    const { id } = useParams();
    const source = sources.find(source => source.id === id);

    if (!source) {
        return <Typography variant="h6">Source not found!</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4">{source.name}</Typography>
            <Typography variant="body1" style={{ margin: '20px 0' }}>
                {source.description}
            </Typography>
            <Link href={source.url} target="_blank" rel="noopener noreferrer">
                Visit {source.name}
            </Link>
        </Container>
    );
};

export default SourceDetail;
