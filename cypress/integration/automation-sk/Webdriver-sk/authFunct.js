const puppeteer = require('puppeteer'); //declaration for the puppeteer function method
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

            //Back to App
            await page.waitfor(5000);
            page=await browser.newPage();
            await page.goto(`${root}/<page in your app>`);

            await page.waitForSelector('<selector in that page>', {visible: true});

        const localstorageData = await page.evaluate(() => { //Use authentication for localstorage session
            const {accesstoken, userData } = localStorage;
            return {accesstoken, userData};

        });

        browser.close();
        return localStorageData; //localstorage from WebBrowser
       }catch (error){
            console.error(error);
            browser.close();
            return 0;
        }       
        });
    return creds;
     };