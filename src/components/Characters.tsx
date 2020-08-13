import React from 'react';
import { Champion } from '../models/Champion';
import Builder from '../Utilities/URLBuilder';

interface CharacterProps {
    champions: Champion[];
}

const Characters: React.FC<CharacterProps> = ({ champions }: CharacterProps) => {
    return (
        <div>
            {champions.map((champ) => {
                return <img key={champ.id} src={Builder.defaultImageUrl(champ.id)} alt={champ.name} />;
            })}
        </div>
    );
};

export default Characters;
