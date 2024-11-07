import { Page } from '@playwright/test';
import PurchaseFlightElements from '../elements/PurchaseFlightElements';
import BasePage from './BasePage';

export default class PurchasePage extends BasePage {
  readonly PurchaseFlightElements: PurchaseFlightElements;

  constructor(readonly page: Page) {
    super(page);
    this.PurchaseFlightElements = new PurchaseFlightElements(page);
  }

  // comprar a passagem
  async completePurchase(name: string, creditCard: string): Promise<void> {
    await this.PurchaseFlightElements.getPassengerNameField().fill(name);
    await this.PurchaseFlightElements.getCreditCardField().fill(creditCard);
    await this.PurchaseFlightElements.getPurchaseFlightButton().click();
  }
}
