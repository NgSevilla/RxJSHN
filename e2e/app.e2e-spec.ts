import { Angular4HackernewsPage } from './app.po';

describe('angular4-hackernews App', () => {
  let page: Angular4HackernewsPage;

  beforeEach(() => {
    page = new Angular4HackernewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
