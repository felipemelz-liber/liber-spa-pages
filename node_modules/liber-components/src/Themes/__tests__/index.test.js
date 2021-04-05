import { handleTheme, handleThemeFromObject } from '..';

describe('Test HandleTheme function', () => {
  it('should return prop first', () => {
    const result = handleTheme('theme', 'default', 'prop');
    expect(result).toBe('prop');
  });
  it('should return theme second', () => {
    const result = handleTheme('theme', 'default', null);
    expect(result).toBe('theme');
  });
  it('should return default last', () => {
    const result = handleTheme(null, 'default', null);
    expect(result).toBe('default');
  });
  describe('Arrays', () => {
    it('should return prop first', () => {
      const result = handleTheme(['theme'], ['default'], ['prop']);
      expect(result).toEqual(['prop']);
    });
    it('should return theme second', () => {
      const result = handleTheme(['theme'], ['default'], null);
      expect(result).toEqual(['theme']);
    });
    it('should return default last', () => {
      const result = handleTheme(null, ['default'], null);
      expect(result).toEqual(['default']);
    });
  });
});

describe('Test HandleThemeFromObject function', () => {
  const theme = {
    key: {
      nested: 'value',
      array: ['value'],
    },
  };

  it('should return value from theme by key', () => {
    const result = handleThemeFromObject(theme, 'key.nested');
    expect(result).toBe('value');
  });
  it('should return empty when key does not exist', () => {
    const result = handleThemeFromObject(theme, 'key.deeply.nested');
    expect(result).toBe(undefined);
  });
  it('should return default prop when key does not exist', () => {
    const result = handleThemeFromObject(theme, 'key.deeply.nested', 'default');
    expect(result).toBe('default');
  });
  describe('Array', () => {
    it('should return value from theme by key', () => {
      const result = handleThemeFromObject(theme, 'key.array');
      expect(result).toEqual(['value']);
    });
    it('should return default prop when key does not exist', () => {
      const result = handleThemeFromObject(theme, 'key.deeply.nested', ['default']);
      expect(result).toEqual(['default']);
    });
  });
});
