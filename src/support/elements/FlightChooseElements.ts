import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class FlightChooseElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  getFlightOption(flightNumber: string, flight: string): Locator {
    return this.page.locator(
      ` tr >> form[name="${flightNumber}"] >> td:has-text("${flight}") ~ td >> input[value="Choose This Flight"]`
    );
  }

  getChooseFlightButton(): Locator {
    return this.page.locator('input[value="Choose This Flight"]');
  }

  getFirstFlightOption(): Locator {
    return this.page.locator('input[value="Choose This Flight"]').first();
  }
}
