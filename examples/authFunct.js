const puppeteer = require('puppeteer');

exports.getAadToken = async function getAadToken(userObject){
    const {email, password, root} =userObject;
    const creds = await puppeteer
    .launch({headless: true})
    .then(async browser => {
        try{
            let page = await browser.newPage();
            //login page
            await page.goto(root);
            await page.click();
            await page.waitfor(5000);

            const pages = await browser.pages();
            const popUp = pages.pop();
            //Azure login 
            await popUp.click('input[type=email]');
            await popUp.type('input[type=email]', email,{
                delay: 50
            });
            await popUp.waitfor(5000);
            await popUp.click('input[type=submit]');
            await popUp.waitfor(5000);
            await popUp.click('input[type="password"]');
            await popUp.waitfor(5000);
            await popUp.type('input[type="password"]', password,{
                delay:50
            });
            await popUp.waitfor(5000);
            await popUp.click('input[type=submit]');

            const confirm = await popUp.content();

            if(confirm.includes('sign in to your account')) {
                await popUp.waitfor(5000);
                await popUp.click('input[type=submit]');
            }

        }

    
    })
}