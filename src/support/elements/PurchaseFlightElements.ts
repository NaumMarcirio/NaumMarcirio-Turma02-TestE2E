import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class PurchaseFlightElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  getPassengerNameField(): Locator {
    return this.page.locator('input[name="inputName"]');
  }

  getCreditCardField(): Locator {
    return this.page.locator('input[name="creditCardNumber"]');
  }

  getPurchaseFlightButton(): Locator {
    return this.page.locator('input[value="Purchase Flight"]');
  }
}
