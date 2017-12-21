import { browser, by, element } from 'protractor';

const { SpecReporter } = require('jasmine-spec-reporter');

const { options } = require('../protractor-args');

export class AppPage {
  navigateTo() {
    return browser.get(options.virtualPath);
  }
  getParagraphText() {
    return element(by.css('sa-app-root .navbar-brand')).getText();
  }
}

describe('App', () => {
    let page: AppPage;
    beforeEach(() => {
      page = new AppPage();
    });
    it('should display welcome message', () => {
      page.navigateTo();
      expect(page.getParagraphText()).toEqual('Angular Fundamental Concepts');
    });
  });
