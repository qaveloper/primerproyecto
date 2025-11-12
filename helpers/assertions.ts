import data from '../data/data.json';
import {expect, Page} from '@playwright/test';


export const assertLoginSuccess = async (page: Page) =>{
    const message = await page.locator('p.has-text-align-center strong').innerText();
    await expect(message).toContain(data.expectedMessages.sucessMessage);
    await expect(page).toHaveURL(data.urls.loginSuccess);
}

export const assertLoginFailure = async (page: Page) =>{
    const message = await page.locator('#error').innerText();
    await expect(message).toContain(data.expectedMessages.errorMessageUser);
    
}