const lib = require('../lib');

describe('absolute', () => {
    it('absolute - should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })
    
    
    it('absolute - should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })
    
    it('absolute - should return a 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
})

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Sandeep');
        // expect(result).toBe('Welcome Sandeep');
        expect(result).toMatch(/Sandeep/);
        expect(result).toContain('Sandeep');
    })


    it('should return the greeting message', () => {
        const result = lib.greet('Sandeep');
        expect(result).toContain('Sandeep');
    })
})

describe('getCurriencies', () => {
       it('should return supported curriencies', () => {
           const result = lib.getCurrencies();
           
           // Too General
           expect(result).toBeDefined();

           // Too General
           expect(result).not.toBeNull();

           // Too Specific
           expect(result[0]).toBe('USD');
           expect(result[1]).toBe('AUD');
           expect(result[2]).toBe('EUR');

           // Don't look for specific position in the array


           // Too Specific
           expect(result.length).toBe(3);

           // Will Break if add more elements in array



           // PROPER WAY
           
       }) 
})