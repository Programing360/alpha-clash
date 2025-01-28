function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// set back ground colour
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
// remove backgrund Colour
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}
function getElementById(elementId){
    const element = document.getElementById(elementId)
    const value = element.innerText;
    const values = parseInt(value)
    return values;
}
function setElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value
    
}
function getetRandomAlphaber(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabets.split('');
    const alphabetMathRandom = Math.random()*25;
    const alphabetMathRounded = Math.round(alphabetMathRandom);
    const alphabet = alphabetArray[alphabetMathRounded]
    return alphabet;
    


}