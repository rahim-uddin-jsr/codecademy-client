import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext/UserContext';


const Home = () => {
    const { name } = useContext(AuthContext)
    return (
        <div className='dark:bg-slate-500 dark:text-white'>
            <h2>This is Home {name}</h2>
        </div>
    );
};

export default Home;