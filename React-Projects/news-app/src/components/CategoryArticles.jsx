// src/components/CategoryArticles.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';

const CategoryArticles = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`YOUR_API_URL&category=${category}`);
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [category]);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const currentArticles = articles.slice(0, indexOfLastArticle);

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>{category.toUpperCase()}</Typography>
            <Grid container spacing={2}>
                {currentArticles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <div>
                            <img src={article.urlToImage} alt={article.title} style={{ width: '100%' }} />
                            <Typography variant="h6">{article.title}</Typography>
                            <Typography variant="body2">{article.description}</Typography>
                            <Button variant="text" href={article.url} target="_blank">Read More</Button>
                        </div>
                    </Grid>
                ))}
            </Grid>
            {indexOfLastArticle < articles.length && (
                <Button variant="contained" onClick={handleLoadMore} style={{ marginTop: '20px' }}>
                    Load More
                </Button>
            )}
        </Container>
    );
};

export default CategoryArticles;
