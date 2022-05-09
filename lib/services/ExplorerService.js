class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length
    }

    static getExplorerUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService