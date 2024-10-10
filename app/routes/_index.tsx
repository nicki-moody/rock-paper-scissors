import type { MetaFunction } from "@remix-run/node";
import { useOutletContext, Link } from "@remix-run/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {choices} from "~/utils/choices";
import { ScoreOutletContext } from "~/utils/game";


export const meta: MetaFunction = () => {
  return [
    { title: "Rock Paper Scissors" },
    { name: "description", content: "Play the game!" },
  ];
};

export default function Index() {
  const { score } = useOutletContext<ScoreOutletContext>();

  return (
    <div className="flex h-screen items-start justify-center bg-gradient-start uppercase">
      <div className="flex flex-col items-center gap-2 grow">
        <Header score={score}/>
        <div className="flex flex-row flex-wrap min-w-80 justify-center items-center bg-game w-96 h-96">
           {choices.map(({ choice, text, icon, placement, outerCircle, outerCircleHighlight}) => (
              <div key={choice} className={`flex justify-center ${placement}`}>
                  <Link key={choice} to={`/choices/${choice}`} className={`${outerCircle} ${outerCircleHighlight} flex rounded-full w-40 h-40 items-center justify-center`}>
                    <div className="flex bg-white rounded-full shadow-inner-strong w-32 h-32 items-center justify-center">
                      <img src={icon} alt={text} className="w-15"/>
                    </div>
                  </Link>
              </div>
           ))}
        </div>
       <Footer />
      </div>
    </div>
  );
}