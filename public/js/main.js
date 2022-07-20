document.querySelector('#calculateCartridges').addEventListener('click', calculate)

function calculate(){
    const casingsPerPound = {
        '9mm': 117,
        '40sw': 100
    }

    //values pulled from the html form set into variables
    let bulletAmount = Number(document.querySelector('#bulletAmt').value)
    let primerAmount = Number(document.querySelector('#primerAmt').value)
    let casingAmount = Number(document.querySelector('#casingAmt').value)
    let powderAmount = Number(document.querySelector('#powderAmt').value) * 7000
    let powderUsed = Number(document.querySelector('#powderUsed').value)
    let chooseCase = document.querySelector('#chooseCase').value

    //calculated variables for powder and casings
    let totalPowder = powderAmount / powderUsed
    let totalCasings = Math.round(casingsPerPound[chooseCase] * casingAmount)

    //put all the elements in an array and sorted to see the lowest number. the lowest number is the max number of loads that can be made
    let materials = [bulletAmount, primerAmount, totalPowder, totalCasings]
    
    console.log(materials)

    //display the max number of makeable cartridges in the dom
    document.querySelector('#finalNum').innerText = materials.sort((a, b) => a - b)[0]
}






/////MISC NOTES//////
//ideas on how to organize the fields
// have it broken out into sections like 'my materials' that could be an object with the prop/values being the input values
//another section could be cartridge-specific details. these would be the amount of powder used (grains) and the case choice from the dropdown

