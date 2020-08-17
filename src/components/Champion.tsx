import React from 'react';
import { useParams } from 'react-router-dom';

const Champion: React.FC = () => {
    const { name } = useParams();
    return <div>The champion is {name}</div>;
};

export default Champion;
