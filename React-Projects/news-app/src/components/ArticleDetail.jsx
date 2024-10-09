// src/components/ArticleDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const ArticleDetail = ({ articles }) => {
    const { index } = useParams();
    const article = articles[index];

    if (!article) {
        return <Typography variant="h6">Article not found!</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="body1" style={{ margin: '20px 0' }}>
                {article.content || article.description}
            </Typography>
            <Typography variant="subtitle1">Source: {article.source.name}</Typography>
        </Container>
    );
};

export default ArticleDetail;
