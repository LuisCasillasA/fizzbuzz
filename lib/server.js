const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json({mission: mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) =>{
    const mission = request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: mission, explorers: usernames});
});

app.get("/v1/fizzbuzz/:score", (request, response) =>{
    const score = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    response.json({score: score, trick: trick});
});

app.get("/v1/explorers/stack/:stack", (request, response) =>{
    const stack = request.params.stack;
    const explorers = ExplorerController.getExplorersByStack(stack);
    response.json(explorers);
});