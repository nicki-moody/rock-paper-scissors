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
            <div className="flex flex-col items-center gap-2 grow p-4 h-full justify-between ">
                <Header score={score}/>
                <div className="flex flex-row basis-auto justify-between space-x-2 w-auto">
                    <div className="flex flex-col items-center w-1/2">
                        <div className="z-10 text-gray-100 my-4">You Picked</div>
                        <div className="flex justify-center h-full w-full items-center">
                            <ChoiceCard choice={choiceId} displayHighlight={showDecision && decision === Decision.Won ? true : false} />
                        </div>
                    </div>
                    { 
                        (showDecision) ? 
                        (
                            <div className="hidden sm:flex z-10 flex items-center">
                                <OutcomeBanner showDecision={showDecision} decision={decision} />
                            </div>
                        ) : null
                    }
                    <div className="flex flex-col items-center w-1/2">
                       <div className="z-10 text-gray-100 my-4">The House Picked</div> 
                       <div className="flex justify-center h-full w-full items-center ">
                            {
                                loading ? 
                                ( 
                                    <div className="flex w-44 h-44 sm:w-64 sm:h-64 items-center justify-center">
                                        <div className="flex bg-dark-blue rounded-full w-32 h-32 sm:w-48 sm:h-48 items-center justify-center">                                        
                                        </div>
                                    </div>
                                ) : 
                                ( <ChoiceCard choice={computerChoice} displayHighlight={showDecision && decision === Decision.Lost ? true : false} /> )
                            }
                        </div>
                    </div>
                  
                </div>
                <div className="sm:hidden z-10 flex items-center">
                   <OutcomeBanner showDecision={showDecision} decision={decision} />
                </div>
                <Footer />
            </div> 
        </div>
    );
}

