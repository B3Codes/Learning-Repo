// src/components/SourceList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const SourceList = ({ sources }) => {
    return (
        <div>
            {sources.map((source, index) => (
                <Link key={index} to={`/source/${source.id}`} style={{ textDecoration: 'none' }}>
                    <Card style={{ margin: '10px', cursor: 'pointer' }}>
                        <CardContent>
                            <Typography variant="h5">{source.name}</Typography>
                            <Typography variant="body2">{source.description}</Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default SourceList;
