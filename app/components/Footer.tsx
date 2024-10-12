import { useState } from "react"
import RulesModal from "./RulesModal"

export default function Footer() {
    const [showModal, setShowModal] = useState<boolean>(false)

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <footer className="rounded-lg border-2 md:ml-auto mx-6 text-base border-gray-200 px-8 dark:border-gray-700">
            <button
                className="flex items-center self-stretch p-2 text-sm leading-normal text-gray-100 hover:underline"
                type="button"
                onClick={toggleModal}
            >Rules
            </button>
            <RulesModal open={showModal} onClose={toggleModal} />    
        </footer>
        
    )
}

