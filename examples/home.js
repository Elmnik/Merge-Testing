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
        //cy.get('.ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').first().click();
        //timeout: 4000;
        cy.get('mat-focus-indicator mat-raised-button mat-button-base').click();
        timeout: 5000;
Cypress.Commands.add("Login",()=>{ //custom command for authenticate
        cy.request({
            method: "POST", //Make a request with the previous method
            url: `https://login.microsoftonline.com/${Cypress.config("t7a94cae1-8140-4699-b980-c359c67828a7")}/oauth2/token`,
            form: true, //On previous line add the tenant id from AzureAD
            body: {
                grant_type: "client_credentials",
                client_id: Cypress.config("cfc2879bd-db1e-4072-83c9-a95fe61223d3"), //IdClient on AzureActiveDirectory
                client_secret: Cypress.config("ClientSecret"), //Firebase
            },      
            }
        )
    })
    })
    })
    })