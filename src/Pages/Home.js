import React from 'react';
import Form from '../Components/Form';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Form/>
        </div>
    );
};

export default Home;