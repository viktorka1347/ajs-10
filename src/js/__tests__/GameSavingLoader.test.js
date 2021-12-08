import GameSavingLoader from "../GameSavingLoader";

test("Метод load должен создавать объект типа GameSaving", async() => {
    const gameSaving = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000,
        },
    };
    expect(await GameSavingLoader.load()).toEqual(gameSaving);
});