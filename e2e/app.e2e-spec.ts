import { AtosPortalPage } from './app.po';

describe('atos-portal App', () => {
  let page: AtosPortalPage;

  beforeEach(() => {
    page = new AtosPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
