
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

 //enter name
 await page.locator('input[data-qa="signup-name"]').fill("jashwanthSai");
 //enter password
 await page.locator('input[data-qa="signup-email"]').fill("jashwanthsai1993@gmail.com");

    //click on signup
    await page.locator('button[data-qa="signup-button"]').click();

    //click on radio button title as mrs
    await page.locator('input[id="id_gender1"]').click();
    //enter password
    await page.locator('input[data-qa="password"]').fill("Sunnyyadav@123");

    //handle dropdown
    //select day from dropdown list
    await page.selectOption('#days',{index:14});
    await expect(page.locator('#days')).toHaveValue('14');

    //select month from dropdown list

    await page.selectOption('#months',{index:7});
    await expect(page.locator('#months')).toHaveValue('7');

    //select year from dropdown list
    await page.selectOption('#years',{index:8});
    await expect(page.locator('#years')).toHaveValue('2014');

    //enter firstname

    await page.locator('input[data-qa="first_name"]').fill("JashwanthSai");
    //enter last name
    await page.locator('input[data-qa="last_name"]').fill("Sunnyyadav");
    //enter company
    await page.locator('input[data-qa="company"]').fill("Infosys");
    //enter address
    await page.locator('input[data-qa="address"]').fill("Shipabc");
    //enter address 2
    await page.locator('input[data-qa="address2"]').fill("Shipxyz");
    
    //enter state 
    await page.locator('input[data-qa="state"]').fill("Karnataka");

    //enter city
    await page.locator('input[data-qa="city"]').fill("Banglore");

    //enter zipcode
    await page.locator('input[data-qa="zipcode"]').fill("560069");

    //enter mobile number
    await page.locator('input[data-qa="mobile_number"]').fill("9550712965");


    //click on create account
    await page.locator('button[data-qa="create-account"]').click();

    //click on continue

    await page.locator('a[data-qa="continue-button"]').click();

   // await page.pause();

      await page.screenshot({ path: 'my_screenshot.png', fullPage: true })
  



    

    






})