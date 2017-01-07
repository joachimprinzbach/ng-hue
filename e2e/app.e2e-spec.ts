import { NgJhPage } from './app.po';

describe('ng-jh App', function() {
  let page: NgJhPage;

  beforeEach(() => {
    page = new NgJhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
