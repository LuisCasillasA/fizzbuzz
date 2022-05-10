const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit test for ExplorerService", () =>{
    test("1. Get all explorers in mission", () =>{
        const explorer = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorer, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("2. Get amount explorers in mission", () =>{
        const explorer = [{mission: "node"}];
        const amount = ExplorerService.getAmountOfExplorersByMission(explorer, "node");
        expect(amount).toBe(1);
    });
    test("3. Ger explorers usernames in mission",() =>{
        const explorer = [{mission: "node", githubUsername: "Luis"}];
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(usernames).toContain("Luis");
    });
});