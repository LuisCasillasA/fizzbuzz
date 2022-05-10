const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test for ExplorerController", () =>{
    test("1. Get all explorers in mission", () =>{
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        expect(nodeExplorers.every((explorer) => explorer.mission === "node")).toBe(true);
    });
    test("2. Get amount explorers in mission", () =>{
        const amount = ExplorerController.getAmountOfExplorersByMission("node");
        expect(amount).toBe(10);
    });
    test("3. Ger explorers usernames in mission",() =>{
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames).toContain("ajolonauta1");
    });
});