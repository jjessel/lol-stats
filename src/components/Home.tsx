import React from 'react';

import background from '../images/lol_background.jpg';

const Home: React.FC = () => {
    return (
        <div className="backgroundImage">
            <img src={background} alt="LOL background" />;
        </div>
    );
};

export default Home;
