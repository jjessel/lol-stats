import React from 'react';
import Builder from '../Utilities/URLBuilder';
import './ChampionCard.css';

interface ChampionCardProps {
    id: string;
    name: string;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ id, name }: ChampionCardProps) => {
    return (
        <div className="cardHolder">
            <img key={id} src={Builder.defaultImageUrl(id)} alt={name} />;
            <div className="tags">
                <a href="#" className="color">
                    {name}
                </a>
            </div>
        </div>
    );
};

export default ChampionCard;
