import { PKAngularPage } from './app.po';

describe('pkangular App', function() {
  let page: PKAngularPage;

  beforeEach(() => {
    page = new PKAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
