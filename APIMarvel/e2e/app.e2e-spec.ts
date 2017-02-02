import { APIMarvelPage } from './app.po';

describe('apimarvel App', function() {
  let page: APIMarvelPage;

  beforeEach(() => {
    page = new APIMarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
