import { useParams } from "@remix-run/react";
import { useState, useEffect } from "react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { choices } from "~/utils/choices";
import { determineWinner } from "~/utils/game";

function ChoiceCard({choice}) {
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

export default function Choice() {
    const {choiceId} = useParams();
    const [computerChoice, setComputerChoice] = useState(""); 
    const [loading, setLoading] = useState(true); 
    const [gameResult, setGameResult] = useState<number | undefined>();

    useEffect(() => {
        const timer = setTimeout(() => {
            const computerChoice = choices[Math.floor(Math.random() * choices.length)].choice;
            setComputerChoice(computerChoice);
            
            const gameResult = determineWinner(choiceId, computerChoice);
            setGameResult(gameResult);

            setLoading(false);
            }, 1000); 

            return () => clearTimeout(timer);
        }, [choiceId]);

    return (
        <div className="flex h-screen items-start justify-center bg-gradient-start uppercase">
            <div className="flex flex-col items-center gap-2 grow">
                <Header />
                <div className="flex flex-row w-1/2 justify-center items-stretch">
                    <div className="flex flex-col w-1/2 items-center">
                        <div className="text-gray-100 p-8">You Picked</div>
                        <div className="flex justify-center">
                            <ChoiceCard choice={choiceId} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-center">
                       <div className="text-gray-100 p-8">The House Picked</div> 
                       <div className="flex justify-center">
                            {
                                loading ? 
                                ( <p>The computer is picking</p> ) : 
                                ( <ChoiceCard choice={computerChoice} /> )
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div> 
        </div>
    );
}

