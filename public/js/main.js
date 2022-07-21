document.querySelector('#calculateCartridges').addEventListener('click', calculate)

function calculate(){
    const casingsPerPound = {
        '.380': 145,
        '9mm': 117,
        '38spl': 102,
        '.357mag': 89,
        '40sw': 100,
        '.45acp': 78,
        '10mm': 96,
        '.38super': 104,
        '.223': 73,
        '308': 40,
        '.30-06': 35,
        '7.62x39': 54,
        '.30-30': 52,
        '50bmg': 8
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
    document.querySelector('#finalNum').innerText =`You can load ${materials.sort((a, b) => a - b)[0]} cartridges`

}






/////MISC NOTES//////
//ideas on how to organize the fields
// have it broken out into sections like 'my materials' that could be an object with the prop/values being the input values
//another section could be cartridge-specific details. these would be the amount of powder used (grains) and the case choice from the dropdown

