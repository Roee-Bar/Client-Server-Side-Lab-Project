// login.test.js

const { validateEmail, validatePassword } = require('./login');

describe('Login Page - validateEmail function', () => {
  test('valid email returns true', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(validateEmail('invalidemail')).toBe(false);
  });
});

describe('Login Page - validatePassword function', () => {
  test('valid password returns true', () => {
    expect(validatePassword('Abc@123')).toBe(true);
  });

  test('invalid password returns false', () => {
    expect(validatePassword('weakpassword')).toBe(false);
  });
});
