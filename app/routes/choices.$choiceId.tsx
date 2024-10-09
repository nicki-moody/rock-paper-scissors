import { useParams } from "@remix-run/react";

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
                <header className="flex flex-row items-start justify-center mt-6 gap-4 w-2/4 rounded-lg border-2 header-outline p-4 dark:border-gray-700">
                    <div className="flex text-gray-100 text-3xl font-bold leading-7">
                        <img src="/images/logo.svg" alt="Rock Paper Scissors" />
                    </div>
                    <div className="flex flex-col items-center rounded-lg border-gray-200 p-2 border-2 ml-auto text-gray-100 bg-gray-100">
                        <p className="px-8 score-text text-xs">Score</p>
                        <p className="dark-text text-6xl font-bold">12</p>
                    </div>
                </header>
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
                <footer className=" rounded-lg border-2 ml-auto mx-6 text-base border-gray-200 px-8 dark:border-gray-700">
                        <a
                        className="flex items-center self-stretch p-2 text-sm leading-normal text-gray-100 hover:underline"
                        href="something"
                        target="_blank"
                        rel="noreferrer"
                        >Rules
                        </a>
                    </footer>
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