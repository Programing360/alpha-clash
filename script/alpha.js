// function play(){
//     const homeScreen  = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')

//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')

// }

function currentAlphabetElement(element){
    // console.log(element.key)
    const playerPressed = element.key;

    const currentAlphabet = document.getElementById('current-alphabet')
    const alphabetElement = currentAlphabet.innerText;
    const alphabetLowerCase = alphabetElement.toLocaleLowerCase()

    console.log(alphabetElement)

    if(playerPressed === alphabetLowerCase){
        console.log('you get a point')
        const currentScoreElement = document.getElementById('current-score');
        const currectScore = currentScoreElement.innerText;
        const currectElementScore = parseInt(currectScore);

        // new score crerate
        const newScore = currectElementScore + 1
        // new score add
        currentScoreElement.innerText = newScore


        console.log('you have pressed currect', alphabetLowerCase )
        removeBackgroundColorById(alphabetLowerCase)
        continuePlay()
    }
    else{
        console.log('you lost a life')
    }
}
document.addEventListener('keyup', currentAlphabetElement);


function continuePlay(){
    const alphabet = getArandomAlphabet();
    console.log(alphabet)

    // get element on display(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    // const alphabetValue = currentAlphabetElement.innerText
    
    // const setAlphabet = alphabetValue[alphabet]
    currentAlphabetElement.innerText = alphabet
    // return alphabetValue
    // console.log('result',alphabetValue)
    setBackgroundColorById(alphabet)
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground')
    continuePlay()
}