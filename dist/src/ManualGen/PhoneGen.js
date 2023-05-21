"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneGen = void 0;
class PhoneGen {
    constructor() {
        this.phoneValues = {
            "bulgaria": ["+359878123456", "+359889654321", "+359884111222", "+359878239681", "+359882949398"],
            "germany": ["+4915112345678", "+4915219876543", "+4915112345678", "+4915219876543", "+4917623456789"],
            "uk": ["+447912345678", "+441632987654", "+447700123456", "+441614987654", "+447931234567"],
            "usa": ["+12125551234", "+12015559739", "+13105551212", "+18188552787", "+19175007211"]
        };
    }
    getRandomValue() {
        let country = this.getRandomCountry();
        return this.getAddressByCountry(country);
    }
    getRandomCountry() {
        let keys = Object.keys(this.phoneValues);
        let rndCountry = Math.floor(Math.random() * keys.length);
        return keys[rndCountry];
    }
    getAddressByCountry(country) {
        let rndNumber = Math.floor(Math.random() * this.phoneValues[country].length);
        return this.phoneValues[country][rndNumber];
    }
}
let phoneGen = new PhoneGen();
exports.phoneGen = phoneGen;
