import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
    static async load() {
        return JSON.parse(await json(await read()));
    }
}