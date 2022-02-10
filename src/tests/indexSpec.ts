

import countries from "../index";


describe("fetch countries using axios", ()=> {
    it('should fetch all countries', async () => {
        const result = await countries.getCountries();
        expect(result.length).toEqual(250);
        // expect(result).toBeDefined();
        //  expect(result).toBeInstanceOf(Array)
        //console.log(result);
         
    })
    it('should fetch country by name',async () => {
        const result = await countries.getCountryByName('Nigeria');
        expect(result).toBeInstanceOf(Array)
        
    })
    it('should fetch country by subregion',async () => {
        const result = await countries.getCountryBySubregion('South America');
        expect(result).toBeInstanceOf(Array)
        
    })
    it('should fetch country by continent',async () => {
        const result = await countries.getCountryByContinent('Africa');
        expect(result).toBeInstanceOf(Array)
        
    })
})

 