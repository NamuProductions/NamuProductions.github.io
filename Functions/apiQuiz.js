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
                const question = document.createElement('h1');
                question.textContent = result.question;
                apiQuizContainer.appendChild(question);
            })
            apiQuizContainer.style.display='block';


            
        })
    return apiQuizContainer;
}