// const myFunc = (num:number) => {
//     return num * num;
//  };

// export default myFunc 


// asynchronous testing and axios in npm

import axios from 'axios';


async function getCountries(){
try {

    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
    
} catch (error) {

    console.error(error)
    
}
}

async function getCountryByName(name: string){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
        return response.data
    } catch (error) {
        console.error(error)        
    }
}

async function getCountryByContinent(continent: string){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`)
        return response.data
    } catch (error) {
        console.error(error)        
    }
}
async function getCountryBySubregion(subregion: string){
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/subregion/${subregion}`)
        return response.data
    } catch (error) {
        console.error(error)        
    }
}

getCountries();
getCountryByName('Nigeria')
getCountryBySubregion('South America')
getCountryByContinent('Africa')



export default {
    getCountries,
    getCountryByName,
    getCountryBySubregion,
    getCountryByContinent,
}