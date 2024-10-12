interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RulesModal(props: ModalProps) {
    const display = props.open ? "block" : "hidden"
    return (
        <div id="rules-modal" className={`${display} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className="flex flex-col w-full md:w-2/6 md:absolute h-full md:h-auto text-center justify-around items-center bg-white rounded-lg shadow-lg">
                <div className="flex flex-row w-full text-center items-center justify-center px-6">
                    <h2 className="text-2xl md:mr-auto md:mt-6 font-bold">Rules</h2>
                </div>
                <div className="flex flex-row items-center p-8">
                    <img src="/images/image-rules.svg" alt="Rules of the game" />
                </div>
                <button type="button" className="text-gray-300 md:p-6 md:absolute md:top-0 md:right-0 " onClick={props.onClose}>
                    <img src="/images/cross-close.svg" className="w-8" alt="Close Rules" />
                </button>
            </div>
        </div>
    );
}