interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RulesModal(props: ModalProps) {
    const display = props.open ? "block" : "hidden"
    return (
        <div id="rules-modal" className={`${display} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className="flex flex-col w-2/6 text-center justify-center items-center bg-white rounded-lg shadow-lg">
                <div className="flex flex-row w-full text-center p-6 items-center justify-center">
                    <h2 className="text-2xl mr-auto font-bold">Rules</h2>
                    <button type="button" className="text-gray-300  " onClick={props.onClose}>
                        <img src="/images/cross-close.svg" className="w-8" alt="Close Rules" />
                    </button>
                </div>
                <div className="p-8"><img src="/images/image-rules.svg" alt="Rules of the game" /></div>
            </div>
        </div>
    );
}