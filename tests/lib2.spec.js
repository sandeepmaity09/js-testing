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
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');


        // Ideal Way : Balanced Way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
    })
})

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        // expect(result).toBe({id: 1, price: 10}); // toBe Matches refreneces
        expect(result).toEqual({ id: 1, price: 10 });  // check exect same even protos
        expect(result).toMatchObject({ id: 1, price: 10 });

        expect(result).toHaveProperty('id', 1);  // type of data for key's value matter
    })
})

describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        // Falsy Values :- undefined, null, '', 0, false, "", NaN

        // const result = lib.registerUser(null);
        // expect(result).toThrow();

        // We can't expect a result here cause this will throw error

        // expect(() => { lib.registerUser(null) }).toThrow();
    
        // sometimes the test functions maybe few lines long in that case 
        // you can use parameterized test. NOT SUPPORTED BY JEST

        // Alternative Method
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();            
        })
    });

    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser("Sandeep");
        expect(result).toMatchObject({username: "Sandeep"})
        expect(result.id).toBeGreaterThan(0);
    })
})