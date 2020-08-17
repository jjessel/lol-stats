import React from 'react';
import background from '../images/lol_background.jpg';
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
`;

const Home: React.FC = () => {
    return (
        <Div>
            <img src={background} alt="LOL background" />;
        </Div>
    );
};

export default Home;
