
import {test,expect,chromium} from "@playwright/test"
import { checkServerIdentity } from "tls";
//import { constrainedMemory } from "process";
//const {test,expect}=require('@playwright/test')



test("open the Application",async({})=>{

//launch the browser

const browser=await chromium.launchPersistentContext("",{channel:'msedge'})
const page= await browser.pages()[0]


    await page.goto('https://automationexercise.com/');

    //maximize window

    await page.setViewportSize({width: 1920,height: 1080 });

    //click on sign up/login
 await page.locator('a[href="/login"]').click();


 //enter email address

await page.locator('input[data-qa="login-email"]').fill("jashwanthsai1993@gmail.com");
//enter password
await page.locator('input[data-qa="login-password"]').fill("Sunnyyadav@123");
//click on login
await page.locator('button[data-qa="login-button"]').click();

//click on products
await page.locator('a[href="/products"]').click();

//click on add to cart
//await page.locator('div[class="col-sm-9 padding-right"//div[2]//div[1]//div[1]//div[2]//div[1]//a[1]"]').click();


})