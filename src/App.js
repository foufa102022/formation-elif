import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-01-15&sortBy=publishedAt&apiKey=1bc628b4b88146e6be520edb4529ab2f');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Recherche de nouvelles du monde entier</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <p>Source : {article.source.name}</p>
            <p>Date de publication : {article.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
