import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2>Premium Access</h2>
            {
                data.id
            }
        </div>
    );
};

export default PremiumAccess;