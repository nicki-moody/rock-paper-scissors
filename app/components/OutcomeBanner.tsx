import { Link } from "@remix-run/react";
import { Decision } from "~/utils/game";

export default function OutcomeBanner({ showDecision, decision } : { showDecision: boolean, decision: Decision }) {  
    if(decision === Decision.NotSet || !showDecision) 
        return;

    return (
        <div className="flex flex-col p-4 text-center whitespace-nowrap">
            <p className="text-5xl sm:text-4xl uppercase text-white pb-4">
                { bannerText(decision) }  
            </p>
            <Link to="/" className="uppercase text-red-800 text-base sm:text-xs p-4 sm:p-2 px-6 bg-gray-100 rounded-lg"> 
                Play Again
            </Link>
        </div>
    )
}              

function bannerText(decision : Decision){
    if (decision === Decision.Won)
        return "You win"
    else if (decision === Decision.Lost)
        return "You Lose"
    else if (decision === Decision.Draw)
        return "Draw"
    else return
}
