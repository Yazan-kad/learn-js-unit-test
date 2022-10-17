const allData = require('../all');


test("Check If arrray Contains 6 Element first Method", () => {
    expect(allData.length).toBe(6);
});
test("Check If arrray Contains 6 Element Second Method", () => {
    expect(allData).toHaveLength(6);
});
test("Check If arrray Contains Number 3", () => {
    expect(allData).toContain(3);
});
test("Check If arrray Not Contains Number 7", () => {
    expect(allData).not.toContain(7);
});

test("Check If arrray Not Contains Number 0", () => {
    for (i = 0; i < allData.length; i++) {
        expect(allData[i]).not.toBe(0);
    }
});

test("Check If arrray Contains only Numbers First Method", () => {
    for (i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).toBe(false);
    }
});

test("Check If arrray Contains only Numbers Second Method", () => {
    for (i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).toBeFalsy();
    }
});

test("Check If arrray Contains only Numbers Third Method", () => {
    for (i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).not.toBeTruthy();
    }
});

test("Check If arrray First Element Is Larger or Equal Than 1", () => {
        expect(allData[0]).toBeGreaterThanOrEqual(1);
});
test("Check If arrray First Element Is less Than 5", () => {
        expect(allData[0]).toBeLessThan(5);
});

test("Check For Undefined", () => {
    let a ;
        expect(a).toBeUndefined();
});

test("Check For Substring inside String By RegExp", () => {
    let myString = 'I Will Do It' ;
        expect(myString).toMatch(/Will/);
});

test("Check For Property Age", () => {
    let myObject = {
        name : 'yazan',
        age: '23'
    }
        expect(myObject).toHaveProperty('age');
});

test("Check For Property Age value 23", () => {
    let myObject = {
        name : 'yazan',
        age: 23
    }
        expect(myObject).toHaveProperty('age', 23);
});

//======================Matchers=========================
expect.extend({
    toBeLargerThan(received, target) {
        const pass = received > target;
        if(pass) {
            return {
                message: () => `Expected ${received} To Be Larger Than ${target}`,
                pass: true
            }
        } else {
            return {
                message: () => `Error: Expected ${received} To Be Larger Than ${target}`,
                pass: false
            }
        }
    }
});

test("Check If Number Is Larger Than Other NUmber", ()=> {
    expect(10).toBeLargerThan(8)
});


expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if(pass) {
            return {
                message: () => `Expected ${received} To Be Between ${start} And ${end}`,
                pass: true
            }
        } else {
            return {
                message: () => `Not Expected ${received} To Be Between ${start} And ${end}`,
                pass: false 
            }
        }
    }
});

test("Check If Number Between", () => {
    expect(1990).toBeBetween(1980,2000)
});

//expect.anything() => Anything But null and undefined
test("Expect Anything ", () => {
    expect('yazan').toEqual(expect.anything());
    expect(1).toEqual(expect.anything());
    expect([1, 2, 3]).toEqual(expect.anything());
});

//expect.any(constructer)
test("Expect any constructer ", () => {
    expect('yazan').toEqual(expect.any(String));
});

//expect.arrayContaining(array)
test("Expect Array To Br Found In The Main Array", () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(myArray).toEqual(expect.arrayContaining([1, 4, 2 ]));
});