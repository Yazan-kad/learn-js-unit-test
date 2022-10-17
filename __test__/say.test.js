const say =  require('../say');

test("say hello", () => {
    expect(say()).toBe("Hello Jest")
}) ;