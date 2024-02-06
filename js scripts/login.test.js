// login.test.js

const { validateEmail, validatePassword } = require('./login');

// Test validateEmail function
test('Valid email returns true', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('Invalid email returns false', () => {
  expect(validateEmail('invalid-email')).toBe(false);
});

// Test validatePassword function
test('Valid password returns true', () => {
  expect(validatePassword('StrongPwd1!')).toBe(true);
});

test('Invalid password returns false', () => {
  expect(validatePassword('weakpwd')).toBe(false);
});
