class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        return explorersInMission.map((explorer) => explorer.githubUsername);
    }

    static getExplorersByStack(explorers, stack){
        const explorersStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersStack;
    }

    static getNamesExplorersInMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        let names = "";
        for(let i in explorersInMission){
            names += explorersInMission[i].name + "\n";
        }
        return names;
    }
}

module.exports = ExplorerService;