import { useState } from "react"
import RulesModal from "./RulesModal"

export default function Footer() {
    const [showModal, setShowModal] = useState<boolean>(false)

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <footer className="rounded-lg border-2 sm:ml-auto mx-6 text-base border-gray-200 px-8">
            <button
                className="flex items-center uppercase self-stretch p-2 text-base sm:text-sm leading-normal text-gray-100 hover:underline"
                type="button"
                onClick={toggleModal}
            >Rules
            </button>
            <RulesModal open={showModal} onClose={toggleModal} />    
        </footer>
        
    )
}

