// .. means you're going up folders
const Employee = require('../lib/Employee');

test("Can create employee", () => {
    const e = new Employee('test', 13, 'email');
    expect(e.name).toBe('test');
    expect(e.id).toBe(13);
    expect(e.email).toBe('email');
})