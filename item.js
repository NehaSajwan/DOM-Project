export default class Item {
    constructor(country){
        this.country = country
    }
    render(root){
        //parent div
        let parentdiv = document.createElement("div")
        parentdiv.className = "col-3 mt-4"

        //card div
        let carddiv = document.createElement("div")
        carddiv.className = "card"


        //img
        let img = document.createElement("img")
        img.className = ("card-img-top")
        img.src = this.country.flags.svg
        img.alt = "country"

        //cardbody
        let card = document.createElement("div")
        card.className = ("card-body")

        //h5
        let heading = document.createElement("h5")
        heading.className = ("card-title")
        heading.innerText = this.country.name.common

        //append to card
        card.append(heading)

        //append to carddiv
        carddiv.append(img)
        carddiv.append(card)

        //append to parentdiv
        parentdiv.append(carddiv)

        //append to root
        root.append(parentdiv)
    }
  
}

