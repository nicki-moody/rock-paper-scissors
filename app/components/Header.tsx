export default function Header({score} : {score : number}) {
    return (
        <header className="flex flex-row items-start justify-center mt-6 gap-4 w-2/4 rounded-lg border-2 header-outline p-4 dark:border-gray-700">
            <div className="flex text-gray-100 text-3xl font-bold leading-7">
                <img src="/images/logo.svg" alt="Rock Paper Scissors" />
            </div>
            <div className="flex flex-col items-center rounded-lg border-gray-200 p-2 border-2 ml-auto text-gray-100 bg-gray-100">
                <p className="px-8 score-text text-xs">Score</p>
                <p className="dark-text text-6xl font-bold">{score}</p>
            </div>
        </header>
    )
}
