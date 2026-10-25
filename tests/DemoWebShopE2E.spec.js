
import {test,expect,chromium} from "@playwright/test"
//import { constrainedMemory } from "process";
//const {test,expect}=require('@playwright/test')


test("open the Application",async({})=>{

//launch the browser

const browser=await chromium.launchPersistentContext("",{channel:'msedge'})
const page= await browser.pages()[0]
await page.waitForTimeout(5000);
await page.goto('https://demowebshop.tricentis.com/');
//maximize window
    await page.setViewportSize({width: 1920,height: 1080 });
    //click on login link
    await page.locator("//a[@class='ico-login']").click();
    //enter email id
    await page.locator("//input[@id='Email']").fill("jashwanthsai1993@gmail.com");
    //enter password
    await page.locator("//input[@name='Password']").fill("Sunnyyadav@123");
    //click on login button
    await page.locator("//input[@class='button-1 login-button']").click();
    await page.waitForTimeout(4000);
    //verify user name
    //await expect(page.locator("//a[@class='account']")).toHaveText("jashwanthsai1993@gmail.com");
    //click om books menu icon
    await page.locator("//ul[@class='top-menu']//a[normalize-space()='Books']").click();
    await page.waitForTimeout(4000);
    //click on add to cart button
    await page.locator("(//input[@class='button-2 product-box-add-to-cart-button'])[1]").click();
    await page.waitForTimeout(3000);
    //click on shopping cart link
    await page.locator("//li[@id='topcartlink']//a[@class='ico-cart']").click();
    await page.waitForTimeout(3000);
    //click on terms and condition check box
    await page.locator("//input[@id='termsofservice']").check();
//click on checkout button
await page.locator("//button[@id='checkout']").click();
//click on continue button
await page.locator("(//input[@class='button-1 new-address-next-step-button'])[1]").click();
//click on continue shipping address
await page.locator("//input[@onclick='Shipping.save()']").click();
//click on continue shipping method
await page.locator("//input[@onclick='ShippingMethod.save()']").click();
//click on payment method continue button
await page.locator("//input[@onclick='PaymentMethod.save()']").click();
//click on continue payement information button
await page.locator("//input[@class='button-1 payment-info-next-step-button']").click();
//click on confirm button
await page.locator("//input[@value='Confirm']").click();
//verify order message
//await expect(page.locator("//storage[@class='section order-completed']//div[@class='title']")).toHaveText("your order has been successfully processed!");
//click on logout link
await page.locator("//a[@class='ico-logout']").click();




})


