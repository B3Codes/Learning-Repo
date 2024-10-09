// src/components/ArticleList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map((article, index) => (
                <Link key={index} to={`/article/${index}`} style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '10px', cursor: 'pointer' }}>
                        <CardContent>
                            <Typography variant="h5">{article.title}</Typography>
                            <Typography variant="body2">{article.description}</Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;
