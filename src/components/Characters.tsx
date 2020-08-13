import React from 'react';
import { Champion } from '../models/Champion';
import ChampionCard from './ChampionCard';
import './Characters.css';

interface CharacterProps {
    champions: Champion[];
}

const Characters: React.FC<CharacterProps> = ({ champions }: CharacterProps) => {
    return (
        <div className="characters">
            {champions.map((champ) => {
                return <ChampionCard key={champ.id} id={champ.id} name={champ.name} />;
            })}
        </div>
    );
};

export default Characters;
