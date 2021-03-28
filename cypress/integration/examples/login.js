//New Import Class on Cypress
//Declaration of the First Container
var contains 
    describe('Get to the Main Page Action', function(){ //Description of Test Case
        beforeEach (function (){ //Cycle to repetitive actions
            cy.visit('https://start-kleen-test.web.app/'); //Url
    })
    it("Go to Login action", function(){ //Description of each action between test Cases
        cy.get('.mat-drawer-content > .mat-toolbar').click(); //Action
        timeout: 4000;
        cy.get('.mat-button-wrapper').first().click();
        timeout: 4000;
        cy.get('.mat-toolbar > .mat-focus-indicator > .mat-button-wrapper').click();
        timeout: 3000;
    it("Authenticate with Microsoft credentials", function(){
        //Call file related to non-auth login authentication microsoft
        cy.get(WebAuthentication);
        cy.get("auth.js");
        timeout: 5000;
        
        }).then(response => {
            var ADALtoken = response.body.access_token; //Variable for the authentication access
            var expiresOn = response.body.expires_on;  //Variable for the expiration access
        })
    })
    })