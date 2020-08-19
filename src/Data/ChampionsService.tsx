import { Champion } from '../models/Champion';
import jsonObj from '../jsonData/champion.json';
import axios from 'axios';
import { ChampionFull, ChampionLite } from '../models/ChampionFull';

export default class ChampionsService {
    static champions = (): Champion[] => {
        return Object.values(jsonObj.data).map((item) => {
            return item as Champion;
        });
    };

    static champion = async (name: string): Promise<ChampionFull> => {
        const uri = `http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/${name}.json`;
        const response = await axios.get(uri);
        const { data } = response;

        const cf = {
            type: data.type,
            format: data.format,
            version: data.version,
            champion: Object.values(data.data).map((item) => {
                return item as ChampionLite;
            })[0],
        };

        return Promise.resolve(cf);
    };
}
