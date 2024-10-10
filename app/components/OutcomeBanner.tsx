import { Link } from "@remix-run/react";
import { Decision } from "~/utils/game";

//export default function OutcomeBanner(decision : Decision) {
export default function OutcomeBanner({ decision }: { decision: Decision }) {  
    if(decision === Decision.NotSet) return;

    return (
        <div id="outcome-banner" className="absolute z-10 top-1/2 rounded-lg border-2 border-red-300 bg-white p-4 text-center">
            <p className="text-6xl">
                { bannerText(decision) }  
            </p>
            <Link to="/" className="uppercase text-black">Play Again</Link>
        </div>
    )
}              

function bannerText(decision : Decision){
    if (decision === Decision.Won)
        return "You won!"
    else if (decision === Decision.Lost)
        return "You Lost!"
    else if (decision === Decision.Draw)
        return "Draw!"
    else return
}
