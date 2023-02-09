/// <reference types="cypress" />
describe("réinitialisation mot de passe", () => {
    it('connexion BackMarket', () => {
       
        cy.intercept({
            url: 'https://preprod.backmarket.fr/bm/lost-password',
            method: 'POST'
          }).as('waitEmail')
        cy.visit(' https://preprod.backmarket.fr/fr-fr/password-reset');
        cy.get('[data-qa="accept-cta"] > .MkLAMntR').click();
        cy.get('#email').type('d137d204-9f3b-40c8-8083-d080b7c3bb88@mailslurp.com');
        cy.get('[data-test="password-reset-submit-button"]').click();
        cy.wait('@waitEmail');
       cy.mailslurp()
       .then(mailslurp => 
        mailslurp.waitForLatestEmail('d137d204-9f3b-40c8-8083-d080b7c3bb88', 40000, true))
       .then(email => 
        cy.document().invoke('write', email.body));
        cy.get('[class="t_fz15px t_fwbold t_fsnormal t_w100p m_fwbold m_fsnormal m_w100p"]').should("contain","Mon mot de passe");
        cy.get('[class="t_fz15px t_fwbold t_fsnormal t_w100p m_fwbold m_fsnormal m_w100p"]').click();
        cy.get('#newPassword').should("be.visible");
        cy.get('#newPassword').type('@1980Fatma');
        cy.get('#newPasswordConfirmation').type('@1980Fatma');
        cy.get('.MkLAMntR').click();
        cy.get('[class="_1xMx-RYw _3jgXaWY4 _1ayVgG8s"]').should("contain","Welcome Back!");
       cy.get('#signin-email').type('d137d204-9f3b-40c8-8083-d080b7c3bb88@mailslurp.com');
       cy.get('#signin-password').type('@1980Fatma');
       cy.get('[data-qa="signin-submit-button"]').click();
    })
})