function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function setBackgroundColorById(Elements){
    const element = document.getElementById(Elements);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getArandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    // console.log(alphabets)

    const alphabetRandom = Math.random()*25;
    const index = Math.round(alphabetRandom);
    const alphabet = alphabets[index];
    return alphabet
}
// function currentAlphabet(elementId){
//     const element = document.getElementById(elementId)
//     const showDisplay = alphabet[element]
//     console.log(showDisplay)
// }