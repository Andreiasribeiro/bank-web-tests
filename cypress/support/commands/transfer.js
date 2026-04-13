Cypress.Commands.add(
  "toMakeTransfer",
  (sourceAccount, destinationAccount, amount) => {
    cy.selectOptionFromComboBox("conta-origem", sourceAccount);
    cy.selectOptionFromComboBox("conta-destino", destinationAccount);
    cy.get("#valor").click().type(amount);
    cy.contains("button", "Transfer").click();
  },
);
