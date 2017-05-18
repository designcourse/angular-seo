import { Ang4SeoPage } from './app.po';

describe('ang4-seo App', () => {
  let page: Ang4SeoPage;

  beforeEach(() => {
    page = new Ang4SeoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
