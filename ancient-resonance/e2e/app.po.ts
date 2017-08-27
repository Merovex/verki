import { browser, element, by } from 'protractor';

export class AngularElectronscribestoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('scribesto-root')).getText();
  }
}
