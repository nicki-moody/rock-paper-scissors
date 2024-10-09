import { useParams } from "@remix-run/react";
import Header from "~/components/header";
import Footer from "~/components/footer";


function ChoiceCard({choice}) {
    if (choice === undefined)
        return ( <div>You did not select a valid choice</div>
    )

    return ( 
        <div key={choice.choice} className={`${choice.outerCircle} flex rounded-full w-72 h-72 items-center justify-center`}>
            <div className="flex bg-white rounded-full shadow-md w-56 h-56 items-center justify-center">
            <img src={choice.icon} alt={choice.text} className="w-15"/>
            </div>
        </div>
    ) 
}

export default function Choice() {
    const params = useParams();
    const chosenMove = choices.find((choice) => choice.choice === params!.choiceId)

    return (
        <div className="flex h-screen items-start justify-center bg-gradient-start uppercase">
            <div className="flex flex-col items-center gap-2 grow">
                <Header />
                <div className="flex flex-row w-1/2 justify-center items-stretch bg-game">
                    <div className="flex flex-col w-1/2 items-center">
                        <div className="text-gray-100 p-8">You Picked</div>
                        <div className="flex justify-center">
                            <ChoiceCard choice={chosenMove} />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 items-center">
                       <div className="text-gray-100 p-8">The House Picked</div> 
                       <div className="flex justify-center">
                        </div>
                    </div>
                </div>
                <Footer />
            </div> 
        </div>

    
    );
}

const choices = [
  {
    choice: "paper",
    text: "Select Paper",
    icon: "/images/icon-paper.svg",
    placement: "mr-auto",
    outerCircle: "paper-outer-circle" ,
  },
  {
    choice: "scissors",
    text: "Select Scissors",
    icon: "/images/icon-scissors.svg",
    placement: "ml-auto",
    outerCircle: "scissors-outer-circle" ,
  },
  {
    choice: "rock",
    text: "Select Rock",
    icon: "/images/icon-rock.svg",
    placement: "basis-full",
    outerCircle: "rock-outer-circle" ,
  },
]