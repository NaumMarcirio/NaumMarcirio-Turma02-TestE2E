import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';
import FlightChoosePage from '../support/pages/FlightChoosePage';
import PurchasePage from '../support/pages/PurchasePage';

test.describe('Reserva de voo', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');

  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.blazeDemo')
    .retrieveData();

  test('Buscar voo', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto(`${BASE_URL}/index.php`, { waitUntil: 'load' });
    await homePage.chooseFlight('Paris', 'London');
  });

  test('Selecionar voo', async ({ page }) => {
    const flightChoosePage = new FlightChoosePage(page);
    await page.goto(`${BASE_URL}/reserve.php`, { waitUntil: 'load' });
    await flightChoosePage.selectFlight();
  });

  test('Completar compra', async ({ page }) => {
    const purchasePage = new PurchasePage(page);
    await page.goto(`${BASE_URL}/purchase.php`, { waitUntil: 'load' });
    await purchasePage.completePurchase('Naum', '123123123123');
  });
});
