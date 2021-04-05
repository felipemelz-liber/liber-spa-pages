import media from '..';

describe('Test pad function', () => {
  it('should return a media template for the small screen', () => {
    expect(media.small`css`.join('')).toContain('@media');
    expect(media.small`css`.join('')).toContain('576px');
    expect(media.small`css`.join('')).toContain('css');
  });
  it('should return a media template for the medium screen', () => {
    expect(media.medium`css`.join('')).toContain('@media');
    expect(media.medium`css`.join('')).toContain('768px');
    expect(media.medium`css`.join('')).toContain('css');
  });
  it('should return a media template for the large screen', () => {
    expect(media.large`css`.join('')).toContain('@media');
    expect(media.large`css`.join('')).toContain('992px');
    expect(media.large`css`.join('')).toContain('css');
  });
  it('should return a media template for the extraLarge screen', () => {
    expect(media.extraLarge`css`.join('')).toContain('@media');
    expect(media.extraLarge`css`.join('')).toContain('1200px');
    expect(media.extraLarge`css`.join('')).toContain('css');
  });
});
