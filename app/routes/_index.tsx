import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import Footer from "~/components/footer";

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
        <Header />
        <div className="flex flex-row flex-wrap min-w-80 justify-center items-center bg-game w-96 h-96">
           {choices.map(({ choice, text, icon, placement, outerCircle }) => (
              <div key={choice} className={`flex justify-center ${placement}`}>
                <a href={`/choices/${choice}`} key={choice}>
                  <div className={`${outerCircle} flex rounded-full w-40 h-40 items-center justify-center`}>
                    <div className="flex bg-white rounded-full shadow-md w-32 h-32 items-center justify-center">
                      <img src={icon} alt={text} className="w-15"/>
                    </div>
                  </div>
                </a>
              </div>
           ))}
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