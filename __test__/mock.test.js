const mocker = require("../mock");

test("Mock Function", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker('yazan')).toBe('Hello yazan');
    expect(mocker('moh')).toBe('Hello moh');
    expect(mocker('kad')).toBe('Hello kad');
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    expect(mocker).toHaveBeenCalledWith('yazan');
    expect(mocker).toHaveBeenLastCalledWith('kad');
})