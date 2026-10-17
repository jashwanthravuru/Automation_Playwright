
import {test,expect,chromium} from "@playwright/test"
//import { constrainedMemory } from "process";
//const {test,expect}=require('@playwright/test')


test("open the Application",async({})=>{

//launch the browser

const browser=await chromium.launchPersistentContext("",{channel:'msedge'})
const page= await browser.pages()[0]


    await page.goto('https://demowebshop.tricentis.com/');

    //maximize window

    await page.setViewportSize({width: 1920,height: 1080 });
    //click on register link

    await page.locator('a[class="ico-register"]').click();
    //click on radio button as male
    await page.locator('input[id="gender-male"]').click();
    //enter first name
    await page.locator('input[id="FirstName"]').fill("sharu");
    //enter last name
    await page.locator('input[id="LastName"]').fill("Golla");

    ////enter email
    await page.locator('input[name="Email"]').fill("sharuyadav132222@gmail.com");

    //enter password
    await page.locator('input[name="Password"]').fill("Sharuyadav93");

    //enter confirm password
    await page.locator('input[name="ConfirmPassword"]').fill("Sharuyadav93");

    //click on register
    await page.locator('input[name="register-button"]').click();


    await page.screenshot({ path: 'my_screenshot.png', fullPage: true })





})
