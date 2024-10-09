// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SourceDetail from './components/SourceDetail';

const App = () => {
    const [sources, setSources] = React.useState([]);

    React.useEffect(() => {
        const fetchSources = async () => {
            const response = await fetch('https://newsapi.org/v2/sources?apiKey=e01f861c48874b93bc2e3e5a1fe96b21');
            const data = await response.json();
            console.log(data.sources)
            setSources(data.sources);
        };

        fetchSources();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home sources={sources} />} />
                <Route path="/source/:id" element={<SourceDetail sources={sources} />} />
            </Routes>
        </Router>
    );
};

export default App;
