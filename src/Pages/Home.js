import React from 'react';
import Form from '../Components/Form';
import useTitle from '../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='pb-[500px]'>
            <Form/>
        </div>
    );
};

export default Home;