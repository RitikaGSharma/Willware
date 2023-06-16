const { test, expect } = require('@playwright/test');
import { Loginpage } from '../pages/loginpage';

const data=JSON.parse(JSON.stringify(require("../testdata/data.json")))

test('Login demo Test', async ({ page }) =>
{
// Creating page object
    const logpage= new Loginpage(page); 
//calling  login fundtion from page class
    await logpage.login(data.username,data.password);
//asserting if login successful    
    await expect(page.url()).toContain('login');
    
    
});

test('Terms Conditions', async ({ page }) => {
  
   // Creating page object
   const logpage= new Loginpage(page);
  //called method which return product description
const value=await logpage.terms();
//verify
 expect (value).toContain('Product Descriptions:');
  
} );

 test('Forgot Password', async ({ page }) => {

    // Creating page object
    const logpage= new Loginpage(page);
    //called method which return reset password msg  
   const msg= await logpage.forgotpwd(data.username);
   //verify
   await expect (msg).toContain('Sent');
 });