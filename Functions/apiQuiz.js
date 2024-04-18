export function apiQuiz (){
    const apiQuizContainer = document.createElement('div');
    apiQuizContainer.classList.add('container1');

    fetch('https://opentdb.com/api.php?amount=10&category=9')
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok');
        })
        .then(data=>{
            const results = data.results;
            results.forEach(result=>{
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');

                const question = document.createElement('h1');
                question.textContent = result.question;
                questionContainer.appendChild(question);

                const options = result.incorrect_answers.concat(result.correct_answer);
                options.sort(() => Math.random() - 0.5);
                options.forEach(option => {
                    const optionButton = document.createElement('button');
                    optionButton.textContent = option;
                    optionButton.classList.add('option-button');
                    optionButton.addEventListener('click', () => {

                        console.log('Clicked option:', option);

                    });
                    questionContainer.appendChild(optionButton);
                });

                apiQuizContainer.appendChild(questionContainer);
            })
            apiQuizContainer.style.display='block';
        })
    return apiQuizContainer;
}
