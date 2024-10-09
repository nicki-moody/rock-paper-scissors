import { choices } from "~/utils/choices";

export default function ChoiceCard({choice}) {
    const chosenChoice = choices.find((ch) => ch.choice === choice)
    if (chosenChoice === undefined)
        return ( <div>You did not select a valid choice</div>
    )
    return ( 
        <div key={chosenChoice.choice} className={`${chosenChoice.outerCircle} flex rounded-full w-64 h-64 items-center justify-center`}>
            <div className="flex bg-white rounded-full shadow-inner-strong w-48 h-48 items-center justify-center">
            <img src={chosenChoice.icon} alt={chosenChoice.text} className="w-24"/>
            </div>
        </div>
    )
}