import {test,expect,chromium} from "@playwright/test"
//import { constrainedMemory } from "process";
//const {test,expect}=require('@playwright/test')



test("open the Application",async({})=>{

//launch the browser

const browser=await chromium.launchPersistentContext("",{channel:'msedge'})
const page= await browser.pages()[0]


    await page.goto('https://www.amazon.com/');

    //maximize window

    await page.setViewportSize({width: 1920,height: 1080 });

    //click on search bar
    await page.locator('input[id="twotabsearchtextbox"]').fill("Iphone13");
    //click on search icon
    await page.locator('input[id="nav-search-submit-button"]').click();

    //select from list

    //await page.locator('span[class="s-heavy"]').click();


    })