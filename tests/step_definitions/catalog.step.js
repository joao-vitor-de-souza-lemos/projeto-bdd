const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

    Then('o cliente será redirecionado para a tela de catálogos', async function () {
        const catalogPageLabel = await this.page.locator("[data-test='title']");
        await expect(catalogPageLabel).toContainText('Products');
    });