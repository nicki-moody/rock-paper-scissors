import { choices } from "~/utils/choices";

export default function ChoiceCard({choice, displayHighlight} : {choice: string | undefined, displayHighlight : boolean}) {
    
    const chosenChoice = choices.find((ch) => ch.choice === choice);
    if (chosenChoice === undefined)
        return ( <div>You did not select a valid choice</div>
    )
    return ( 
        <div className={`${displayHighlight ? "winner" : "z-10"} ${chosenChoice.outerCircle} flex rounded-full w-44 h-44 sm:w-64 sm:h-64 items-center justify-center`}>
            <div className="flex bg-white rounded-full shadow-inner-strong w-32 h-32 sm:w-48 sm:h-48 items-center justify-center">
            <img src={chosenChoice.icon} alt={chosenChoice.text} className="w-15 sm:w-24"/>
            </div>
        </div>
    )
}