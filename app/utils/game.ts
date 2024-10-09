export const determineWinner = (playerChoice : string, computerChoice : string) => {
    if(playerChoice === computerChoice)
        return 0;
    else if(playerChoice === "rock" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "rock"
    )
        return -1;
    else 
        return 1;
}
