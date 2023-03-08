import { checkToken } from '../../utilities/users-service'
import Flashcard from '../Flashcard/Flashcard'

export default function FlashcardList({ flashcards }) {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <div className="card-grid">
                {flashcards.map(flashcard => {
                    return <Flashcard flashcard={flashcard} key={flashcard.id} />
                })}
            </div>
        </>
    )
}