import { AngularElectronscribestoPage } from './app.po';

describe('angular-electron-scribesto App', () => {
  let page: AngularElectronscribestoPage;

  beforeEach(() => {
    page = new AngularElectronscribestoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
