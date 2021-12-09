import json from "./parser";
import read from "./reader";
import GameSaving from './GameSaving';
export default class GameSavingLoader {
    static load() {
        return read()
            .then((res: T) => json(res))
            .then((resolve: T) => new GameSaving(JSON.parse(resolve)));
    }
}