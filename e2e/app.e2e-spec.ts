import { NavyPage } from './app.po';

describe('navy App', function() {
  let page: NavyPage;

  beforeEach(() => {
    page = new NavyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
