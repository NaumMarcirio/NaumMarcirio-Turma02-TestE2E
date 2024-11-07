import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ChooseDepartureAndDestinationElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
  }

  // Selecionar Lugar de saída e Destino

  getDepartureCity(): Locator {
    return this.page.locator('select[name="fromPort"]');
  }

  getDestinationCity(): Locator {
    return this.page.locator('select[name="toPort"]');
  }

  getFindFlightsButton(): Locator {
    return this.page.locator('input[value="Find Flights"]');
  }
}
