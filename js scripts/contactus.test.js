// contact_us.test.js

const { validateContact, validateEmail, contactSupport } = require('./contactus');

describe('Contact Us Page - validateContact function', () => {
  test('valid name returns true', () => {
    expect(validateContact('John Doe')).toBe(true);
  });

  test('empty name returns false', () => {
    expect(validateContact('')).toBe(false);
  });
});

describe('Contact Us Page - validateEmail function', () => {
  test('valid email returns true', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('invalid email returns false', () => {
    expect(validateEmail('invalidemail')).toBe(false);
  });
});

describe('Contact Us Page - contactSupport function', () => {
  test('valid subject returns true', () => {
    expect(contactSupport('Support')).toBe(true);
  });

  test('empty subject returns false', () => {
    expect(contactSupport('')).toBe(false);
  });
});
