Cypress.Commands.add("checkMessageInToast", (message) => {
  cy.get(".toast").should("have.text", message);
});

Cypress.Commands.add(
  "selectOptionFromComboBox",
  (comboBoxSelector, optionText) => {
    (cy
      .get(`label[for="${comboBoxSelector}"]`)
      .parent()
      .as(`campo-${comboBoxSelector}`),
      cy.get(`@campo-${comboBoxSelector}`).click());
    cy.get(`@campo-${comboBoxSelector}`).contains(optionText).click();
  },
);
