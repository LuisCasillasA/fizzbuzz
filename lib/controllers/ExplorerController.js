const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzBuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    
    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static applyValidationInNumber(number){
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;