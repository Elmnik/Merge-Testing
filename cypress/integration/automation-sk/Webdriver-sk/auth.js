/// <reference types="Cypress"/>

import authsettings from "./authsettings.json" //import from the authsett.js
import { decode } from "jsonwebtoken"; //Decode library on Package.js

var {
         apiscopes, 
         authority,
         clientId,
         clientSecret,
         password,
         username,
}=  authsettings;
var environment = "login.windows.net"
var injectTokens = (tokenresponse) => {
    var idToken = decode(tokenResponse.id_token)
}
export var login = () => {
    return cy.request({
        method: "POST", //Make a request with the previous method
        url: `https://login.microsoftonline.com/${Cypress.config("t7a94cae1-8140-4699-b980-c359c67828a7")}/oauth2/token`,
        form: true, //On previous line add the tenant id from AzureAD
        body: {
            grant_type: "password", //Could be the password
            client_id: Cypress.config("cfc2879bd-db1e-4072-83c9-a95fe61223d3"), //IdClient on AzureActiveDirectory
            client_secret: Cypress.config("7ac59ed3-74a0-4c0a-9e96-65b3a9d1144c"), //AD Firebase certificates and secrets
            username: username,
            password: password,
            scope: ["openId profile"].concat(apiScopes).join(" "), 
        },      
    }).then((response) => {
        injectTokens(response.body)
        window.localStorage.setItem('auth0Cypress', JSON.stringify(item))//local storage authenticated users details
    }).reload();
    }