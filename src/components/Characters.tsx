import React from 'react';
import jsonObject from '../jsonData/champion.json';
import { Champion } from '../models/Champion';

function Characters() {
    return (
        <div>
            {Object.values(jsonObject.data).map((item) => {
                return (
                    <img
                        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                        alt={item.name}
                    />
                );
            })}
        </div>
    );
}

export default Characters;
