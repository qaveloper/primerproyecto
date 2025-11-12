import {test} from '@playwright/test';
import LoginPage from '../pages/loginPage';
import data from '../data/data.json';
import { assertLoginFailure, assertLoginSuccess } from '../helpers/assertions';

test('login exitoso :D', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillLoginForm(data.validUser.username, data.validUser.password);
    await loginPage.submit();
    await assertLoginSuccess(page);
});

test('login fallido :( ', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillLoginForm(data.invalidUser.username, data.invalidUser.password);
    await loginPage.submit();
    await assertLoginFailure(page);

})



