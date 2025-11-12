import {Page} from '@playwright/test';
import data from '../data/data.json';

export default class LoginPage{
    constructor(private page: Page){}

    async goto(){
        await this.page.goto(data.urls.loginPage);
    }

    async fillLoginForm(username: string, password: string){
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        //await this.page.click('#submit');
    }

    async submit(){
        await this.page.click('#submit');
    }
}