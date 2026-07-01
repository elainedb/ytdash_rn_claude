import { isAuthorized, normalizeEmail } from '../auth';

describe('isAuthorized (whitelist)', () => {
  const whitelist = ['Elaine.Batista1105@gmail.com', 'edbpmc@gmail.com'];

  it('admits a whitelisted email (case-insensitive)', () => {
    expect(isAuthorized('edbpmc@gmail.com', whitelist)).toBe(true);
    expect(isAuthorized('EDBPMC@GMAIL.COM', whitelist)).toBe(true);
    expect(isAuthorized(' elaine.batista1105@gmail.com ', whitelist)).toBe(true);
  });

  it('rejects a non-whitelisted email', () => {
    expect(isAuthorized('intruder@example.com', whitelist)).toBe(false);
  });

  it('rejects null / empty', () => {
    expect(isAuthorized(null, whitelist)).toBe(false);
    expect(isAuthorized('', whitelist)).toBe(false);
    expect(isAuthorized('someone@x.com', [])).toBe(false);
  });

  it('normalizes emails', () => {
    expect(normalizeEmail('  A@B.COM ')).toBe('a@b.com');
  });
});
