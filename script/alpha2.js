// function play(){
//     const homeScreen = document.getElementById('home-screen1');
//     const classList = homeScreen.classList.add('hidden')

//     console.log(classList)
// }

// add current-alphabet in screen
function currentAlphabetElement(elementId){
    const currectAlphabetElementKey = elementId.key
 
    if(currectAlphabetElementKey ==='Escape'){
        ScoreSection()
    }
    // console.log(currectAlphabetElementKey)
    const currentAlphabetKey = document.getElementById('current-alphabet')
    const alphabetInnerText = currentAlphabetKey.innerText
    // console.log(alphabetInnerText)
    const alphabetLowerCase = alphabetInnerText.toLocaleLowerCase()
    // console.log(alphabetLowerCase)

    if(currectAlphabetElementKey === alphabetLowerCase){
        const currectScore = getElementById('current-score')
        const updatedScore = currectScore + 1
        setElementById('current-score', updatedScore)
        


        // const currentScore = document.getElementById('current-score')
        // const getCurrentScoreInnerText = currentScore.innerText;
        // const newScoreInteser = parseInt(getCurrentScoreInnerText)
        // const newPoint = newScoreInteser + 1
        // currentScore.innerText = newPoint;
        // console.log(newPoint)
        // console.log('get a point')
        removeBackgroundColor(alphabetLowerCase)
        continuePlay()
        
    }
    else{
        const currectLife = getElementById('current-life')
        const updatedLife = currectLife - 1
        setElementById('current-life', updatedLife)


        // ------------------
        // const currectLife = document.getElementById('current-life')
        // const getCurrentLifeInnerText = currectLife.innerText;
        // const lifeInteser = parseInt(getCurrentLifeInnerText)
        // const newPoint = lifeInteser - 1
        // currectLife.innerText = newPoint
        if(currectLife === 0){
            ScoreSection()
            continuePlay()
            removeBackgroundColor(alphabetLowerCase)
            // const gameOver = document.getElementById('current-alphabet')
            // gameOver.innerText = 'Game Over'
            // hideElementById('play-ground2')
            // showElementById('home-screen1')
            // removeBackgroundColor(alphabetLowerCase)
        }
        // console.log(newPoint)
        // console.log('lost your point')
    }
//    const playerPressed = elementId.key
//    console.log(playerPressed)
//     const currectAlphabet = document.getElementById('current-alphabet')
//     const setInnerText = currectAlphabet.innerText
//     const alphabetLowerCase = setInnerText.toLocaleLowerCase()
//     console.log(alphabetLowerCase)
}
// keyup set
document.addEventListener('keyup', currentAlphabetElement)

function ScoreSection(){
    const gameOver = document.getElementById('Game-over')
    gameOver.classList.remove('hidden')
    // console.log(gameOver)
    hideElementById('play-ground2')

    const finalScore = getElementById('current-score')
    // console.log(finalScore)
    setElementById('game-score', finalScore)
    // const gameScore = document.getElementById('game-score')
    // gameScore.innerText
    // console.log(gameScore)
    // const currectScore = document.getElementById('current-score');
    // currectScore.innerText
    // console.log(currectScore)
    // gameScore.add(currectScore)
    
}
function continuePlay(){
    const alphabet = getetRandomAlphaber()
    // console.log(alphabet)

    // set alphabet on screen
    const alphabetScreen = document.getElementById('current-alphabet');
    alphabetScreen.innerText = alphabet;
    setBackgroundColor(alphabet)
}

function play(){
    hideElementById('home-screen1')
    // hideElementById('Game-over')
    showElementById('play-ground2')
    continuePlay()
}

// play again onclick function
function playAgain(){
    hideElementById('Game-over')
    showElementById('play-ground2')
    setElementById('current-score', 0)
    setElementById('current-life', 5)
    
    
}