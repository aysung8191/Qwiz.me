import { useState } from "react"

export default function NewFlashcardForm({addFlashcard, user}) {
    const [newFlashcardData, setNewFlashcardData] = useState('')

    function handleClick(e) {
        const newFlashcard = {
            text: newFlashcardData,
            user: user
        }
        addFlashcard(newFlashcard)
        setNewFlashcardData('')
    }

    return (
        <div>
            <input value={newFlashcardData} type="text" onChange={(e) => setNewFlashcardData(e.target.value)}></input>
            <button onClick={handleClick} type="submit">Add Flashcard</button>
        </div>
    )
}