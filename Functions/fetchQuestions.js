export async function fetchQuestions() {
    const numberOfQuestions = 3;
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=10&difficulty=easy&type=multiple`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data.results;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}
