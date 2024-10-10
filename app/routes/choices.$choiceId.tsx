import { useParams } from "@remix-run/react";
import { useState, useEffect } from "react";
import { useOutletContext } from "@remix-run/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ChoiceCard from "~/components/ChoiceCard";
import OutcomeBanner from "~/components/OutcomeBanner";

import { choices } from "~/utils/choices";
import { Decision, determineWinner, ScoreOutletContext } from "~/utils/game";

export default function Choice() {
    const { score, updateScore } = useOutletContext<ScoreOutletContext>();
    const {choiceId} = useParams();
    const [computerChoice, setComputerChoice] = useState(""); 
    const [loading, setLoading] = useState(true); 
    const [decision, setDecision] = useState(Decision.NotSet);
    const [showDecision, setShowDecision] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => {
            const computerChoice = choices[Math.floor(Math.random() * choices.length)].choice;
            setComputerChoice(computerChoice);
            
            const gameDecision = determineWinner(choiceId || "", computerChoice);
            setDecision(gameDecision);
            setLoading(false);

            const timer2 = setTimeout(() => {
                updateScore(gameDecision);
                if(gameDecision != Decision.NotSet){
                    setShowDecision(true);
                }
            }, 1000); 

            return () => {
                clearTimeout(timer2);
        }
        }, 1000); 

        return () => {
            clearTimeout(timer);
        }
    }, [choiceId]);

    return (
        <div className="flex h-screen items-start justify-center bg-gradient-start uppercase">
            <div className="flex flex-col items-center gap-2 grow">
                <Header score={score}/>
                <div className="flex flex-row basis-auto justify-center items-stretch w-1/2">
                    <div className="flex flex-col w-1/2 items-center">
                        <div className="text-gray-100 p-8">You Picked</div>
                        <div className="flex justify-center h-full">
                            <ChoiceCard choice={choiceId} />
                        </div>
                    </div>
                    {
                        (showDecision) ? 
                        (
                             <div className="flex items-center">
                                <OutcomeBanner decision={decision} />
                            </div>
                        ) : null
                        
                    }
                   
                    <div className="flex flex-col w-1/2 items-center">
                       <div className="text-gray-100 p-8">The House Picked</div> 
                       <div className="flex justify-center h-full items-center">
                            {
                                loading ? 
                                ( <div className="flex bg-dark-blue rounded-full items-center w-40 h-40"></div> ) : 
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

