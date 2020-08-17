import React from 'react';
import Builder from '../Utilities/URLBuilder';
import styled from 'styled-components';

interface ChampionCardProps {
    id: string;
    name: string;
}

const ChampionDiv = styled.div`
    padding-bottom: 32px;
`;

const TagsDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    a {
        display: inline-block;
        height: 36px;
        width: 200px;
        line-height: 36px;
        position: relative;
        color: #f0f0f0;
        font-size: 24px;
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
        text-decoration: none;
        font-weight: bold;
    }
`;

const ChampionCard: React.FC<ChampionCardProps> = ({ id, name }: ChampionCardProps) => {
    return (
        <ChampionDiv>
            <img key={id} src={Builder.defaultImageUrl(id)} alt={name} />;
            <TagsDiv>
                <a href="#" className="color">
                    {name}
                </a>
            </TagsDiv>
        </ChampionDiv>
    );
};

export default ChampionCard;
