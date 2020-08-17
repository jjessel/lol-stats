import React from 'react';
import Builder from '../Utilities/URLBuilder';
import styled from 'styled-components';

interface ChampionCardProps {
    id: string;
    name: string;
}

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
        margin: 0 16px 8px 0;
        padding: 0 10px 0 12px;
        background: #777;
        -webkit-border-bottom-right-radius: 3px;
        border-bottom-right-radius: 3px;
        -webkit-border-top-right-radius: 3px;
        border-top-right-radius: 3px;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 24px;
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
        text-decoration: none;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        font-weight: bold;
    }

    a:before {
        content: '';
        position: absolute;
        top: 0;
        left: -18px;
        width: 0;
        height: 0;
        border-color: transparent #0bc6e3 transparent transparent;
        border-style: solid;
        border-width: 18px 18px 18px 0;
    }

    a.color {
        background: #0bc6e3;
    }
`;

const ChampionCard: React.FC<ChampionCardProps> = ({ id, name }: ChampionCardProps) => {
    return (
        <div>
            <img key={id} src={Builder.defaultImageUrl(id)} alt={name} />;
            <TagsDiv>
                <a href="#" className="color">
                    {name}
                </a>
            </TagsDiv>
        </div>
    );
};

export default ChampionCard;
