import { Page } from '@playwright/test';
import BasePage from './BasePage';
import ChooseDepartureAndDestinationElements from '../elements/ChooseDepartureAndDestinationElements';

export default class HomePage extends BasePage {
  readonly ChooseDepartureAndDestinationElements: ChooseDepartureAndDestinationElements;

  constructor(readonly page: Page) {
    super(page);
    this.ChooseDepartureAndDestinationElements =
      new ChooseDepartureAndDestinationElements(page);
  }

  // Escolher lugar que vai sair e que quer ir
  async chooseFlight(from: string, to: string): Promise<void> {
    await this.ChooseDepartureAndDestinationElements.getDepartureCity().selectOption(
      { label: from }
    );
    await this.ChooseDepartureAndDestinationElements.getDestinationCity().selectOption(
      { label: to }
    );
    await this.ChooseDepartureAndDestinationElements.getFindFlightsButton().click();
  }
}
