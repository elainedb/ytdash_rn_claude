import { isAuthorized } from '../src/domain/auth';

const whitelist = ['elaine.batista1105@gmail.com', 'edbpmc@gmail.com'];

describe('isAuthorized (whitelist)', () => {
  it('accepts an email on the whitelist', () => {
    expect(isAuthorized('edbpmc@gmail.com', whitelist)).toBe(true);
  });

  it('is case-insensitive and trims', () => {
    expect(isAuthorized('  EDBPMC@Gmail.com ', whitelist)).toBe(true);
  });

  it('rejects an email not on the whitelist', () => {
    expect(isAuthorized('deny@example.com', whitelist)).toBe(false);
  });

  it('rejects null/empty', () => {
    expect(isAuthorized(null, whitelist)).toBe(false);
    expect(isAuthorized('', whitelist)).toBe(false);
    expect(isAuthorized('   ', whitelist)).toBe(false);
  });

  it('rejects everything against an empty whitelist', () => {
    expect(isAuthorized('edbpmc@gmail.com', [])).toBe(false);
  });
});
