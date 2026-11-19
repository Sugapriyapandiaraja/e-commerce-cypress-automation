import { login } from "../pages/login";
let Login = new login();
import secrets from "../fixtures/secrets.json"
describe("validating login page", () => {
  it("Login using valid usernames", () => {
  
        Login.visitUrl(Cypress.config("baseUrl"));
        Login.enterUsername(secrets.username);
        Login.enterPassword(secrets.password);
         Login.clickLogin();
         cy.wait(3000);
        cy.get("body").should("contain.text","Products");
      });
    
     
    });
