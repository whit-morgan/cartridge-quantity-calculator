
//test that the file is properly linked to the index.html
document.querySelector('#calculateCartridges').addEventListener('click', calculate)



// let myMaterials = {
//     bulletAmount : document.querySelector('#bulletAmt').value,

// }
function calculate(){
    let bulletAmount = Number(document.querySelector('#bulletAmt').value)
    let primerAmount = Number(document.querySelector('#primerAmt').value)
    let casingAmount = Number(document.querySelector('#casingAmt')).value
    let powderAmout = Number(document.querySelector('#powderAmt')).value
    let powderUsed = Number(document.querySelector('#powderUsed')).value
    let chooseCase = document.querySelector('#chooseCase').value
    console.log(chooseCase)
}

function changeColor(){
    document.querySelector('body').style.background = 'blue'
}
//ideas on how to organize the fields
// have it broken out into sections like 'my materials' that could be an object with the prop/values being the input values
//another section could be cartridge-specific details. these would be the amount of powder used (grains) and the case choice from the dropdown

