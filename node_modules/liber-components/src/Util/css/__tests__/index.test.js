import { generateMinMax, disableOnTest } from '..';

describe('Test css functions', () => {
  describe('generateMinMax()', () => {
    it('should return css values for width', () => {
      expect(generateMinMax('width', '40px')).toMatchSnapshot();
    });
    it('should return css values for height', () => {
      expect(generateMinMax('height', '40px').join('')).toMatchSnapshot();
    });
  });

  describe('disableOnTest()', () => {
    it('should not return css when testing', () => {
      expect(disableOnTest`css test`).toEqual(null);
    });

    it('should return css on any other case', () => {
      const { env } = process;

      jest.resetModules();
      process.env = { ...env };
      delete process.env.NODE_ENV;

      process.env.NODE_ENV = 'development';
      expect(disableOnTest`css test`).toContain('css test');
      process.env = env;
    });
  });
});
