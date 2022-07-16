document.querySelector('#calculateCartridges').addEventListener('click', changeColor)

function changeColor(){
    document.querySelector('body').style.background = 'blue'
}


//ideas on how to organize the fields
// have it broken out into sections like 'my materials' that could be an object with the prop/values being the input values
//another section could be cartridge-specific details. these would be the amount of powder used (grains) and the case choice from the dropdown

