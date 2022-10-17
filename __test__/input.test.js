const thefilter = require('../input');

describe("Validate The Input Filed", () => {
    test("Check If Name Is Empty", () => {
        expect(thefilter()).toBe("Unknown");
    });
    test("Check If Name Has Space", () => {
        expect(thefilter(" yazan ")).toBe("yazan");
    });
    test("Check If Name lenght > 10", () => {
        expect(thefilter("yazan_moh_kadash")).toBe("yazan_moh_");
    });
    test("Check If Name lenght > 10", () => {
        expect(thefilter("_yazan")).toBe("yazan");
    });
})