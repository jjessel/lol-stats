import React from 'react';
import ChampionCard from './ChampionCard';
import './Characters.css';
import ChampionsService from '../Data/ChampionsService';

const champions = ChampionsService.champions();

const Characters: React.FC = () => {
    return (
        <div className="characters">
            {champions.map((champ) => {
                return <ChampionCard key={champ.id} id={champ.id} name={champ.name} />;
            })}
        </div>
    );
};

export default Characters;
