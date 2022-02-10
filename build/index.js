"use strict";
// const myFunc = (num:number) => {
//     return num * num;
//  };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export default myFunc 
// asynchronous testing and axios in npm
const axios_1 = __importDefault(require("axios"));
function getCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://restcountries.com/v3.1/all');
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getCountryByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://restcountries.com/v3.1/name/${name}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getCountryByContinent(continent) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://restcountries.com/v3.1/region/${continent}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function getCountryBySubregion(subregion) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://restcountries.com/v3.1/subregion/${subregion}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
    });
}
getCountries();
getCountryByName('Nigeria');
getCountryBySubregion('South America');
getCountryByContinent('Africa');
exports.default = {
    getCountries,
    getCountryByName,
    getCountryBySubregion,
    getCountryByContinent,
};
