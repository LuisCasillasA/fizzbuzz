//Read file
const Reader = require('./lib/utils/Reader');
const explorers = Reader.readJsonFile('./explorers.json');

//Using ExplorerService on the list
const ExplorerService = require('./lib/services/ExplorerService')

ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");