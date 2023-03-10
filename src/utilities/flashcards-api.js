import sendRequest from './send-request';

const BASE_URL = '/api/flashcards';

export async function getUserFlashcards() {
    return sendRequest(`${BASE_URL}`);
}

export async function addFlashcard(flashcard) {
    return sendRequest(`${BASE_URL}`, 'POST', {flashcard});
}