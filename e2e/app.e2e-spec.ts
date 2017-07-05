import { RestletPage } from './app.po';

describe('restlet App', () => {
  let page: RestletPage;

  beforeEach(() => {
    page = new RestletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
