import pad from '..';

describe('Test pad function', () => {
  it('should add 0 to number 0-9', () => {
    expect(pad('0')).toBe('00');
    expect(pad('1')).toBe('01');
    expect(pad('2')).toBe('02');
    expect(pad('3')).toBe('03');
    expect(pad('4')).toBe('04');
    expect(pad('5')).toBe('05');
    expect(pad('6')).toBe('06');
    expect(pad('7')).toBe('07');
    expect(pad('8')).toBe('08');
    expect(pad('9')).toBe('09');
  });
  it('should not add 0 to number > 10', () => {
    expect(pad('10')).toBe('10');
    expect(pad('21')).toBe('21');
    expect(pad('42')).toBe('42');
    expect(pad('36')).toBe('36');
    expect(pad('14')).toBe('14');
  });
});
