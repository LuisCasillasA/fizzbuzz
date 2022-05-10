const ExplorerController = require("./../../lib/controllers/ExplorerController");
const FizzBuzzService = require('./../../lib/services/FizzBuzzService')

describe("Unit test for ExplorerController", () =>{
    test("1. Get all explorers in mission", () =>{
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        expect(nodeExplorers.every((explorer) => explorer.mission === "node")).toBe(true);
    });
    test("2. Get amount explorers in mission", () =>{
        const amount = ExplorerController.getAmountOfExplorersByMission("node");
        expect(amount).toBe(10);
    });
    test("3. Get explorers usernames in mission",() =>{
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames).toContain("ajolonauta1");
    });
    test("4. Get trick with score 1",() =>{
        const trick = FizzBuzzService.applyValidationInNumber(1);
        expect(trick).toBe(1);
    });
    test("5. Get trick with score 3",() =>{
        const trick = FizzBuzzService.applyValidationInNumber(3);
        expect(trick).toBe("FIZZ");
    });
    test("6. Get trick with score 5",() =>{
        const trick = FizzBuzzService.applyValidationInNumber(5);
        expect(trick).toBe("BUZZ");
    });
    test("7. Get trick with score 15",() =>{
        const trick = FizzBuzzService.applyValidationInNumber(15);
        expect(trick).toBe("FIZZBUZZ");
    });
});