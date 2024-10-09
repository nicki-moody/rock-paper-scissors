import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Rock Paper Scissors" },
    { name: "description", content: "Play the game!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-start justify-center bg-gradient-start uppercase">
      <div className="flex flex-col items-center gap-2 grow">
        <header className="flex flex-row items-start justify-center my-6 gap-4 w-2/4 rounded-lg border-2 header-outline p-4 dark:border-gray-700">
          <div className="flex text-gray-100 text-3xl font-bold leading-7">
            <img src="images/logo.svg" alt="Rock Paper Scissors" />
          </div>
          <div className="flex flex-col items-center rounded-lg border-gray-200 p-2 border-2 ml-auto text-gray-100 bg-gray-100">
            <p className="px-8 score-text text-xs">Score</p>
            <p className="dark-text text-6xl font-bold">12</p>
          </div>
        </header>
        <div className="flex flex-row flex-wrap min-w-80 justify-center items-center bg-game w-96 h-96">
           {choices.map(({ text, icon, placement, outerCircle }) => (
              <div key={icon} className={`flex justify-center ${placement}`}>
                <div className={`${outerCircle} flex rounded-full w-40 h-40 items-center justify-center`}>
                  <div className="flex bg-white rounded-full shadow-md w-32 h-32 items-center justify-center">
                    <img src={icon} alt={text} className="w-15"/>
                  </div>
                </div>
              </div>
           ))}
        </div>
        <div className=" rounded-lg border-2 ml-auto mx-6 text-base border-gray-200 px-8 dark:border-gray-700">
            <a
              className="flex items-center self-stretch p-2 text-sm leading-normal text-gray-100 hover:underline"
              href="something"
              target="_blank"
              rel="noreferrer"
            >Rules
            </a>
        </div>
      </div>
    </div>
  );
}

const choices = [
  {
    text: "Select Paper",
    icon: "images/icon-paper.svg",
    placement: "mr-auto",
    outerCircle: "paper-outer-circle" ,
  },
    {
    text: "Select Scissors",
    icon: "images/icon-scissors.svg",
    placement: "ml-auto",
    outerCircle: "scissors-outer-circle" ,
  },
    {
    text: "Select Rock",
    icon: "images/icon-rock.svg",
    placement: "basis-full",
    outerCircle: "rock-outer-circle" ,
  },
]