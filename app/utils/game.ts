export function determineWinner(playerChoice : string, computerChoice : string) : Decision { 
    if(playerChoice === computerChoice)
        return Decision.Draw;
    else if(playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock"
    )
        return Decision.Lost;
    else 
        return Decision.Won;
}

export enum Decision {
    Won = 1,
    Lost = -1,
    Draw = 0,
    NotSet = -99,
}

export interface ScoreOutletContext {
  score: number;
  updateScore(decision: Decision): void;
}