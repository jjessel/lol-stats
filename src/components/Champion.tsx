import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChampionFull } from '../models/ChampionFull';
import ChampionsService from '../Data/ChampionsService';

const Champion: React.FC = () => {
    const { name } = useParams();
    const [champion, setChampion] = useState({} as ChampionFull);

    useEffect(() => {
        if (!champion.champion) {
            document.title = 'Champion';
            ChampionsService.champion(name).then((value) => {
                setChampion(value);
            });
        } else {
            document.title = champion.champion.name;
        }
    });

    if (!champion.champion) {
        return <div>Fetching Data</div>;
    } else {
        return <div>The champion is {champion.champion.name}</div>;
    }
};

export default Champion;
