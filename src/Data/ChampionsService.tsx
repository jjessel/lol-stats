import { Champion } from '../models/Champion';
import jsonObj from '../jsonData/champion.json';
import axios from 'axios';

export default class ChampionsService {
    static champions = (): Champion[] => {
        return Object.values(jsonObj.data).map((item) => {
            return item as Champion;
        });
    };

    private static champion = (name: string) => {
        const uri = `http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${name}.json`;
        return axios.get(uri);
    };
}
