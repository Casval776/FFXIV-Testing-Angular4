import { FFXIVTestingPage } from './app.po';

describe('ffxiv-testing App', () => {
  let page: FFXIVTestingPage;

  beforeEach(() => {
    page = new FFXIVTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
