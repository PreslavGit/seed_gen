class AddressGen{
    addressValues = {
        'bulgaria': [
            '26 Vasil Levski Str., Sofia 1000',
            '15 Nikola Vaptsarov Str., Plovdiv 4000',
            '3 Hristo Botev Str., Varna 9000',
            '10 Ivan Asen II Str., Burgas 8000',
            '7 Khan Krum Str., Ruse 7000'
        ],
        'uk': [
            '10 Downing Street, London SW1A 2AA',
            '221B Baker Street, London NW1 6XE',
            '2 Kensington Palace Gardens, London W8 4QB',
            '33 Dysart St., London EC2A 2BX',
            '133 Marylebone Road, London NW1 5PS'
        ],
        'usa': [
            '1600 Pennsylvania Ave NW, Washington, DC 20500',
            '1 Liberty Island, New York, NY 10004',
            '1350 Pennsylvania Avenue, NW, Washington, DC 20230',
            '555 California St, San Francisco, CA 94104',
            '160 Spear St, San Francisco, CA 94105',
        ],
        'germany': [
            'Brandenburger Tor 1, 10117 Berlin',
            'Auguststraße 11-13, 10117 Berlin',
            'Unter den Linden 77, 10117 Berlin',
            'Friedrichstraße 43-45, 10117 Berlin',
            'Alexanderstraße 11, 10178 Berlin'
        ]
    }

    getRandomValue(): string {
        let country = this.getRandomCountry()
        return this.getAddressByCountry(country);
    }

    private getRandomCountry(): keyof typeof this.addressValues {
        let keys = Object.keys(this.addressValues)

        let rndCountry = Math.floor(Math.random() * keys.length);
        return keys[rndCountry] as keyof typeof this.addressValues
    }

    getAddressByCountry(country: keyof typeof this.addressValues): string {
        let rndNumber = Math.floor(Math.random() * this.addressValues[country].length)

        return this.addressValues[country][rndNumber]
    }
}

let addressGen = new AddressGen()
export {addressGen}