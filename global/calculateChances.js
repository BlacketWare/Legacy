/* coded 99% by tremblero */
try {
    let element = prompt('What element are you trying to get?').toLowerCase()
    let amt = prompt('How many crates are you opening?')
    let amount = prompt('How many are you aiming for?')
    let chance = elementList[element]['chance']
    alert('Press OK to calculate')

    let calculation = chance * amt
    alert('You have a ' + calculation + '% chance to get at least one ' + element + '. (Press OK to continue)')
    console.log('You have a ' + calculation + '% chance to get atleast one ' + element + '.')
    alert('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
    console.log('You have a ' + (calculation / amount) + '% chance to get ' + amount + ' ' + element + '.')
} catch (e) {
    console.log('An erorr has occured')
    alert('An error has occured')
}
