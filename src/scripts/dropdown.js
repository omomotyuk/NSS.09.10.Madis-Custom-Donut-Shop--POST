import API from "./DataManager.js"

/*
    dropdown.js is in charge of creating an populating the dropdowns for our donuts
*/
const dropdown = {
/*
    makeTypesDropDown: () => {
        API.getTypes().then(allTypes => {
            const typeDropdown = document.querySelector("#type-dropdown")
            allTypes.forEach(type => {
                typeDropdown.innerHTML += `<option id="type-${type.id}">${type.name}</option>`
            })
        })
    },
    makeFlavorsDropDown: () => {
        API.getFlavors().then(allFlavors => {
            const flavorDropdown = document.querySelector("#flavor-dropdown")
            allFlavors.forEach(flavor => {
                flavorDropdown.innerHTML += `<option id="flavor-${flavor.id}">${flavor.name}</option>`
            })
        })
    },
    makeGlazesDropDown: () => {
        API.getGlazes().then(allGlazes => {
            const glazeDropdown = document.querySelector("#glaze-dropdown")
            allGlazes.forEach(glaze => {
                glazeDropdown.innerHTML += `<option id="glaze-${glaze.id}">${glaze.name}</option>`
            })
        })
    },
    makeToppingsDropDown: () => {
        API.getToppings().then(allToppings => {
            const toppingDropdown = document.querySelector("#topping-dropdown")
            allToppings.forEach(topping => {
                toppingDropdown.innerHTML += `<option id="topping-${topping.id}">${topping.name}</option>`
            })
        })
    },
*/
    // the DRY-ed version:
    makeInputDropDown: ( input ) => {
        API.getItems( input ).then( allItems  => {
            const dropDown = document.querySelector(`#${input.id}`)
            allItems.forEach( item => {
                dropDown.innerHTML += `<option id="${input.name}-${item.id}">${item.name}</option>`
            })
        })
    }
}

export default dropdown
