const { expect } = require('@playwright/test');
exports.Loginpage = class Loginpage {

    constructor(page)
    {
       
    // Accessing the current page object provided by Playwright
        this.page=page;
       
    // Locator to interact with login name field
        this.username=page.locator("//input[contains(@id,'Container_txtUserLogin')]");
    // Locator to interact with login password field
        this.password=page.locator("//input[contains(@id,'Container_txtPassword')]");
    //locator represents Login button element
        this.loginbtn=page.getByRole('button', { name: 'Login' });
    //Locator to interact with link for t&c
        this.term=page.getByRole('link', { name: 'Terms & Conditions' })
    //Locator to interact with forgot password link
        this.fpwd=page.getByRole('link', { name: 'Forgot Password ?' });
    //Locator to interact with email textbox
        this.fname= page.getByRole('textbox', { name: 'Write Your TestYou LoginId or EmailId Here !' });
    //Locator for button element to send password reset link
        this.fpwdbtn=page.getByRole('button', { name: 'Submit' });
    //Locator to interact with text confirming if reseting password email sent
        this.fpwdmsg=page.locator("//span[contains(@id,'lblOutput')]");

    }

   
    async login(username,password)
    {
    //Launching the baseURL
    await this.page.goto('/login.aspx');
    //Clicking and filling the user name field
    
        await this.username.fill(username);
    //Clicking and filling the password field 
      
        await this.password.fill(password);
    //Clicking the login button
        await this.loginbtn.click();
          
    }

  async terms()
    { 
    //Launching the baseUrl
        await this.page.goto('/login.aspx');
    // Awaiting all promise and accessing the promise result
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
    // This action triggers the new tab
            this.term.click()  

          ])
    //Locating the element
        const capturedtext= await newPage.getByText('Product Descriptions:');
    //Capturing the text
         const textvalue=await capturedtext.textContent();
    // returning text value to test
          return textvalue;

    }

    async forgotpwd(username)
    { 
    //Launching the baseUrl
    await this.page.goto('/login.aspx');
     //filling username details
       await this.fpwd.click();
         await this.fname.fill(username);
     // clicking button to send reset password link to email
         await this.fpwdbtn.click();
     //capturing and returing the text
         return await this.fpwdmsg.textContent();

    }

}
