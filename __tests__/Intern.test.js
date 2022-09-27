const Intern = require('../lib/Intern');

test("Can create an Intern!", () => {
    const int = new Intern('int', 5, 'email', 'school');
    expect(int.name).toBe('int');
    expect(int.id).toBe(5);
    expect(int.email).toBe('email');
    expect(int.school).toBe('school');
})