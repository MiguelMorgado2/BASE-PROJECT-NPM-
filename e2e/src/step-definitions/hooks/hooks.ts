import {BeforeAll, Before, AfterAll, After} from "@cucumber/cucumber";

const {chromium} = require("playwright");

BeforeAll(async function ()  {
    global.browser = await chromium.launch({ headless: false });
   });
  
AfterAll(async function ()  {
    await global.browser.close();
    });
Before(async function ()  {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    });
After(async function ()  {
     await global.page.close();
 });