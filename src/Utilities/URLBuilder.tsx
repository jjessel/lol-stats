export default class Builder {
    static defaultImageUrl = (name: string): string => {
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
    };
}
