import { Champion } from '../models/Champion';
import jsonObj from '../jsonData/champion.json';

export default class ChampionsService {
    static champions = (): Champion[] => {
        return Object.values(jsonObj.data).map((item) => {
            return item as Champion;
        });
    };
}
