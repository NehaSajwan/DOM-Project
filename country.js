 import Item from "./item.js"
 export  default class Countries {
    static countries = []
    static getCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all')
        this.countries = await response.json()
    }
    static render = async () => {
        await this.getCountries()
        let root = document.getElementById("root")

        for (const country of this.countries) {
            let item=new Item(country)
            item.render(root)
        }

    }
}