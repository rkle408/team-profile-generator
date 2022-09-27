const Manager = require('../lib/Manager');

test("Can create a Manager!", () => {
    const mana = new Manager('mana', 8, 'email', 'officeNumber');
    expect(mana.name).toBe('mana');
    expect(mana.id).toBe(8);
    expect(mana.email).toBe('email');
    expect(mana.officeNumber).toBe('officeNumber');
})