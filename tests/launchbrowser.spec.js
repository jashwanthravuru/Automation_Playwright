
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

    await page.locator('a[class="ico-login"]').click();
    await page.locator('input[id="Email"]').fill('jashwanthsai1993@gmail.com');
    await page.locator('input[name="Password"]').fill('Sunnyyadav@123');
await page.locator('input[class="button-1 login-button"]').click();

await page.screenshot();

await page.locator('li[id="topcartlink"]').click();



//check the check box
await page.locator('input[id="termsofservice"]').click();

//click on checkout button
await page.locator('button[name="checkout"]').click();

//await page.waitForEvent(5000);

//click on billing continue

await page.locator('input[onclick="Billing.save()"]').click();

//click on shipping address continue
await page.locator('input[onclick="Shipping.save()"]').click();

//click on shipping method 
await page.locator('input[onclick="ShippingMethod.save()"]').click();

//click on payment method

await page.locator('input[onclick="PaymentMethod.save()"]').click();

//click on payment information

await page.locator('input[onclick="PaymentInfo.save()"]').click();

//Scroll down by 200 pixels
await page.evaluate("window.scrollBy(0, 200)")

//click on confirm order

await page.locator('input[onclick="ConfirmOrder.save()"]').click();




//await page.locator('a[class="ico-logout"]').click();



    

   




//await page.locator('textarea[name="q"]').fill('Playwright');
    //await page.keyboard.press('Enter');
    

    await page.waitForTimeout(5000);


})