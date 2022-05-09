class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission)
        return explorersInMission.map((explorer) => explorer.githubUsername)
    }
}

module.exports = ExplorerService