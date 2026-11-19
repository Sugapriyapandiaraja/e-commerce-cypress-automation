export class login{
    username_field = '[data-test="username"]';
    password_field = '[data-test="password"]';
    login_button = '[data-test="login-button"]';

    visitUrl(url){
        cy.visit(url);
    }
    enterUsername(username){
        cy.get(this.username_field).type(username);
    }
    enterPassword(password){
        cy.get(this.password_field).type(password);
    }
    clickLogin(){
        cy.get(this.login_button).click();
    }

}