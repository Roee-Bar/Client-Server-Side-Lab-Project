// sign_up.test.js

const { validateEmail, validatePassword, validatePasswordMatch } = require('./signup');

describe('Sign Up Page - validateEmail function', () => {
  test('valid email returns true', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(validateEmail('invalidemail')).toBe(false);
  });
});

describe('Sign Up Page - validatePassword function', () => {
  test('valid password returns true', () => {
    expect(validatePassword('Abc@123')).toBe(true);
  });

  test('invalid password returns false', () => {
    expect(validatePassword('weakpassword')).toBe(false);
  });
});

describe('Sign Up Page - validatePasswordMatch function', () => {
  test('matching passwords return true', () => {
    expect(validatePasswordMatch('Abc@123', 'Abc@123')).toBe(true);
  });

  test('non-matching passwords return false', () => {
    expect(validatePasswordMatch('Abc@123', 'Abc@1234')).toBe(false);
  });
});
