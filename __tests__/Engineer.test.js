const { expect } = require('expect');
const Engineer = require('../lib/Engineer');

test("Can create an Engineer!", () => {
    const eng = new Engineer('eng', 3, 'email', 'githubName');
    expect(eng.name).toBe('eng');
    expect(eng.id).toBe(3);
    expect(eng.email).toBe('email');
    expect(eng.github).toBe('githubName');
})