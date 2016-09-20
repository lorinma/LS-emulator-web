import { LsEmulatorWebPage } from './app.po';

describe('ls-emulator-web App', function() {
  let page: LsEmulatorWebPage;

  beforeEach(() => {
    page = new LsEmulatorWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
