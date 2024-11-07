import { Page } from '@playwright/test';
import BasePage from './BasePage';
import FlightChooseElements from '../elements/FlightChooseElements';

export default class FlightChoosePage extends BasePage {
  readonly FlightChooseElements: FlightChooseElements;

  constructor(readonly page: Page) {
    super(page);
    this.FlightChooseElements = new FlightChooseElements(page);
  }

  // Escolhe um voo para prosseguir
  async selectFlight(): Promise<void> {
    const firstButton = this.FlightChooseElements.getFirstFlightOption();
    await firstButton.click();
  }
}
