import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [articlesByCategory, setArticlesByCategory] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines/sources', {
        params: {
          apiKey: 'e01f861c48874b93bc2e3e5a1fe96b21',
          language: 'en',
        },
      });

      const articles = response.data.sources || [];

      // Group articles by category
      const categories = articles.reduce((acc, article) => {
        const category = article.category || 'general';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(article);
        return acc;
      }, {});

      setArticlesByCategory(categories);
    } catch (error) {
      setError('Error fetching articles: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Top News by Category</h1>
      {error && <p className="error">{error}</p>}

      {Object.keys(articlesByCategory).map((category) => (
        <div key={category} className="category-section">
          <h2>{category.toUpperCase()}</h2>
          <ArticleList articles={articlesByCategory[category].slice(0, 5)} />
          <button onClick={() => navigate(`/category/${category}`)}>Show More</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
