document.addEventListener('DOMContentLoaded', () => {
    console.log('JS Loaded')


    let form = document.querySelector('#form')
    form.addEventListener('submit',handleForm)

    let winningChance = document.querySelector('#winningChance')
    winningChance.addEventListener('input',rangeSlider)
})

const handleForm = function (event) {
    event.preventDefault()
    console.log('HandleForm initated')

    const newListelement = document.createElement('ul')
    newListelement.style.backgroundColor = `${event.target.fighterColor.value}`

    const overAllList = document.querySelector('#fighters-list')
    overAllList.appendChild(newListelement)

    // const newFormElementNameFirst = document.createElement('li')
    // newFormElementNameFirst.textContent = `First Name: ${event.target.nameFirst.value}`
    // newListelement.appendChild(newFormElementNameFirst)

    // const newFormElementNameLast = document.createElement('li')
    // newFormElementNameLast.textContent = `Last Name: ${event.target.nameLast.value}`
    // newListelement.appendChild(newFormElementNameLast)

    // const newFormElementPowerLevel = document.createElement('li')
    // newFormElementPowerLevel.textContent = `Power Level: ${event.target.powerLevel.value}`
    // newListelement.appendChild(newFormElementPowerLevel)

    // const newFormElementRace = document.createElement('li')
    // newFormElementRace.textContent = `Race: ${event.target.race.value}`
    // newListelement.appendChild(newFormElementRace)

    // const newFormWinningChance = document.createElement('li')
    // newFormWinningChance.textContent = `Chance of Winning: ${event.target.winningChance.value}%`
    // newListelement.appendChild(newFormWinningChance)

    addFormItem(`First Name: ${event.target.nameFirst.value}`, newListelement)
    addFormItem(`Last Name: ${event.target.nameLast.value}`, newListelement)
    addFormItem(`Power Level: ${event.target.powerLevel.value}`, newListelement)
    addFormItem(`Race: ${event.target.race.value}`, newListelement)
    addFormItem(`Chance of Winning: ${event.target.winningChance.value}%`, newListelement)

    finalist(event,newListelement)
}

const rangeSlider = (event) => {
    const slider = document.querySelector("#WinningChanceSlider")
    slider.textContent = `${event.target.value}%`
}


const finalist = (event,list) => {
    const newFormfinalist = document.createElement('li')
    const response = document.querySelector('input[type="radio"][name=finalist]:checked').value
    if (response == "yes"){
        newFormfinalist.textContent = `${event.target.nameFirst.value} ${event.target.nameLast.value} has been a previous finalist`

    } else {
        newFormfinalist.textContent = `${event.target.nameFirst.value} ${event.target.nameLast.value} has not been a previous finalist`
    }
    list.appendChild(newFormfinalist)
}

const addFormItem = (text,ulList)=> {
    const newListItem = document.createElement('li')
    newListItem.textContent = text
    ulList.appendChild(newListItem)   
}